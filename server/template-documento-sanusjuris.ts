/**
 * Template Unificado de Documentos SanusJuris
 * Design Neoclássico-Minimalista com Identidade Visual Premium
 * 
 * VERSÃO CORRIGIDA - Template com Borda Grega
 * 
 * Especificações:
 * - Borda grega decorativa
 * - Logo centralizado (caduceu + balança)
 * - Marca d'água suave (6% opacidade)
 * - Assinatura MENOR na esquerda, Data na direita
 * - Rodapé: linha dourada + linha azul + texto
 * - Formato A4, editável, exportável em PDF
 */

// ============================================
// CONFIGURAÇÕES DO PERITO - DR. ADIEL RIOS
// ============================================
export const PERITO = {
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

// Alias para compatibilidade
export const PERITO_CONFIG = PERITO;
export const PROFISSIONAL = PERITO;

// ============================================
// CORES DA IDENTIDADE VISUAL SANUSJURIS
// ============================================
export const CORES = {
  azulNavy: "#1B365D",
  azulPetroleo: "#2C5F7C",
  dourado: "#C9A962",
  marfim: "#FDFBF7",
  marcaDaguaAzul: "#7A9BB5",
  marcaDaguaDourado: "#C9B896",
  bordaGrega: "#B8A978",
  textoSecundario: "#555555",
  // Aliases para compatibilidade
  azulMarinho: "#1B365D",
  begeClaro: "#FDFBF7",
  brancoOffWhite: "#FDFBF7",
  bege: "#FDFBF7",
};

// ============================================
// TIPOGRAFIA
// ============================================
export const TIPOGRAFIA = {
  titulo: "Playfair Display",
  corpo: "Source Sans Pro",
  assinatura: "Great Vibes",
  fallback: "Georgia, Times New Roman, serif",
};

// ============================================
// SVG DO LOGO CABEÇALHO
// ============================================
export const LOGO_CABECALHO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 95" width="85" height="68">
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
export const LOGO_MARCA_DAGUA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180" width="350" height="315">
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
export const BORDA_GREGA_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23B8A978' stroke-width='1.5' d='M0 10h5v5H0v5h10v-5h5v-5h-5V5h5V0H5v5H0z'/%3E%3C/svg%3E")`;

/**
 * Gera o CSS base para todos os documentos
 */
export function gerarCSSBase(): string {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;600&family=Great+Vibes&display=swap');
    
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
    
    /* MARCA D'ÁGUA */
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
      margin: 30px 0 25px 0;
    }
    
    .titulo-documento h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 16pt;
      color: ${CORES.azulNavy};
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
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
      margin: 15px 0 25px 0;
      letter-spacing: 1px;
    }
    
    /* LINHA DO PROCESSO */
    .linha-processo {
      text-align: center;
      font-size: 10pt;
      color: ${CORES.azulPetroleo};
      margin-bottom: 25px;
      padding: 10px;
      background: rgba(200, 169, 98, 0.1);
      border-radius: 4px;
    }
    
    /* SEÇÕES */
    .secao {
      margin: 25px 0;
      position: relative;
    }
    
    .secao-titulo {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13pt;
      font-weight: 600;
      color: ${CORES.azulNavy};
      margin-bottom: 12px;
      padding-bottom: 5px;
      border-bottom: 1px solid ${CORES.dourado}60;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .secao-conteudo {
      padding-left: 15px;
      border-left: 3px solid ${CORES.dourado}40;
    }
    
    .secao-conteudo p {
      text-align: justify;
      margin: 10px 0;
      text-indent: 1.5cm;
    }
    
    .secao-conteudo p:first-child {
      text-indent: 0;
    }
    
    /* QUESITOS */
    .quesito-item {
      margin: 15px 0;
      padding: 12px 15px;
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
      font-weight: 500;
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
    
    /* ASSINATURA (ESQUERDA) - MENOR */
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
    
    /* IMPRESSÃO */
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .page-break {
        page-break-after: always;
      }
      .marca-dagua {
        position: fixed;
      }
      .rodape {
        position: fixed;
        bottom: 0;
      }
    }
  `;
}

/**
 * Gera o HTML do cabeçalho padrão
 */
export function gerarCabecalhoHTML(): string {
  return `
    <!-- MARCA D'ÁGUA -->
    <div class="marca-dagua">
      ${LOGO_MARCA_DAGUA_SVG}
    </div>
    
    <!-- CABEÇALHO -->
    <header class="cabecalho">
      <div class="logo-container">
        ${LOGO_CABECALHO_SVG}
      </div>
      <h1 class="marca-nome">Sanus<span>Juris</span></h1>
    </header>
  `;
}

/**
 * Gera o HTML das credenciais e rodapé
 */
export function gerarCredenciaisRodapeHTML(data?: string, hashDocumento?: string): string {
  const dataFormatada = data || formatarDataCompleta();
  
  return `
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
    
    <!-- RODAPÉ -->
    <footer class="rodape">
      <div class="rodape-linha-dourada"></div>
      <div class="rodape-linha-azul"></div>
      <div class="rodape-texto">${PERITO.rodape}${hashDocumento ? ` | ID: ${hashDocumento}` : ''}</div>
    </footer>
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
 * Gera documento HTML completo com o template SanusJuris
 */
export function gerarDocumentoHTML(config: {
  titulo: string;
  subtitulo?: string;
  numeroProcesso?: string;
  vara?: string;
  conteudo: string;
  incluirPrincipio?: boolean;
  hashDocumento?: string;
  data?: string;
}): string {
  const {
    titulo,
    subtitulo,
    numeroProcesso,
    vara,
    conteudo,
    incluirPrincipio = true,
    hashDocumento,
    data,
  } = config;

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titulo} - SanusJuris</title>
  <style>
    ${gerarCSSBase()}
  </style>
</head>
<body>
  <div class="documento">
    <!-- BORDA GREGA -->
    <div class="borda-grega-top"></div>
    <div class="borda-grega-bottom"></div>
    <div class="borda-grega-left"></div>
    <div class="borda-grega-right"></div>
    
    ${gerarCabecalhoHTML()}
    
    <div class="conteudo-area">
      <!-- TÍTULO DO DOCUMENTO -->
      <div class="titulo-documento">
        <h1>${titulo}</h1>
        ${subtitulo ? `<p class="subtitulo">${subtitulo}</p>` : ""}
      </div>
      
      ${incluirPrincipio ? `
      <!-- PRINCÍPIO -->
      <p class="principio">"Primum non nocere"</p>
      ` : ""}
      
      ${numeroProcesso || vara ? `
      <div class="linha-processo">
        <span>Processo nº ${numeroProcesso || "_______________"} | Vara ${vara || "_______________"}</span>
      </div>
      ` : ""}
      
      <!-- CONTEÚDO DO DOCUMENTO -->
      <div class="area-texto">
        ${conteudo}
      </div>
      
      ${gerarCredenciaisRodapeHTML(data, hashDocumento)}
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Tipos de documentos suportados
 */
export type TipoDocumento = 
  | "laudo"
  | "laudo_psiquiatrico"
  | "laudo_trabalhista"
  | "laudo_previdenciario"
  | "laudo_civel"
  | "laudo_criminal"
  | "peticao"
  | "manifestacao"
  | "parecer"
  | "orcamento"
  | "proposta_honorarios"
  | "recurso"
  | "impugnacao"
  | "contra_razoes"
  | "quesitos"
  | "relatorio"
  | "documento";

/**
 * Retorna o título padrão para cada tipo de documento
 */
export function getTituloDocumento(tipo: TipoDocumento): string {
  const titulos: Record<TipoDocumento, string> = {
    laudo: "Laudo Pericial Médico",
    laudo_psiquiatrico: "Laudo Pericial Psiquiátrico",
    laudo_trabalhista: "Laudo Pericial Trabalhista",
    laudo_previdenciario: "Laudo Pericial Previdenciário",
    laudo_civel: "Laudo Pericial Cível",
    laudo_criminal: "Laudo Pericial Criminal",
    peticao: "Petição",
    manifestacao: "Manifestação Técnica",
    parecer: "Parecer Técnico",
    orcamento: "Proposta de Honorários Periciais",
    proposta_honorarios: "Proposta de Honorários Periciais",
    recurso: "Recurso",
    impugnacao: "Resposta à Impugnação",
    contra_razoes: "Contrarrazões",
    quesitos: "Quesitos Suplementares",
    relatorio: "Relatório Técnico",
    documento: "Documento",
  };
  return titulos[tipo] || "Documento";
}

// Alias
export function obterTituloPorTipo(tipo: TipoDocumento): string {
  return getTituloDocumento(tipo);
}

// Exportações
export default {
  PERITO,
  PERITO_CONFIG,
  PROFISSIONAL,
  CORES,
  TIPOGRAFIA,
  LOGO_CABECALHO_SVG,
  LOGO_MARCA_DAGUA_SVG,
  BORDA_GREGA_PATTERN,
  gerarCSSBase,
  gerarCabecalhoHTML,
  gerarCredenciaisRodapeHTML,
  gerarDocumentoHTML,
  getTituloDocumento,
  obterTituloPorTipo,
};
