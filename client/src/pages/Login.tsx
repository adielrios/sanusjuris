import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'adiel.rios' && password === 'adiel20251215') {
      localStorage.setItem('auth', 'true');
      window.location.href = '/';
    } else {
      setError('Usuario ou senha incorretos');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1B3A5C 0%, #2d5a8c 100%)' }}>
      <Card style={{ width: '100%', maxWidth: '400px', margin: '1rem' }}>
        <CardHeader style={{ textAlign: 'center' }}>
          <CardTitle style={{ color: '#1B3A5C', fontSize: '2rem' }}>SanusJuris</CardTitle>
          <CardDescription style={{ color: '#B8956A' }}>Sistema de Gestao de Pericias Medicas</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            <div style={{ marginBottom: '1rem' }}>
              <Label>Usuario</Label>
              <Input value={username} onChange={(e: any) => setUsername(e.target.value)} placeholder="Digite seu usuario" />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Label>Senha</Label>
              <Input type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Digite sua senha" />
            </div>
            <Button type="submit" style={{ width: '100%', background: '#1B3A5C' }}>Entrar</Button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>2026 SanusJuris - Dr. Adiel Rios</p>
        </CardContent>
      </Card>
    </div>
  );
}
