import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

// Dados dos 42 processos
const processosData = [
  { numero: "1048787-16.2024.8.26.0224", assunto: "Direitos da Personalidade", status: "Ativo" },
  { numero: "1001146-35.2024.8.26.0223", assunto: "Internacao compulsoria", status: "Ativo" },
  { numero: "1000964-97.2025.8.26.0228", assunto: "Tratamento medico-hospitalar", status: "Ativo" },
  { numero: "1501482-88.2023.8.26.0005", assunto: "Nomeacao", status: "Ativo" },
  { numero: "1017833-04.2020.8.26.0005", assunto: "Tutela de Urgencia", status: "Ativo" },
  { numero: "1003549-49.2024.8.26.0005", assunto: "Tutela de Evidencia", status: "Ativo" },
  { numero: "1003998-07.2024.8.26.0005", assunto: "Pericia", status: "Ativo" },
  { numero: "1004357-54.2024.8.26.0005", assunto: "Pericia", status: "Ativo" },
];

export default function Home() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      window.location.href = '/login';
    } else {
      setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  if (!auth) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{ background: '#1B3A5C', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: '#B8956A' }}>SanusJuris</h1>
        <div>
          <span style={{ marginRight: '1rem' }}>Dr. Adiel Rios</span>
          <Button onClick={handleLogout} style={{ background: '#B8956A' }}>Sair</Button>
        </div>
      </header>

      {/* Stats */}
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <Card>
          <CardHeader><CardTitle>Total Processos</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1B3A5C' }}>42</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Ativos</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'green' }}>42</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Pendentes</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'orange' }}>8</p></CardContent>
        </Card>
      </div>

      {/* Lista de Processos */}
      <div style={{ padding: '0 2rem 2rem' }}>
        <Card>
          <CardHeader><CardTitle>Processos Recentes</CardTitle></CardHeader>
          <CardContent>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1B3A5C' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Numero</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Assunto</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {processosData.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '0.5rem' }}>{p.numero}</td>
                    <td style={{ padding: '0.5rem' }}>{p.assunto}</td>
                    <td style={{ padding: '0.5rem' }}><span style={{ background: 'green', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{p.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer style={{ background: '#1B3A5C', color: '#B8956A', padding: '1rem', textAlign: 'center' }}>
        <p>2026 SanusJuris v4.2.0 - Dr. Adiel Rios</p>
      </footer>
    </div>
  );
}
