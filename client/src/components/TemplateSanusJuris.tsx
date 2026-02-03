/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMPONENTE REACT - TEMPLATE ÚNICO SANUSJURIS
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Componente React para renderização do template oficial.
 * Serve para TODOS os tipos de documentos.
 * 
 * Correções aplicadas:
 * - Assinatura MENOR (16pt)
 * - Data à DIREITA, assinatura à ESQUERDA
 * - SEM SOBREPOSIÇÃO entre texto, assinatura e data
 * - Rodapé corrigido
 * - TUDO EDITÁVEL
 * 
 * @version 3.0.0
 */

import React, { forwardRef, ReactNode, CSSProperties } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════════════════

export const CORES = {
  azulNavy: '#1B365D',
  azulPetroleo: '#2C5F7C',
  dourado: '#C9A962',
  marfim: '#FDFBF7',
  marcaDaguaAzul: '#7A9BB5',
  marcaDaguaDourado: '#C9B896',
  bordaGrega: '#B8A978',
  textoSecundario: '#555555',
};

export const TIPOGRAFIA = {
  titulos: "'Playfair Display', 'Times New Roman', Georgia, serif",
  corpo: "'Source Sans Pro', 'Times New Roman', Georgia, serif",
  assinatura: "'Great Vibes', cursive",
  auxiliar: "'Source Sans Pro', Arial, sans-serif",
};

export const PROFISSIONAL = {
  nome: 'Dr. Adiel Rios',
  rodape: 'SanusJuris | Rua Joaquim Floriano, 466, CJ 1509 | adiel.rios@abp.org.br',
};

// ═══════════════════════════════════════════════════════════════════════════
// LOGO CABEÇALHO
// ═══════════════════════════════════════════════════════════════════════════

export const LogoCabecalho: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 95" width={85} height={68}>
    <g fill={CORES.azulNavy}>
      <path d="M18 32 Q3 26 7 16 Q15 22 26 18 Q18 26 21 34 Z"/>
      <path d="M15 40 Q0 36 3 24 Q12 30 24 27 Q16 35 17 42 Z"/>
      <path d="M13 48 Q-2 46 1 34 Q10 39 22 37 Q14 44 15 50 Z"/>
      <path d="M102 32 Q117 26 113 16 Q105 22 94 18 Q102 26 99 34 Z"/>
      <path d="M105 40 Q120 36 117 24 Q108 30 96 27 Q104 35 103 42 Z"/>
      <path d="M107 48 Q122 46 119 34 Q110 39 98 37 Q106 44 105 50 Z"/>
    </g>
    <circle cx="60" cy="12" r="5" fill={CORES.dourado}/>
    <rect x="57" y="16" width="6" height="52" fill={CORES.dourado} rx="2"/>
    <g fill="none" stroke={CORES.dourado} strokeWidth="4" strokeLinecap="round">
      <path d="M60 22 Q45 32 60 42 Q75 52 60 62"/>
      <path d="M60 22 Q75 32 60 42 Q45 52 60 62"/>
    </g>
    <ellipse cx="48" cy="25" rx="4" ry="3" fill={CORES.dourado}/>
    <ellipse cx="72" cy="25" rx="4" ry="3" fill={CORES.dourado}/>
    <rect x="30" y="66" width="60" height="3" fill={CORES.dourado} rx="1"/>
    <line x1="38" y1="69" x2="38" y2="80" stroke={CORES.dourado} strokeWidth="2"/>
    <line x1="82" y1="69" x2="82" y2="80" stroke={CORES.dourado} strokeWidth="2"/>
    <path d="M25 80 Q38 88 51 80" stroke={CORES.dourado} strokeWidth="3" fill="none"/>
    <path d="M69 80 Q82 88 95 80" stroke={CORES.dourado} strokeWidth="3" fill="none"/>
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════
// LOGO MARCA D'ÁGUA
// ═══════════════════════════════════════════════════════════════════════════

export const LogoMarcaDagua: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180" width={350} height={315}>
    <g fill={CORES.marcaDaguaAzul} opacity={0.9}>
      <path d="M30 60 Q5 50 10 30 Q25 40 40 35 Q30 48 35 60 Z"/>
      <path d="M25 72 Q0 65 3 45 Q18 55 38 50 Q28 62 30 72 Z"/>
      <path d="M22 84 Q-3 80 0 60 Q15 68 35 65 Q25 76 27 84 Z"/>
      <path d="M170 60 Q195 50 190 30 Q175 40 160 35 Q170 48 165 60 Z"/>
      <path d="M175 72 Q200 65 197 45 Q182 55 162 50 Q172 62 170 72 Z"/>
      <path d="M178 84 Q203 80 200 60 Q185 68 165 65 Q175 76 173 84 Z"/>
    </g>
    <circle cx="100" cy="28" r="10" fill={CORES.marcaDaguaDourado}/>
    <rect x="95" y="35" width="10" height="95" fill={CORES.marcaDaguaDourado} rx="3"/>
    <g fill="none" stroke={CORES.marcaDaguaDourado} strokeWidth="7" strokeLinecap="round">
      <path d="M100 45 Q70 65 100 85 Q130 105 100 125"/>
      <path d="M100 45 Q130 65 100 85 Q70 105 100 125"/>
    </g>
    <ellipse cx="78" cy="50" rx="8" ry="6" fill={CORES.marcaDaguaDourado}/>
    <ellipse cx="122" cy="50" rx="8" ry="6" fill={CORES.marcaDaguaDourado}/>
    <rect x="40" y="128" width="120" height="5" fill={CORES.marcaDaguaDourado} rx="2"/>
    <line x1="55" y1="133" x2="55" y2="155" stroke={CORES.marcaDaguaDourado} strokeWidth="3"/>
    <line x1="145" y1="133" x2="145" y2="155" stroke={CORES.marcaDaguaDourado} strokeWidth="3"/>
    <path d="M30 155 Q55 168 80 155" stroke={CORES.marcaDaguaDourado} strokeWidth="4" fill="none"/>
    <path d="M120 155 Q145 168 170 155" stroke={CORES.marcaDaguaDourado} strokeWidth="4" fill="none"/>
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════
// INTERFACE
// ═══════════════════════════════════════════════════════════════════════════

interface TemplateSanusJurisProps {
  children?: ReactNode;
  nomeAssinatura?: string;
  data?: string;
  mostrarBordaGrega?: boolean;
  mostrarMarcaDagua?: boolean;
  mostrarAssinatura?: boolean;
  mostrarData?: boolean;
  mostrarRodape?: boolean;
  editavel?: boolean;
  className?: string;
  style?: CSSProperties;
}

// ═══════════════════════════════════════════════════════════════════════════
// ESTILOS
// ═══════════════════════════════════════════════════════════════════════════

const bordaGregaPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23B8A978' stroke-width='1.5' d='M0 10h5v5H0v5h10v-5h5v-5h-5V5h5V0H5v5H0z'/%3E%3C/svg%3E")`;

const estilos: Record<string, CSSProperties> = {
  documento: {
    position: 'relative',
    width: '210mm',
    minHeight: '297mm',
    background: CORES.marfim,
    padding: 0,
    boxSizing: 'border-box' as const,
    fontFamily: TIPOGRAFIA.corpo,
    fontSize: '12pt',
    lineHeight: 1.6,
    color: CORES.azulNavy,
    margin: '0 auto',
  },
  
  bordaTop: {
    position: 'absolute' as const,
    top: '8mm',
    left: '8mm',
    right: '8mm',
    height: '8mm',
    backgroundImage: bordaGregaPattern,
    backgroundRepeat: 'repeat-x',
    backgroundSize: '20px 20px',
    zIndex: 1,
  },
  
  bordaBottom: {
    position: 'absolute' as const,
    bottom: '8mm',
    left: '8mm',
    right: '8mm',
    height: '8mm',
    backgroundImage: bordaGregaPattern,
    backgroundRepeat: 'repeat-x',
    backgroundSize: '20px 20px',
    zIndex: 1,
  },
  
  bordaLeft: {
    position: 'absolute' as const,
    top: '8mm',
    left: '8mm',
    bottom: '8mm',
    width: '8mm',
    backgroundImage: bordaGregaPattern,
    backgroundRepeat: 'repeat-y',
    backgroundSize: '20px 20px',
    zIndex: 1,
  },
  
  bordaRight: {
    position: 'absolute' as const,
    top: '8mm',
    right: '8mm',
    bottom: '8mm',
    width: '8mm',
    backgroundImage: bordaGregaPattern,
    backgroundRepeat: 'repeat-y',
    backgroundSize: '20px 20px',
    zIndex: 1,
  },
  
  marcaDagua: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.06,
    zIndex: 0,
    pointerEvents: 'none' as const,
  },
  
  conteudoArea: {
    position: 'relative' as const,
    margin: '20mm 22mm 20mm 22mm',
    minHeight: 'calc(297mm - 40mm)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  
  cabecalho: {
    textAlign: 'center' as const,
    paddingTop: '5px',
    marginBottom: '15px',
  },
  
  marcaNome: {
    fontFamily: TIPOGRAFIA.titulos,
    fontSize: '24pt',
    fontWeight: 400,
    color: CORES.azulNavy,
    letterSpacing: '1px',
    margin: 0,
    outline: 'none',
  },
  
  marcaNomeSpan: {
    color: CORES.azulPetroleo,
  },
  
  areaTexto: {
    flex: 1,
    padding: '20px 10px',
    minHeight: '480px',
    outline: 'none',
  },
  
  // ÁREA INFERIOR - SEM SOBREPOSIÇÃO
  areaInferior: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '0 10px',
    marginTop: 'auto',
    marginBottom: '55px',
    minHeight: '60px',
  },
  
  // ASSINATURA MENOR
  assinaturaBloco: {
    textAlign: 'left' as const,
    maxWidth: '160px',
  },
  
  assinaturaCursiva: {
    fontFamily: TIPOGRAFIA.assinatura,
    fontSize: '16pt',
    color: CORES.azulNavy,
    marginBottom: '2px',
    lineHeight: 1.2,
    outline: 'none',
    display: 'inline-block',
    minWidth: '100px',
  },
  
  assinaturaNome: {
    fontFamily: TIPOGRAFIA.auxiliar,
    fontSize: '9pt',
    color: CORES.azulNavy,
    borderTop: `1px solid ${CORES.azulNavy}`,
    paddingTop: '3px',
    display: 'inline-block',
    minWidth: '90px',
    outline: 'none',
  },
  
  // DATA
  dataBloco: {
    textAlign: 'right' as const,
    maxWidth: '260px',
  },
  
  dataTexto: {
    fontFamily: TIPOGRAFIA.auxiliar,
    fontSize: '10pt',
    color: CORES.azulNavy,
    outline: 'none',
    display: 'inline-block',
    minWidth: '180px',
  },
  
  rodape: {
    position: 'absolute' as const,
    bottom: '16mm',
    left: '16mm',
    right: '16mm',
    zIndex: 10,
  },
  
  rodapeLinhaDourada: {
    height: '2px',
    background: CORES.dourado,
    marginBottom: '2px',
  },
  
  rodapeLinhaAzul: {
    height: '4px',
    background: CORES.azulNavy,
    marginBottom: '6px',
  },
  
  rodapeTexto: {
    textAlign: 'center' as const,
    fontFamily: TIPOGRAFIA.auxiliar,
    fontSize: '7.5pt',
    color: CORES.textoSecundario,
    outline: 'none',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════

const TemplateSanusJuris = forwardRef<HTMLDivElement, TemplateSanusJurisProps>(({
  children,
  nomeAssinatura = PROFISSIONAL.nome,
  data = 'São Paulo, ___ de _____________ de 20___',
  mostrarBordaGrega = true,
  mostrarMarcaDagua = true,
  mostrarAssinatura = true,
  mostrarData = true,
  mostrarRodape = true,
  editavel = true,
  className = '',
  style = {},
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`template-sanusjuris ${className}`}
      style={{ ...estilos.documento, ...style }}
    >
      {/* Borda grega */}
      {mostrarBordaGrega && (
        <>
          <div style={estilos.bordaTop} />
          <div style={estilos.bordaBottom} />
          <div style={estilos.bordaLeft} />
          <div style={estilos.bordaRight} />
        </>
      )}
      
      {/* Marca d'água */}
      {mostrarMarcaDagua && (
        <div style={estilos.marcaDagua}>
          <LogoMarcaDagua />
        </div>
      )}
      
      {/* Área de conteúdo */}
      <div style={estilos.conteudoArea}>
        {/* Cabeçalho */}
        <header style={estilos.cabecalho}>
          <div style={{ marginBottom: '5px' }}>
            <LogoCabecalho />
          </div>
          <h1 
            style={estilos.marcaNome}
            contentEditable={editavel}
            suppressContentEditableWarning
          >
            Sanus<span style={estilos.marcaNomeSpan}>Juris</span>
          </h1>
        </header>
        
        {/* Área de texto */}
        <div 
          style={estilos.areaTexto}
          contentEditable={editavel}
          suppressContentEditableWarning
        >
          {children}
        </div>
        
        {/* Área inferior - SEM SOBREPOSIÇÃO */}
        <div style={estilos.areaInferior}>
          {/* Assinatura (ESQUERDA) - MENOR */}
          {mostrarAssinatura ? (
            <div style={estilos.assinaturaBloco}>
              <div 
                style={estilos.assinaturaCursiva}
                contentEditable={editavel}
                suppressContentEditableWarning
              >
                {nomeAssinatura}
              </div>
              <div 
                style={estilos.assinaturaNome}
                contentEditable={editavel}
                suppressContentEditableWarning
              >
                {nomeAssinatura}
              </div>
            </div>
          ) : <div />}
          
          {/* Data (DIREITA) */}
          {mostrarData ? (
            <div style={estilos.dataBloco}>
              <div 
                style={estilos.dataTexto}
                contentEditable={editavel}
                suppressContentEditableWarning
              >
                {data}
              </div>
            </div>
          ) : <div />}
        </div>
      </div>
      
      {/* Rodapé */}
      {mostrarRodape && (
        <footer style={estilos.rodape}>
          <div style={estilos.rodapeLinhaDourada} />
          <div style={estilos.rodapeLinhaAzul} />
          <div 
            style={estilos.rodapeTexto}
            contentEditable={editavel}
            suppressContentEditableWarning
          >
            {PROFISSIONAL.rodape}
          </div>
        </footer>
      )}
    </div>
  );
});

TemplateSanusJuris.displayName = 'TemplateSanusJuris';

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTAÇÕES
// ═══════════════════════════════════════════════════════════════════════════

export { estilos };
export default TemplateSanusJuris;
