/**
 * Router de autenticacao local
 */

import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { authenticateUser, findUserByEmail, generateRecoveryToken } from "./auth-local";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { SignJWT } from "jose";
import { ENV } from "./_core/env";
import { sendEmail } from "./email-service";

const JWT_SECRET = new TextEncoder().encode(ENV.cookieSecret || "sanusjuris-secret-key-2024");

export const authLocalRouter = router({
  login: publicProcedure
    .input(z.object({
      username: z.string().min(1, "Usuario obrigatorio"),
      password: z.string().min(1, "Senha obrigatoria"),
    }))
    .mutation(async ({ ctx, input }) => {
      const result = await authenticateUser(input.username, input.password);

      if (!result.success || !result.user) {
        return { success: false, error: result.error || "Credenciais invalidas" };
      }

      const token = await new SignJWT({
        sub: result.user.id.toString(),
        username: result.user.username,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
        openId: `local_${result.user.username}`,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(JWT_SECRET);

      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(COOKIE_NAME, token, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });

      return { success: true, user: result.user };
    }),

  check: publicProcedure.query(({ ctx }) => {
    return {
      authenticated: !!ctx.user,
      user: ctx.user ? { id: ctx.user.id, name: ctx.user.name, email: ctx.user.email, role: ctx.user.role } : null,
    };
  }),

  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: 0 });
    console.log("[Auth] Usuario deslogado");
    return { success: true, message: "Sessao encerrada" };
  }),

  requestPasswordReset: publicProcedure
    .input(z.object({ email: z.string().email("E-mail invalido") }))
    .mutation(async ({ input }) => {
      const user = await findUserByEmail(input.email);
      if (!user) {
        return { success: true, message: "Se o e-mail estiver cadastrado, voce recebera instrucoes." };
      }

      const resetToken = generateRecoveryToken();

      try {
        await sendEmail({
          to: input.email,
          subject: "SanusJuris - Recuperacao de Senha",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1B3A5C 0%, #2d5a8c 100%); padding: 30px; text-align: center;">
                <h1 style="color: #B8956A; margin: 0;">SanusJuris</h1>
                <p style="color: #ffffff; margin: 10px 0 0 0;">Sistema de Gestao de Pericias Medicas</p>
              </div>
              <div style="padding: 30px; background: #ffffff;">
                <h2 style="color: #1B3A5C;">Recuperacao de Senha</h2>
                <p>Ola, ${user.name || "Usuario"},</p>
                <p>Seu nome de usuario: <strong>${user.username}</strong></p>
                <p>Codigo de recuperacao:</p>
                <div style="background: #f5f5f5; padding: 15px; text-align: center; margin: 20px 0;">
                  <code style="font-size: 18px; color: #1B3A5C;">${resetToken.substring(0, 16)}</code>
                </div>
              </div>
            </div>
          `,
        });
      } catch (error) {
        console.error("[Auth] Erro ao enviar e-mail:", error);
      }

      return { success: true, message: "Se o e-mail estiver cadastrado, voce recebera instrucoes." };
    }),
});
