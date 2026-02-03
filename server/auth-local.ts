/**
 * Servico de autenticacao local com usuario e senha
 * Sistema exclusivo para Dr. Adiel Rios
 */

import { getDb } from "./db";
import { users } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import * as crypto from "crypto";

const PERITO_CONFIG = {
  username: "adiel.rios",
  email: "adiel.rios@abp.org.br",
  name: "Dr. Adiel Rios",
  defaultPassword: "adiel20251215"
};

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verifyHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hash === verifyHash;
}

export async function initializeAdminUser(): Promise<void> {
  try {
    const db = await getDb();
    if (!db) {
      console.warn("[Auth] Banco de dados nao disponivel");
      return;
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.username, PERITO_CONFIG.username))
      .limit(1);

    if (existingUser.length === 0) {
      const passwordHash = hashPassword(PERITO_CONFIG.defaultPassword);
      
      await db.insert(users).values({
        openId: `local_${PERITO_CONFIG.username}`,
        username: PERITO_CONFIG.username,
        name: PERITO_CONFIG.name,
        email: PERITO_CONFIG.email,
        loginMethod: "local",
        passwordHash: passwordHash,
        role: "perito"
      });
      
      console.log("[Auth] Perito Dr. Adiel Rios configurado");
    } else {
      const user = existingUser[0];
      if (!user.passwordHash) {
        const passwordHash = hashPassword(PERITO_CONFIG.defaultPassword);
        await db
          .update(users)
          .set({ passwordHash, role: "perito" })
          .where(eq(users.username, PERITO_CONFIG.username));
        console.log("[Auth] Senha do Perito atualizada");
      }
    }
  } catch (error) {
    console.error("[Auth] Erro ao inicializar usuario:", error);
  }
}

export async function authenticateUser(username: string, password: string): Promise<{
  success: boolean;
  user?: { id: number; username: string; name: string | null; email: string | null; role: string; };
  error?: string;
}> {
  try {
    const db = await getDb();
    if (!db) return { success: false, error: "Banco de dados nao disponivel" };

    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    if (result.length === 0) return { success: false, error: "Usuario nao encontrado" };

    const user = result[0];
    if (!user.passwordHash) return { success: false, error: "Senha nao configurada" };
    if (!verifyPassword(password, user.passwordHash)) return { success: false, error: "Senha incorreta" };

    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, user.id));

    return {
      success: true,
      user: { id: user.id, username: user.username || "", name: user.name, email: user.email, role: user.role }
    };
  } catch (error) {
    console.error("[Auth] Erro na autenticacao:", error);
    return { success: false, error: "Erro interno" };
  }
}

export async function updatePassword(userId: number, newPassword: string): Promise<boolean> {
  try {
    const db = await getDb();
    if (!db) return false;
    const passwordHash = hashPassword(newPassword);
    await db.update(users).set({ passwordHash }).where(eq(users.id, userId));
    return true;
  } catch (error) {
    console.error("[Auth] Erro ao atualizar senha:", error);
    return false;
  }
}

export function generateRecoveryToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function findUserByEmail(email: string): Promise<{ id: number; username: string; name: string | null; email: string | null; } | null> {
  try {
    const db = await getDb();
    if (!db) return null;
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (result.length === 0) return null;
    const user = result[0];
    return { id: user.id, username: user.username || "", name: user.name, email: user.email };
  } catch (error) {
    console.error("[Auth] Erro ao buscar usuario:", error);
    return null;
  }
}
