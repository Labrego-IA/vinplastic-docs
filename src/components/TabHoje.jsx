import { PageHeader, SectionHero } from './Logo'
import config from '../../projeto.config.js'

// ── Icones SVG por tipo ─────────────────────────────────────
const icons = {
  'x-circle': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <line x1="7" y1="7" x2="13" y2="13" />
      <line x1="13" y1="7" x2="7" y2="13" />
    </svg>
  ),
  'clock': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <polyline points="10,5 10,10 13.5,12.5" />
    </svg>
  ),
  'user-minus': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11c-2.5 0-7 1.25-7 3.75V17h14v-2.25C16 12.25 11.5 11 9 11z" />
      <circle cx="9" cy="6" r="3.5" />
      <line x1="13" y1="7" x2="19" y2="7" />
    </svg>
  ),
  'file-minus': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H5a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 5 18h10a1.5 1.5 0 0 0 1.5-1.5V7.5L12 2z" />
      <polyline points="12,2 12,7.5 16.5,7.5" />
      <line x1="7" y1="12" x2="13" y2="12" />
    </svg>
  ),
  'lock': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="12" height="9" rx="1.5" ry="1.5" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
      <circle cx="10" cy="14" r="1" fill="var(--brand-vibrante)" stroke="none" />
    </svg>
  ),
  'alert-triangle': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2.5L1.5 17h17L10 2.5z" />
      <line x1="10" y1="8.5" x2="10" y2="12.5" />
      <circle cx="10" cy="15" r="0.75" fill="var(--brand-vibrante)" stroke="none" />
    </svg>
  ),
}

// ── Sub-componentes ─────────────────────────────────────────

function MetricCard({ num, label }) {
  return (
    <div className="metric-card">
      <div className="metric-num">{num}</div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

function ToolCard({ abbr, color, name, desc }) {
  return (
    <div className="tool-card">
      <div className="tool-card-icon" style={{ background: color }}>{abbr}</div>
      <div className="tool-card-body">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

function PainCard({ title, desc, icon }) {
  return (
    <div className="pain-card">
      <div className="pain-icon-box">{icons[icon] || icons['x-circle']}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

function JourneyStep({ num, title, desc }) {
  return (
    <div className="journey-step">
      <div className="journey-step-num">{num}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

// Texto corrido: aceita string ou array de paragrafos. Sem isso o as-is vira
// so cartao/metrica e perde profundidade (regra da dona — doc tem que LER como doc).
function Prose({ content }) {
  if (!content) return null
  const paras = Array.isArray(content) ? content : [content]
  if (paras.length === 0) return null
  return (
    <div className="doc-prose">
      {paras.map((p, i) => <p key={i} className="doc-paragraph">{p}</p>)}
    </div>
  )
}

// ── Componente principal ────────────────────────────────────

export default function TabHoje() {
  const dados = config.hoje
  if (!dados) return null

  return (
    <section className="page">
      <PageHeader tag="Como funciona hoje" />

      <SectionHero
        title={dados.heroTitle || 'O dia a dia sem sistema'}
        description={dados.heroDescription || 'Tudo que acontece hoje - as ferramentas, os processos manuais e o tempo perdido que o sistema vai eliminar'}
        style={{ background: 'linear-gradient(135deg, var(--brand-escuro) 0%, var(--brand-principal) 50%, var(--brand-vibrante) 100%)' }}
      />

      {/* Narrativa de abertura do cenario atual (texto corrido, obrigatorio) */}
      <Prose content={dados.intro} />

      {/* Metricas */}
      {dados.metricas && dados.metricas.length > 0 && (
        <div className="metric-row">
          {dados.metricas.map((m, i) => (
            <MetricCard key={i} num={m.num} label={m.label} />
          ))}
        </div>
      )}

      {/* Ferramentas */}
      {dados.ferramentas && dados.ferramentas.length > 0 && (
        <>
          <h3 className="sub-title">As ferramentas de hoje</h3>
          <Prose content={dados.ferramentasIntro || 'Cada parte do processo mora num lugar diferente. Nada se conversa.'} />
          <div className="tool-cards-grid">
            {dados.ferramentas.map((tool, i) => (
              <ToolCard key={i} {...tool} />
            ))}
          </div>
        </>
      )}

      {/* Problemas */}
      {dados.problemas && dados.problemas.length > 0 && (
        <>
          <h3 className="sub-title">Os problemas que isso causa</h3>
          <Prose content={dados.problemasIntro} />
          <div className="pain-cards-grid">
            {dados.problemas.map((p, i) => (
              <PainCard key={i} {...p} />
            ))}
          </div>
        </>
      )}

      {/* Jornada do cliente */}
      {dados.jornada && dados.jornada.length > 0 && (
        <>
          <h3 className="sub-title">A jornada do cliente hoje</h3>
          <Prose content={dados.jornadaIntro || 'Do primeiro contato ate a entrega - cada etapa com seus problemas:'} />
          <div className="journey-steps">
            {dados.jornada.map((step, i) => (
              <JourneyStep key={i} num={i + 1} {...step} />
            ))}
          </div>
        </>
      )}

      {/* Resumo final */}
      {dados.resumoFinal && (
        <div className="highlight-box">
          <p><strong>Resumo:</strong> {dados.resumoFinal}</p>
        </div>
      )}
    </section>
  )
}
