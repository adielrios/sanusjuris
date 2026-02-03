/**
 * Gerador de PDF/DOCX para laudos periciais
 * Template Único SanusJuris - Elegante, Minimalista, Autoridade
 * Conforme Identidade Visual Premium - Dr. Adiel Ríos
 * 
 * VERSÃO CORRIGIDA - Template Unificado com Borda Grega
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Header,
  Footer,
  PageNumber,
  ImageRun,
  BorderStyle,
  convertInchesToTwip,
} from "docx";
import { storagePut } from "./storage";
import * as fs from "fs";
import * as path from "path";

// ============================================
// CONFIGURAÇÕES DO PERITO - DR. ADIEL RÍOS
// ============================================
const PERITO = {
  nome: "Dr. Adiel Rios",
  nomeCompleto: "Dr. Adiel Carneiro Rios",
  crm: "CRM 138355-SP",
  rqe: "RQE 69167",
  especialidade: "Médico Psiquiatra",
  titulacao: "Mestre em Psiquiatria e Psicologia Médica - UNIFESP",
  endereco: "Rua Joaquim Floriano, 466, CJ 1509",
  email: "adiel.rios@abp.org.br",
  rodape: "SanusJuris | Rua Joaquim Floriano, 466, CJ 1509 | adiel.rios@abp.org.br",
};

// ============================================
// CORES DA IDENTIDADE VISUAL SANUSJURIS
// ============================================
const CORES = {
  azulNavy: "#1B365D",
  azulPetroleo: "#2C5F7C",
  dourado: "#C9A962",
  marfim: "#FDFBF7",
  marcaDaguaAzul: "#7A9BB5",
  marcaDaguaDourado: "#C9B896",
  bordaGrega: "#B8A978",
  textoSecundario: "#555555",
  // Aliases
  azulMarinho: "#1B365D",
  begeClaro: "#FDFBF7",
  brancoOffWhite: "#FDFBF7",
  cinzaTexto: "#1B365D",
  cinzaClaro: "#2C5F7C",
  cinzaSutil: "#4A5568",
  bege: "#FDFBF7",
};

// ============================================
// SVG DO LOGO CABEÇALHO
// ============================================
const LOGO_CABECALHO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 95" width="85" height="68">
  <g fill="#1B365D">
    <path d="M18 32 Q3 26 7 16 Q15 22 26 18 Q18 26 21 34 Z"/>
    <path d="M15 40 Q0 36 3 24 Q12 30 24 27 Q16 35 17 42 Z"/>
    <path d="M13 48 Q-2 46 1 34 Q10 39 22 37 Q14 44 15 50 Z"/>
    <path d="M102 32 Q117 26 113 16 Q105 22 94 18 Q102 26 99 34 Z"/>
    <path d="M105 40 Q120 36 117 24 Q108 30 96 27 Q104 35 103 42 Z"/>
    <path d="M107 48 Q122 46 119 34 Q110 39 98 37 Q106 44 105 50 Z"/>
  </g>
  <circle cx="60" cy="12" r="5" fill="#C9A962"/>
  <rect x="57" y="16" width="6" height="52" fill="#C9A962" rx="2"/>
  <g fill="none" stroke="#C9A962" stroke-width="4" stroke-linecap="round">
    <path d="M60 22 Q45 32 60 42 Q75 52 60 62"/>
    <path d="M60 22 Q75 32 60 42 Q45 52 60 62"/>
  </g>
  <ellipse cx="48" cy="25" rx="4" ry="3" fill="#C9A962"/>
  <ellipse cx="72" cy="25" rx="4" ry="3" fill="#C9A962"/>
  <rect x="30" y="66" width="60" height="3" fill="#C9A962" rx="1"/>
  <line x1="38" y1="69" x2="38" y2="80" stroke="#C9A962" stroke-width="2"/>
  <line x1="82" y1="69" x2="82" y2="80" stroke="#C9A962" stroke-width="2"/>
  <path d="M25 80 Q38 88 51 80" stroke="#C9A962" stroke-width="3" fill="none"/>
  <path d="M69 80 Q82 88 95 80" stroke="#C9A962" stroke-width="3" fill="none"/>
</svg>`;

// ============================================
// SVG DA MARCA D'ÁGUA
// ============================================
const LOGO_MARCA_DAGUA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180" width="350" height="315">
  <g fill="#7A9BB5" opacity="0.9">
    <path d="M30 60 Q5 50 10 30 Q25 40 40 35 Q30 48 35 60 Z"/>
    <path d="M25 72 Q0 65 3 45 Q18 55 38 50 Q28 62 30 72 Z"/>
    <path d="M22 84 Q-3 80 0 60 Q15 68 35 65 Q25 76 27 84 Z"/>
    <path d="M170 60 Q195 50 190 30 Q175 40 160 35 Q170 48 165 60 Z"/>
    <path d="M175 72 Q200 65 197 45 Q182 55 162 50 Q172 62 170 72 Z"/>
    <path d="M178 84 Q203 80 200 60 Q185 68 165 65 Q175 76 173 84 Z"/>
  </g>
  <circle cx="100" cy="28" r="10" fill="#C9B896"/>
  <rect x="95" y="35" width="10" height="95" fill="#C9B896" rx="3"/>
  <g fill="none" stroke="#C9B896" stroke-width="7" stroke-linecap="round">
    <path d="M100 45 Q70 65 100 85 Q130 105 100 125"/>
    <path d="M100 45 Q130 65 100 85 Q70 105 100 125"/>
  </g>
  <ellipse cx="78" cy="50" rx="8" ry="6" fill="#C9B896"/>
  <ellipse cx="122" cy="50" rx="8" ry="6" fill="#C9B896"/>
  <rect x="40" y="128" width="120" height="5" fill="#C9B896" rx="2"/>
  <line x1="55" y1="133" x2="55" y2="155" stroke="#C9B896" stroke-width="3"/>
  <line x1="145" y1="133" x2="145" y2="155" stroke="#C9B896" stroke-width="3"/>
  <path d="M30 155 Q55 168 80 155" stroke="#C9B896" stroke-width="4" fill="none"/>
  <path d="M120 155 Q145 168 170 155" stroke="#C9B896" stroke-width="4" fill="none"/>
</svg>`;

// ============================================
// PADRÃO BORDA GREGA
// ============================================
const BORDA_GREGA_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23B8A978' stroke-width='1.5' d='M0 10h5v5H0v5h10v-5h5v-5h-5V5h5V0H5v5H0z'/%3E%3C/svg%3E")`;

// ============================================
// CARREGAR IMAGEM
// ============================================
function carregarImagem(nomeArquivo: string): Buffer | null {
  try {
    const caminhos = [
      path.join(process.cwd(), "client", "public", nomeArquivo),
      path.join(process.cwd(), "dist", "public", nomeArquivo),
      path.join(process.cwd(), "public", nomeArquivo),
    ];

    for (const caminho of caminhos) {
      if (fs.existsSync(caminho)) {
        return fs.readFileSync(caminho);
      }
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Template HTML para PDF - Design SanusJuris OFICIAL
 * Com borda grega, logo SVG inline, marca d'água centralizada
 */
export function gerarTemplateHTML(dados: any): string {
  const {
    numeroProcesso,
    dataGeracao,
    horaGeracao,
    hashDocumento,
    nomePerito,
    crmPerito,
    especialidade,
    rqe,
    vara,
    classe,
    assunto,
    dataRecebimento,
    dataPericia,
    localPericia,
    preambulo,
    historico,
    exame,
    discussao,
    conclusao,
    quesitos,
    referencias,
    periciando,
    requerente,
    requerido,
  } = dados;

  const questionsHTML = quesitos
    ?.map(
      (q: any, i: number) => `
    <div class="quesito-item">
      <p class="quesito-pergunta">
        <strong>Quesito ${i + 1}:</strong> 
        <em>${q.pergunta || ""}</em>
      </p>
      <p class="quesito-resposta">
        <strong>R:</strong> ${q.resposta || ""}
      </p>
    </div>
  `
    )
    .join("") || "";

  const referencesHTML = referencias
    ?.map(
      (r: any, i: number) => `
    <p class="referencia-item">
      ${i + 1}. ${r.texto || r.autores || ""} ${r.titulo ? `- <em>${r.titulo}</em>` : ""}. 
      ${r.publicacao || ""} ${r.ano || ""}
    </p>
  `
    )
    .join("") || "";

  // Formatar data
  const dataFormatada = formatarDataCompleta();

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laudo Pericial - ${numeroProcesso}</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @page {
      size: A4;
      margin: 0;
    }
    
    body {
      font-family: 'Source Sans Pro', 'Times New Roman', Georgia, serif;
      font-size: 12pt;
      line-height: 1.6;
      color: ${CORES.azulNavy};
      background: ${CORES.marfim};
    }
    
    .documento {
      position: relative;
      width: 210mm;
      min-height: 297mm;
      background: ${CORES.marfim};
      padding: 0;
      box-sizing: border-box;
    }
    
    /* BORDA GREGA DECORATIVA */
    .borda-grega-top, .borda-grega-bottom {
      position: absolute;
      left: 8mm;
      right: 8mm;
      height: 8mm;
      background-image: ${BORDA_GREGA_PATTERN};
      background-repeat: repeat-x;
      background-size: 20px 20px;
      z-index: 1;
    }
    
    .borda-grega-top { top: 8mm; }
    .borda-grega-bottom { bottom: 8mm; }
    
    .borda-grega-left, .borda-grega-right {
      position: absolute;
      top: 8mm;
      bottom: 8mm;
      width: 8mm;
      background-image: ${BORDA_GREGA_PATTERN};
      background-repeat: repeat-y;
      background-size: 20px 20px;
      z-index: 1;
    }
    
    .borda-grega-left { left: 8mm; }
    .borda-grega-right { right: 8mm; }
    
    /* MARCA D'ÁGUA CENTRALIZADA */
    .marca-dagua {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.06;
      z-index: 0;
      pointer-events: none;
    }
    
    /* ÁREA DE CONTEÚDO */
    .conteudo-area {
      position: relative;
      margin: 20mm 22mm 20mm 22mm;
      min-height: calc(297mm - 40mm);
      z-index: 10;
      display: flex;
      flex-direction: column;
    }
    
    /* CABEÇALHO */
    .cabecalho {
      text-align: center;
      padding-top: 5px;
      margin-bottom: 15px;
    }
    
    .logo-container { margin-bottom: 5px; }
    
    .marca-nome {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 24pt;
      font-weight: 400;
      color: ${CORES.azulNavy};
      letter-spacing: 1px;
      margin: 0;
    }
    
    .marca-nome span { color: ${CORES.azulPetroleo}; }
    
    /* TÍTULO DO DOCUMENTO */
    .titulo-documento {
      text-align: center;
      margin: 20px 0;
    }
    
    .titulo-documento h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 16pt;
      color: ${CORES.azulNavy};
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    
    .titulo-documento .subtitulo {
      font-size: 10pt;
      color: ${CORES.azulPetroleo};
      font-style: italic;
    }
    
    /* PRINCÍPIO */
    .principio {
      text-align: center;
      font-style: italic;
      font-size: 10pt;
      color: ${CORES.azulPetroleo};
      margin: 10px 0 20px 0;
    }
    
    /* LINHA DO PROCESSO */
    .linha-processo {
      text-align: center;
      font-size: 10pt;
      color: ${CORES.azulPetroleo};
      margin: 15px 0;
      padding: 8px 15px;
      background: rgba(200, 169, 98, 0.1);
      border-radius: 4px;
    }
    
    /* ÁREA DE TEXTO */
    .area-texto {
      flex: 1;
      padding: 20px 10px;
      min-height: 480px;
    }
    
    /* SEÇÕES COM BARRA DOURADA */
    .secao {
      margin: 20px 0;
      padding-left: 15px;
      border-left: 3px solid ${CORES.dourado};
    }
    
    .secao-titulo {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13pt;
      color: ${CORES.azulNavy};
      font-weight: 600;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .secao-conteudo {
      text-align: justify;
    }
    
    .secao-conteudo p {
      margin: 8px 0;
      text-indent: 2em;
    }
    
    /* QUESITOS */
    .quesito-item {
      margin: 15px 0;
      padding: 10px 15px;
      background: rgba(200, 169, 98, 0.08);
      border-left: 3px solid ${CORES.dourado};
    }
    
    .quesito-pergunta {
      font-size: 11pt;
      color: ${CORES.azulPetroleo};
      margin-bottom: 8px;
    }
    
    .quesito-resposta {
      font-size: 11pt;
      color: ${CORES.azulNavy};
    }
    
    /* REFERÊNCIAS */
    .referencia-item {
      margin: 5px 0;
      font-size: 9pt;
      color: ${CORES.azulPetroleo};
    }
    
    /* ÁREA INFERIOR - ASSINATURA E DATA */
    .area-inferior {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 10px;
      margin-top: auto;
      margin-bottom: 55px;
      min-height: 60px;
    }
    
    /* ASSINATURA (ESQUERDA) */
    .assinatura-bloco {
      text-align: left;
      max-width: 160px;
    }
    
    .assinatura-cursiva {
      font-family: 'Great Vibes', cursive;
      font-size: 16pt;
      color: ${CORES.azulNavy};
      margin-bottom: 2px;
      line-height: 1.2;
    }
    
    .assinatura-nome {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 9pt;
      color: ${CORES.azulNavy};
      border-top: 1px solid ${CORES.azulNavy};
      padding-top: 3px;
    }
    
    /* DATA (DIREITA) */
    .data-bloco {
      text-align: right;
      max-width: 260px;
    }
    
    .data-texto {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 10pt;
      color: ${CORES.azulNavy};
    }
    
    /* RODAPÉ */
    .rodape {
      position: absolute;
      bottom: 16mm;
      left: 16mm;
      right: 16mm;
      z-index: 10;
    }
    
    .rodape-linha-dourada {
      height: 2px;
      background: ${CORES.dourado};
      margin-bottom: 2px;
    }
    
    .rodape-linha-azul {
      height: 4px;
      background: ${CORES.azulNavy};
      margin-bottom: 6px;
    }
    
    .rodape-texto {
      text-align: center;
      font-family: 'Source Sans Pro', Arial, sans-serif;
      font-size: 7.5pt;
      color: ${CORES.textoSecundario};
      letter-spacing: 0.3px;
    }
    
    @media print {
      body { background: white; }
      .documento { width: 210mm; height: 297mm; }
    }
  </style>
</head>
<body>
  <div class="documento">
    <!-- BORDA GREGA -->
    <div class="borda-grega-top"></div>
    <div class="borda-grega-bottom"></div>
    <div class="borda-grega-left"></div>
    <div class="borda-grega-right"></div>
    
    <!-- MARCA D'ÁGUA -->
    <div class="marca-dagua">
      ${LOGO_MARCA_DAGUA_SVG}
    </div>
    
    <!-- ÁREA DE CONTEÚDO -->
    <div class="conteudo-area">
      <!-- CABEÇALHO -->
      <header class="cabecalho">
        <div class="logo-container">
          ${LOGO_CABECALHO_SVG}
        </div>
        <h1 class="marca-nome">Sanus<span>Juris</span></h1>
      </header>
      
      <!-- TÍTULO -->
      <div class="titulo-documento">
        <h1>Laudo Pericial Médico</h1>
      </div>
      
      <!-- PRINCÍPIO -->
      <p class="principio">"Primum non nocere"</p>
      
      <!-- LINHA DO PROCESSO -->
      <div class="linha-processo">
        Processo nº ${numeroProcesso || "_______________"} | ${vara || "_______________"}
      </div>
      
      <!-- ÁREA DE TEXTO -->
      <div class="area-texto">
        ${preambulo ? `
        <div class="secao">
          <h2 class="secao-titulo">I. Preâmbulo</h2>
          <div class="secao-conteudo"><p>${preambulo}</p></div>
        </div>
        ` : ""}
        
        ${historico ? `
        <div class="secao">
          <h2 class="secao-titulo">II. Histórico</h2>
          <div class="secao-conteudo"><p>${historico}</p></div>
        </div>
        ` : ""}
        
        ${exame ? `
        <div class="secao">
          <h2 class="secao-titulo">III. Exame Físico e Psíquico</h2>
          <div class="secao-conteudo"><p>${exame}</p></div>
        </div>
        ` : ""}
        
        ${discussao ? `
        <div class="secao">
          <h2 class="secao-titulo">IV. Discussão</h2>
          <div class="secao-conteudo"><p>${discussao}</p></div>
        </div>
        ` : ""}
        
        ${questionsHTML ? `
        <div class="secao">
          <h2 class="secao-titulo">V. Respostas aos Quesitos</h2>
          ${questionsHTML}
        </div>
        ` : ""}
        
        ${conclusao ? `
        <div class="secao">
          <h2 class="secao-titulo">VI. Conclusão</h2>
          <div class="secao-conteudo"><p>${conclusao}</p></div>
        </div>
        ` : ""}
        
        ${referencesHTML ? `
        <div class="secao">
          <h2 class="secao-titulo">VII. Referências</h2>
          ${referencesHTML}
        </div>
        ` : ""}
      </div>
      
      <!-- ÁREA INFERIOR -->
      <div class="area-inferior">
        <div class="assinatura-bloco">
          <div class="assinatura-cursiva">${PERITO.nome}</div>
          <div class="assinatura-nome">${PERITO.nome}</div>
        </div>
        <div class="data-bloco">
          <div class="data-texto">${dataFormatada}</div>
        </div>
      </div>
    </div>
    
    <!-- RODAPÉ -->
    <footer class="rodape">
      <div class="rodape-linha-dourada"></div>
      <div class="rodape-linha-azul"></div>
      <div class="rodape-texto">${PERITO.rodape}${hashDocumento ? ` | ID: ${hashDocumento}` : ''}</div>
    </footer>
  </div>
</body>
</html>
  `;
}

/**
 * Formatar data completa
 */
function formatarDataCompleta(): string {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  const hoje = new Date();
  return `São Paulo, ${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
}

/**
 * Gerar hash único para documento
 */
export function gerarHashDocumento(): string {
  return `SJ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

/**
 * Gerar PDF do laudo
 */
export async function gerarPDFLaudo(dados: any, userId: number): Promise<{ url: string; key: string } | null> {
  try {
    const hashDocumento = dados.hashDocumento || gerarHashDocumento();
    const dadosCompletos = {
      ...dados,
      hashDocumento,
    };

    const html = gerarTemplateHTML(dadosCompletos);
    
    // Salvar HTML temporário ou converter para PDF
    const key = `laudos/${userId}/${hashDocumento}.html`;
    const url = await storagePut(key, Buffer.from(html, 'utf-8'), 'text/html');

    return { url, key };
  } catch (error) {
    console.error("[GerarPDFLaudo] Erro:", error);
    return null;
  }
}

/**
 * Gerar DOCX do laudo
 */
export async function gerarDocxLaudo(dados: any, userId: number): Promise<Buffer> {
  const logoBuffer = carregarImagem("logo-sanusjuris.png");
  const assinaturaBuffer = carregarImagem("assinatura-dr-adiel-oficial.png");
  
  const hashDocumento = dados.hashDocumento || gerarHashDocumento();
  const dataFormatada = formatarDataCompleta();

  const children: Paragraph[] = [];

  // Título
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "LAUDO PERICIAL MÉDICO",
          bold: true,
          size: 32,
          color: CORES.azulNavy.replace("#", ""),
          font: "Playfair Display",
        }),
      ],
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      border: {
        bottom: {
          color: CORES.dourado.replace("#", ""),
          size: 12,
          style: BorderStyle.SINGLE,
          space: 10,
        },
      },
    })
  );

  // Primum non nocere
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: '"Primum non nocere"',
          italics: true,
          size: 20,
          color: CORES.azulPetroleo.replace("#", ""),
          font: "Times New Roman",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    })
  );

  // Processo
  if (dados.numeroProcesso) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Processo nº ${dados.numeroProcesso} | ${dados.vara || ""}`,
            size: 22,
            color: CORES.azulPetroleo.replace("#", ""),
            font: "Times New Roman",
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
      })
    );
  }

  // Preâmbulo
  if (dados.preambulo) {
    children.push(criarSecaoDocx("I. PREÂMBULO", dados.preambulo));
  }

  // Histórico
  if (dados.historico) {
    children.push(criarSecaoDocx("II. HISTÓRICO", dados.historico));
  }

  // Exame
  if (dados.exame) {
    children.push(criarSecaoDocx("III. EXAME FÍSICO E PSÍQUICO", dados.exame));
  }

  // Discussão
  if (dados.discussao) {
    children.push(criarSecaoDocx("IV. DISCUSSÃO", dados.discussao));
  }

  // Quesitos
  if (dados.quesitos && dados.quesitos.length > 0) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "V. RESPOSTAS AOS QUESITOS",
            bold: true,
            size: 26,
            color: CORES.azulNavy.replace("#", ""),
            font: "Playfair Display",
          }),
        ],
        spacing: { before: 300, after: 200 },
        border: {
          left: {
            color: CORES.dourado.replace("#", ""),
            size: 24,
            style: BorderStyle.SINGLE,
            space: 10,
          },
        },
      })
    );

    dados.quesitos.forEach((q: any, i: number) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `Quesito ${i + 1}: `, bold: true, size: 22, font: "Times New Roman" }),
            new TextRun({ text: q.pergunta, italics: true, size: 22, color: CORES.azulPetroleo.replace("#", ""), font: "Times New Roman" }),
          ],
          spacing: { before: 150 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: "R: ", bold: true, size: 22, font: "Times New Roman" }),
            new TextRun({ text: q.resposta, size: 22, font: "Times New Roman" }),
          ],
          spacing: { after: 150 },
          indent: { left: convertInchesToTwip(0.3) },
        })
      );
    });
  }

  // Conclusão
  if (dados.conclusao) {
    children.push(criarSecaoDocx("VI. CONCLUSÃO", dados.conclusao));
  }

  // Data
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: dataFormatada, size: 22, font: "Times New Roman" }),
      ],
      alignment: AlignmentType.RIGHT,
      spacing: { before: 400, after: 200 },
    })
  );

  // Assinatura
  if (assinaturaBuffer) {
    children.push(
      new Paragraph({
        children: [
          new ImageRun({
            data: assinaturaBuffer,
            transformation: { width: 150, height: 50 },
            type: "png",
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200 },
      })
    );
  }

  // Nome do perito
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: PERITO.nomeCompleto,
          bold: true,
          size: 22,
          font: "Times New Roman",
          color: CORES.azulNavy.replace("#", ""),
        }),
      ],
      alignment: AlignmentType.LEFT,
      spacing: { before: 50 },
    })
  );

  // CRM
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${PERITO.crm} | ${PERITO.rqe}`,
          size: 20,
          color: CORES.azulPetroleo.replace("#", ""),
          font: "Times New Roman",
        }),
      ],
      alignment: AlignmentType.LEFT,
    })
  );

  // Criar documento
  const headerChildren: Paragraph[] = [];

  if (logoBuffer) {
    headerChildren.push(
      new Paragraph({
        children: [
          new ImageRun({
            data: logoBuffer,
            transformation: { width: 70, height: 70 },
            type: "png",
          }),
          new TextRun({
            text: "   SanusJuris",
            bold: true,
            size: 28,
            color: CORES.azulNavy.replace("#", ""),
            font: "Playfair Display",
          }),
        ],
        alignment: AlignmentType.LEFT,
      })
    );
  } else {
    headerChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "SanusJuris",
            bold: true,
            size: 32,
            color: CORES.azulNavy.replace("#", ""),
            font: "Playfair Display",
          }),
        ],
        alignment: AlignmentType.LEFT,
      })
    );
  }

  headerChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${PERITO.nomeCompleto} - ${PERITO.crm} - ${PERITO.rqe}`,
          size: 18,
          color: CORES.azulPetroleo.replace("#", ""),
          font: "Times New Roman",
        }),
      ],
      alignment: AlignmentType.LEFT,
      spacing: { after: 100 },
      border: {
        bottom: {
          color: CORES.dourado.replace("#", ""),
          size: 6,
          style: BorderStyle.SINGLE,
          space: 5,
        },
      },
    })
  );

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Times New Roman",
            size: 24,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(1),
              right: convertInchesToTwip(1),
              bottom: convertInchesToTwip(1.2),
              left: convertInchesToTwip(1.2),
            },
          },
        },
        headers: {
          default: new Header({ children: headerChildren }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: PERITO.rodape,
                    size: 16,
                    color: "555555",
                    font: "Arial",
                  }),
                ],
                alignment: AlignmentType.CENTER,
                border: {
                  top: {
                    color: CORES.dourado.replace("#", ""),
                    size: 6,
                    style: BorderStyle.SINGLE,
                    space: 5,
                  },
                },
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: `ID: ${hashDocumento} | Página `, size: 14, color: "555555", font: "Arial" }),
                  new TextRun({ children: [PageNumber.CURRENT], size: 14, color: "555555", font: "Arial" }),
                  new TextRun({ text: " de ", size: 14, color: "555555", font: "Arial" }),
                  new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 14, color: "555555", font: "Arial" }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { before: 50 },
              }),
            ],
          }),
        },
        children: children,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

function criarSecaoDocx(titulo: string, conteudo: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: titulo,
        bold: true,
        size: 26,
        color: CORES.azulNavy.replace("#", ""),
        font: "Playfair Display",
      }),
    ],
    spacing: { before: 300, after: 150 },
    border: {
      left: {
        color: CORES.dourado.replace("#", ""),
        size: 24,
        style: BorderStyle.SINGLE,
        space: 10,
      },
    },
  });
}

// Exportações
export { PERITO, CORES };
export default { gerarTemplateHTML, gerarPDFLaudo, gerarDocxLaudo, gerarHashDocumento };
