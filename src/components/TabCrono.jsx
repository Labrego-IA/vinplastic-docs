import { PageHeader, SectionHero } from './Logo'
import config from '../../projeto.config.js'

// ── Ícone calendário SVG ─────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.55 }}>
      <rect x="1" y="2" width="12" height="11" rx="1.5" />
      <line x1="1" y1="6" x2="13" y2="6" />
      <line x1="4.5" y1="1" x2="4.5" y2="3" />
      <line x1="9.5" y1="1" x2="9.5" y2="3" />
    </svg>
  )
}

// ── Ícone marco (relógio) SVG ────────────────────────────────

function MarcoIcon({ color }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={color || 'var(--brand-principal)'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="13" r="10" />
      <polyline points="13 7 13 13 17 15.5" />
    </svg>
  )
}

// ── Ícone check entregável SVG ───────────────────────────────

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--brand-principal)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M2.5 7.5l3 3 6-6" />
    </svg>
  )
}

// ── Componente principal ─────────────────────────────────────

export default function TabCrono() {
  const dados = config.crono
  if (!dados) return null

  return (
    <section className="page">
      <PageHeader tag="Cronograma" />

      <SectionHero
        num="05"
        title="Cronograma e marcos do projeto"
        description="Visão completa das fases de desenvolvimento, atividades e datas-chave"
      />

      {/* Parágrafo introdutório */}
      {dados.intro && (
        <p className="doc-paragraph" style={{ marginBottom: 32, color: '#555', fontSize: 14 }}>
          {dados.intro}
        </p>
      )}

      {/* ── Fases do desenvolvimento ── */}
      {dados.fases && dados.fases.length > 0 && (
        <>
          <h3 className="sub-title">Fases do desenvolvimento</h3>

          <div className="phase-cards">
            {dados.fases.map((fase, i) => (
              <div className="phase-card" key={i}>
                {/* Coluna lateral com número e cor da fase */}
                <div
                  className="phase-card-num"
                  style={{ background: fase.cor || undefined }}
                >
                  {fase.num}
                </div>

                <div className="phase-card-body">
                  {/* Título + período */}
                  <h4>Fase {fase.num} — {fase.titulo}</h4>
                  <div className="phase-meta" style={{ marginBottom: 14 }}>
                    <span className="phase-date">
                      <CalendarIcon />
                      {fase.semanas}
                    </span>
                  </div>

                  {/* Lista de atividades */}
                  {fase.itens && fase.itens.length > 0 && (
                    <ul style={{ margin: '0 0 14px', padding: 0, listStyle: 'none' }}>
                      {fase.itens.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: 13,
                            color: '#555',
                            padding: '3px 0 3px 18px',
                            position: 'relative',
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ position: 'absolute', left: 0, color: fase.cor || 'var(--brand-vibrante)', fontSize: 11, top: 5, fontWeight: 700 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Entregável */}
                  {fase.entregavel && (
                    <div className="rule-box" style={{ margin: 0, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <CheckIcon />
                      <span><strong>Entregável:</strong> {fase.entregavel}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Marcos do projeto ── */}
      {dados.marcos && dados.marcos.length > 0 && (
        <>
          <h3 className="sub-title" style={{ marginTop: 40 }}>Marcos do projeto</h3>

          <div className="timeline-done">
            {dados.marcos.map((marco, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-icon">
                  <MarcoIcon color="var(--brand-principal)" />
                </div>
                <div className="timeline-body">
                  <span className="timeline-date" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <CalendarIcon />
                    {marco.data}
                  </span>
                  <p style={{ fontWeight: 500 }}>{marco.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
