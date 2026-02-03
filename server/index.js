import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist/client')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SanusJuris v4.2.0' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`SanusJuris rodando na porta ${PORT}`);
});
