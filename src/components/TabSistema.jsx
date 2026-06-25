import { PageHeader, SectionHero } from './Logo'
import config from '../../projeto.config.js'

// ── Sub-componentes reutilizaveis ───────────────────────────

function OverviewCard({ title, desc, sectionId }) {
  const handleClick = () => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="overview-card overview-card-clickable" onClick={handleClick}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: 'rgba(var(--brand-vibrante-rgb), 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 14px',
      }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="9" height="9" rx="2" />
          <rect x="16" y="3" width="9" height="9" rx="2" />
          <rect x="3" y="16" width="9" height="9" rx="2" />
          <rect x="16" y="16" width="9" height="9" rx="2" />
        </svg>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <span className="overview-card-link">Ver detalhes →</span>
    </div>
  )
}

function ModuleGroupCard({ num, titulo, percent, cor, descricao, items, sectionId }) {
  const handleClick = () => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="module-group-card" onClick={handleClick} style={{ borderTopColor: cor }}>
      <div className="module-group-header">
        <span className="module-group-num" style={{ color: cor }}>{num}</span>
        <span className="module-group-percent" style={{ background: cor }}>{percent}</span>
      </div>
      <h4>{titulo}</h4>
      <p className="module-group-desc">{descricao}</p>
      <ul className="module-group-items">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <span className="module-group-link" style={{ color: cor }}>Ver detalhes →</span>
    </div>
  )
}

function SectionNav({ modulos }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // Coletar todos os IDs de secoes dos modulos
  const navItems = modulos.flatMap(m =>
    (m.secoes || []).map(s => ({ id: s.id, label: s.tag }))
  )
  if (navItems.length === 0) return null

  return (
    <div className="section-nav">
      <span className="section-nav-label">Navegar para:</span>
      <div className="section-nav-pills">
        {navItems.map((item) => (
          <button key={item.id} className="section-nav-pill" onClick={() => scrollTo(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function FeatureList({ items }) {
  return (
    <div className="compare-after" style={{ borderRadius: 12, padding: '20px 24px', marginBottom: 20 }}>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  )
}

function DashboardGrid({ cards }) {
  return (
    <div className="dashboard-grid">
      {cards.map((c, i) => (
        <div key={i} className={`dashboard-card${c.spanTwo ? ' span-2' : ''}`}>
          <div className="dashboard-card-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--brand-vibrante)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="12" height="12" rx="2" />
              <line x1="3" y1="9" x2="15" y2="9" />
            </svg>
          </div>
          <div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
            {c.action && <span className="dashboard-action">{c.action} →</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

function CompareGrid({ antes, depois }) {
  return (
    <div className="compare-grid">
      <div className="compare-before">
        <h4>ANTES</h4>
        <ul>{antes.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div className="compare-after">
        <h4>DEPOIS</h4>
        <ul>{depois.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  )
}

function JourneySteps({ steps }) {
  return (
    <div className="journey-steps">
      {steps.map((s, i) => (
        <div key={i} className="journey-step">
          <div className="journey-step-num">{i + 1}</div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Renderizador de blocos dentro de secoes ──────────────────

function renderBloco(bloco, i) {
  switch (bloco.tipo) {
    case 'texto':
      return (
        <div key={i} className="doc-prose">
          {bloco.titulo && <h3 className="sub-title">{bloco.titulo}</h3>}
          {(bloco.paragrafos || []).map((p, j) => (
            <p key={j} className="doc-paragraph">{p}</p>
          ))}
        </div>
      )

    case 'dashboard':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <DashboardGrid cards={bloco.cards} />
        </div>
      )

    case 'comparacao':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <CompareGrid antes={bloco.antes} depois={bloco.depois} />
        </div>
      )

    case 'features':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <FeatureList items={bloco.items} />
        </div>
      )

    case 'jornada':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          {bloco.descricao && <p style={{ marginBottom: 16, color: '#666' }}>{bloco.descricao}</p>}
          <JourneySteps steps={bloco.steps} />
        </div>
      )

    case 'destaque':
      return (
        <div key={i} className="highlight-box">
          <p><strong>{bloco.titulo}:</strong> {bloco.texto}</p>
        </div>
      )

    case 'regra':
      return (
        <div key={i} className="rule-box">
          <strong>Regra:</strong> {bloco.texto}
        </div>
      )

    case 'notificacoes':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="notification-grid">
            {bloco.items.map((n, j) => (
              <div key={j} className="notification-card" style={{ alignItems: 'flex-start' }}>
                <span className="notification-card-icon" style={{ fontSize: 16, minWidth: 32 }}>{String(j + 1).padStart(2, '0')}</span>
                <div>
                  <h5>{n.title}</h5>
                  <p>{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'tabela':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>{bloco.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {bloco.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k} className={k === 0 ? 'td-label' : ''}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'portal':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="portal-grid">
            {bloco.cards.map((c, j) => (
              <div key={j} className="portal-card">
                <h4>{c.title}</h4>
                {c.sub && <p style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>{c.sub}</p>}
                {c.desc && <span className="tag tag-purple">{c.desc}</span>}
              </div>
            ))}
          </div>
        </div>
      )

    case 'automacoes':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="auto-grid">
            {bloco.items.map((a, j) => (
              <div key={j} className="auto-card">
                <h5>
                  {a.title}
                  {a.trigger && <span className="trigger-tag">{a.trigger}</span>}
                </h5>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'integracoes':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="integration-grid">
            {bloco.items.map((it, j) => (
              <div key={j} className="integration-card">
                <h5>
                  {it.name}
                  {it.tag && <span className="integration-use-tag">{it.tag}</span>}
                </h5>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'perfis':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="profile-grid">
            {bloco.profiles.map((p, j) => (
              <div key={j} className={`profile-card ${p.type || 'admin'}`}>
                <div className="profile-role">{p.role}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                {p.items && (
                  <ul>
                    {p.items.map((item, k) => <li key={k}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )

    case 'entregas':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="delivery-steps">
            {bloco.steps.map((s, j) => (
              <div key={j} className="delivery-step">
                <div className="delivery-step-num">{j + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'pdf':
      return (
        <div key={i}>
          <h3 className="sub-title">{bloco.titulo}</h3>
          <div className="pdf-sections-grid">
            {bloco.sections.map((s, j) => (
              <div key={j} className="pdf-section-card">
                <div className="pdf-num">{j + 1}</div>
                <div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

// ── Renderizador de secao de modulo ─────────────────────────

function ModuleSection({ secao }) {
  return (
    <section className="page" id={secao.id}>
      <PageHeader tag={secao.tag} />

      <SectionHero
        num={secao.heroNum}
        title={secao.heroTitle}
        description={secao.heroDescription}
      />

      {(secao.intro || []).length > 0 && (
        <div className="doc-prose">
          {secao.intro.map((p, i) => <p key={i} className="doc-paragraph">{p}</p>)}
        </div>
      )}

      {(secao.blocos || []).map((bloco, i) => renderBloco(bloco, i))}
    </section>
  )
}

// ── Componente principal ────────────────────────────────────

export default function TabSistema() {
  const dados = config.sistema
  if (!dados) return null

  const { modulos = [], escopo, visaoGeral, overviewCards = [] } = dados

  return (
    <>
      {/* === VISAO GERAL === */}
      <section className="page">
        <PageHeader tag="Visão Geral" />

        <SectionHero
          num="01"
          title={visaoGeral?.titulo || 'O que estamos construindo'}
          description={visaoGeral?.descricao || ''}
        />

        {/* Narrativa em texto corrido (contexto antes dos cards) */}
        {(visaoGeral?.intro || []).length > 0 && (
          <div className="doc-prose">
            {visaoGeral.intro.map((p, i) => <p key={i} className="doc-paragraph">{p}</p>)}
          </div>
        )}

        {/* Cards de visao geral */}
        {overviewCards.length > 0 && (
          <div className="overview-grid">
            {overviewCards.map((c, i) => <OverviewCard key={i} {...c} />)}
          </div>
        )}

        {/* Modulos agrupados */}
        {modulos.length > 0 && (
          <>
            <h3 className="sub-title">{modulos.length} modulos contratados</h3>
            <p style={{ marginBottom: 20 }}>
              O sistema esta organizado em {modulos.length} modulos. Clique em qualquer modulo para ver os detalhes:
            </p>
            <div className="module-group-grid">
              {modulos.map((g) => <ModuleGroupCard key={g.num} {...g} />)}
            </div>
          </>
        )}

        <SectionNav modulos={modulos} />
      </section>

      {/* === SECOES DE CADA MODULO === */}
      {modulos.flatMap(m =>
        (m.secoes || []).map((secao, i) => (
          <ModuleSection key={`${m.num}-${i}`} secao={secao} />
        ))
      )}

      {/* === ESCOPO === */}
      {escopo && (
        <section className="page" id="sec-escopo">
          <PageHeader tag="Escopo do Projeto" />

          <SectionHero
            num={String(modulos.length + 1).padStart(2, '0')}
            title="O que está incluído — e o que não está"
            description="Para não ter dúvida sobre o que o sistema faz e o que fica de fora"
          />

          {escopo.inclui && escopo.inclui.length > 0 && (
            <>
              <h3 className="sub-title">O que está incluído neste projeto</h3>
              <FeatureList items={escopo.inclui} />
            </>
          )}

          {escopo.naoInclui && escopo.naoInclui.length > 0 && (
            <>
              <h3 className="sub-title">O que não está incluído</h3>
              <div className="notification-grid">
                {escopo.naoInclui.map((item, i) => (
                  <div key={i} className="notification-card" style={{ alignItems: 'flex-start' }}>
                    <div style={{ minWidth: 24, color: '#999', fontWeight: 600, fontSize: 14 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="2" y1="2" x2="12" y2="12" />
                        <line x1="12" y1="2" x2="2" y2="12" />
                      </svg>
                    </div>
                    <div>
                      <h5>{typeof item === 'string' ? item : item.item}</h5>
                      {typeof item !== 'string' && item.explicacao && <p>{item.explicacao}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="highlight-box">
            <p>
              <strong>Expansoes futuras.</strong> Itens fora do escopo podem ser adicionados em fases futuras. Primeiro, o sistema resolve o dia a dia. Depois, escala.
            </p>
          </div>
        </section>
      )}
    </>
  )
}
