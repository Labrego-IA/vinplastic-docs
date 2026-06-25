import { PageHeader, SectionHero } from './Logo'
import config from '../../projeto.config.js'

// ── Tags de status ──────────────────────────────────────────

function StatusTag({ status }) {
  if (status === 'Concluído') {
    return <span className="tag tag-green">{status}</span>
  }
  if (status === 'Em andamento') {
    return <span className="tag tag-yellow">{status}</span>
  }
  // Aguardando
  return <span className="tag tag-gray">{status}</span>
}

// ── Icone calendario SVG ────────────────────────────────────

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

// ── Componente principal ────────────────────────────────────

export default function TabCrono() {
  const dados = config.crono
  if (!dados) return null

  return (
    <section className="page">
      <PageHeader tag="Cronograma" />

      <SectionHero
        num="11"
        title="Cronograma e próximos passos"
        description="O que já foi feito, o que vem pela frente e quando você vai poder testar"
      />

      {/* Tabela principal de cronograma */}
      {dados.tabela && dados.tabela.length > 0 && (
        <>
          <h3 className="sub-title">Visão geral do cronograma</h3>

          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th style={{ width: '44%' }}>Ação / Etapa</th>
                  <th style={{ width: '22%' }}>Responsável</th>
                  <th style={{ width: '18%' }}>Prazo</th>
                  <th style={{ width: '16%' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {dados.tabela.map((row, i) => (
                  <tr key={i}>
                    <td style={row.destaque ? { fontWeight: 600, color: 'var(--cinza-900)' } : {}}>
                      {row.acao}
                    </td>
                    <td className="td-desc">{row.responsavel}</td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12 }}>
                        <CalendarIcon />
                        {row.prazo}
                      </span>
                    </td>
                    <td><StatusTag status={row.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Fases do desenvolvimento */}
      {dados.fases && dados.fases.length > 0 && (
        <>
          <h3 className="sub-title">Fases do desenvolvimento (após aprovação)</h3>
          <p style={{ marginBottom: 20, color: '#666' }}>O desenvolvimento acontece em fases. Você vai poder testar cada fase antes de passarmos para a próxima:</p>

          <div className="phase-cards">
            {dados.fases.map((phase, i) => (
              <div className="phase-card" key={i}>
                <div className="phase-card-num">{i + 1}</div>
                <div className="phase-card-body">
                  <h4>Fase {i + 1} — {phase.title}</h4>
                  <p>{phase.scope}</p>
                  <div className="phase-meta">
                    <span className="phase-date">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="2" width="12" height="11" rx="1.5" />
                        <line x1="1" y1="6" x2="13" y2="6" />
                        <line x1="4.5" y1="1" x2="4.5" y2="3" />
                        <line x1="9.5" y1="1" x2="9.5" y2="3" />
                      </svg>
                      {phase.date}
                    </span>
                    <span className="phase-test">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 7l2 2 4-4" />
                        <circle cx="7" cy="7" r="6" />
                      </svg>
                      {phase.test}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rule-box">
            <strong>Regra:</strong> Cada fase tem uma entrega concreta que você testa antes de seguirmos. Se algo não estiver como esperado, ajustamos antes de avançar.
          </div>
        </>
      )}

      {/* Hypercare */}
      {dados.hypercare && (
        <>
          <h3 className="sub-title">Hypercare — {dados.hypercare.dias} dias de suporte intensivo</h3>
          <p style={{ marginBottom: 16, color: '#666' }}>Após a entrega final, você tem {dados.hypercare.dias} dias de acompanhamento dedicado:</p>

          <div className="hypercare-box">
            <div className="hypercare-header">
              <div className="hypercare-dates">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="14" height="13" rx="2" /><line x1="2" y1="7" x2="16" y2="7" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="12" y1="1" x2="12" y2="4" /></svg>
                {dados.hypercare.inicio} — {dados.hypercare.fim}
              </div>
              <span className="hypercare-badge">{dados.hypercare.dias} dias</span>
            </div>
            <ul className="hypercare-list">
              {dados.hypercare.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Acompanhamento */}
      {dados.acompanhamento && dados.acompanhamento.length > 0 && (
        <>
          <h3 className="sub-title">Acompanhamento</h3>
          <div className="follow-up-grid">
            {dados.acompanhamento.map((item, i) => (
              <div className="follow-up-card" key={i}>
                <div className="follow-up-freq">{item.freq}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Pendencias */}
      {dados.pendencias && dados.pendencias.length > 0 && (
        <>
          <h3 className="sub-title">O que precisamos de você</h3>
          <div className="pending-grid">
            {dados.pendencias.map((item, i) => (
              <div className="pending-card" key={i}>
                <div className="pending-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <path d="M3 8h14" />
                    <circle cx="7" cy="12.5" r="1" fill="var(--brand-vibrante)" stroke="none" />
                  </svg>
                </div>
                <div>
                  <h5>{item.titulo}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
