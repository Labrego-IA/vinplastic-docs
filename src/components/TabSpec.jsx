import { PageHeader, SectionHero } from './Logo'
import config from '../../projeto.config.js'

// ── Icones (SVG inline — nunca emoji) ───────────────────────

function Icon({ name, size = 16, color = 'var(--brand-principal)' }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  switch (name) {
    case 'route':
      return <svg {...common}><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg>
    case 'target':
      return <svg {...common}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
    case 'users':
      return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    case 'fields':
      return <svg {...common}><line x1="21" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="21" y1="18" x2="3" y2="18" /></svg>
    case 'filter':
      return <svg {...common}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
    case 'table':
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
    case 'action':
      return <svg {...common}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    case 'states':
      return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
    case 'rules':
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /><line x1="9" y1="11" x2="13" y2="11" /></svg>
    case 'data':
      return <svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
    case 'check':
      return <svg {...common}><polyline points="20 6 9 17 4 12" /></svg>
    default:
      return null
  }
}

// ── Sub-componentes ─────────────────────────────────────────

function FieldTable({ headers, rows }) {
  return (
    <div className="detail-table-wrap">
      <table className="detail-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? 'td-label' : ''}>
                  {typeof cell === 'string' ? cell : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RuleBox({ children }) {
  return (
    <div className="rule-box">
      <strong>Regra: </strong>{children}
    </div>
  )
}

// Texto corrido: explica o modelo de dados e as regras ANTES das tabelas.
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

// Cabecalho de um bloco da tela (icone + titulo)
function SpecBlockHead({ icon, title }) {
  return (
    <div className="spec-block-head">
      <span className="spec-block-icon"><Icon name={icon} size={15} /></span>
      <h4 className="spec-block-title">{title}</h4>
    </div>
  )
}

// ── Render de cada bloco de uma tela ────────────────────────

function CamposBlock({ campos }) {
  if (!campos || campos.length === 0) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="fields" title="Campos" />
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead>
            <tr><th>Campo</th><th>Tipo</th><th>Obrigatório</th><th>Validação / Máscara</th></tr>
          </thead>
          <tbody>
            {campos.map((c, i) => (
              <tr key={i}>
                <td className="td-label">{c.nome}</td>
                <td>{c.tipo || '—'}</td>
                <td>
                  <span className={`tag ${c.obrigatorio ? 'tag-purple' : 'tag-gray'}`}>
                    {c.obrigatorio ? 'Sim' : 'Não'}
                  </span>
                </td>
                <td className="td-desc">{c.validacao || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FiltrosBlock({ filtros }) {
  if (!filtros || filtros.length === 0) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="filter" title="Filtros" />
      <ul className="spec-list">
        {filtros.map((f, i) => (
          <li key={i} className="spec-list-item">
            <span className="spec-list-key">{f.nome}</span>
            <span className="spec-list-val">{f.comportamento}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TabelaBlock({ tabela }) {
  if (!tabela) return null
  const { colunas = [], ordenacao, paginacao, acoesLinha = [] } = tabela
  return (
    <div className="spec-block">
      <SpecBlockHead icon="table" title="Tabela / Lista" />
      {colunas.length > 0 && (
        <div className="spec-chips">
          {colunas.map((c, i) => <span key={i} className="spec-chip">{c}</span>)}
        </div>
      )}
      <ul className="spec-list spec-list-compact">
        {ordenacao && (
          <li className="spec-list-item"><span className="spec-list-key">Ordenação</span><span className="spec-list-val">{ordenacao}</span></li>
        )}
        {paginacao && (
          <li className="spec-list-item"><span className="spec-list-key">Paginação</span><span className="spec-list-val">{paginacao}</span></li>
        )}
        {acoesLinha.length > 0 && (
          <li className="spec-list-item"><span className="spec-list-key">Ações por linha</span><span className="spec-list-val">{acoesLinha.join(' · ')}</span></li>
        )}
      </ul>
    </div>
  )
}

function AcoesBlock({ acoes }) {
  if (!acoes || acoes.length === 0) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="action" title="Botões e ações" />
      <div className="spec-cards-grid">
        {acoes.map((a, i) => (
          <div key={i} className="spec-action-card">
            <div className="spec-action-label">{a.rotulo}</div>
            {a.faz && <p className="spec-action-faz">{a.faz}</p>}
            <div className="spec-action-meta">
              {a.confirmacao && (
                <span className="spec-meta-tag spec-meta-warn">
                  {typeof a.confirmacao === 'string' ? a.confirmacao : 'Pede confirmação'}
                </span>
              )}
              {a.feedback && <span className="spec-meta-tag spec-meta-ok">Feedback: {a.feedback}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ESTADO_LABELS = {
  vazio: 'Vazio',
  carregando: 'Carregando',
  erro: 'Erro',
  semPermissao: 'Sem permissão',
}

function EstadosBlock({ estados }) {
  if (!estados) return null
  const entries = Object.entries(estados).filter(([, v]) => v)
  if (entries.length === 0) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="states" title="Estados da tela" />
      <div className="spec-estados-grid">
        {entries.map(([key, val], i) => (
          <div key={i} className="spec-estado-card">
            <span className="spec-estado-tag">{ESTADO_LABELS[key] || key}</span>
            <p className="spec-estado-desc">{val}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RegrasBlock({ regras }) {
  if (!regras || regras.length === 0) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="rules" title="Regras de negócio" />
      {regras.map((r, i) => <RuleBox key={i}>{r}</RuleBox>)}
    </div>
  )
}

function DadosBlock({ dados }) {
  if (!dados) return null
  const { origem, persiste } = dados
  if (!origem && !persiste) return null
  return (
    <div className="spec-block">
      <SpecBlockHead icon="data" title="Dados" />
      <ul className="spec-list spec-list-compact">
        {origem && <li className="spec-list-item"><span className="spec-list-key">Origem</span><span className="spec-list-val">{origem}</span></li>}
        {persiste && <li className="spec-list-item"><span className="spec-list-key">Persiste</span><span className="spec-list-val">{persiste}</span></li>}
      </ul>
    </div>
  )
}

// Card completo de uma TELA
function TelaCard({ tela }) {
  const { nome, rota, objetivo, papeis = [] } = tela
  return (
    <div className="spec-tela-card">
      <div className="spec-tela-header">
        <div className="spec-tela-heading">
          <h3 className="spec-tela-nome">{nome}</h3>
          {rota && (
            <span className="spec-tela-rota">
              <Icon name="route" size={13} color="var(--brand-vibrante)" />
              <code>{rota}</code>
            </span>
          )}
        </div>
        {papeis.length > 0 && (
          <div className="spec-tela-papeis">
            <Icon name="users" size={13} color="var(--brand-escuro)" />
            {papeis.map((p, i) => <span key={i} className="spec-papel-chip">{p}</span>)}
          </div>
        )}
      </div>

      {objetivo && (
        <div className="spec-tela-objetivo">
          <Icon name="target" size={15} color="var(--brand-principal)" />
          <p>{objetivo}</p>
        </div>
      )}

      <div className="spec-tela-body">
        <CamposBlock campos={tela.campos} />
        <FiltrosBlock filtros={tela.filtros} />
        <TabelaBlock tabela={tela.tabela} />
        <AcoesBlock acoes={tela.acoes} />
        <EstadosBlock estados={tela.estados} />
        <RegrasBlock regras={tela.regras} />
        <DadosBlock dados={tela.dados} />
      </div>
    </div>
  )
}

// ── Componente principal ────────────────────────────────────

export default function TabSpec() {
  const dados = config.spec
  if (!dados) return null

  const { telas = [], modulos = [], intro } = dados

  return (
    <>
      {/* Pagina de entrada com legenda */}
      <section className="page">
        <PageHeader tag="Referência Técnica" />

        <div style={{
          background: 'rgba(var(--brand-principal-rgb),0.06)',
          border: '1px solid rgba(var(--brand-principal-rgb),0.15)',
          borderRadius: 10,
          padding: '12px 18px',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-principal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ fontSize: 13, color: '#555', margin: 0, lineHeight: 1.5 }}>
            Esta secao e referencia para o time de desenvolvimento. Para ver o que o sistema faz na pratica, veja <strong>O Sistema (to be)</strong>.
          </p>
        </div>

        <SectionHero
          title="Especificação técnica por tela"
          description="Detalhamento completo de cada tela - campos, filtros, tabelas, acoes, estados, regras e dados - para o time implementar sem improviso"
          style={{ background: 'linear-gradient(135deg, var(--brand-escuro) 0%, var(--brand-vibrante) 50%, var(--brand-principal) 100%)' }}
        />

        <Prose content={intro} />
      </section>

      {/* Spec completa POR TELA (modelo recomendado) */}
      {telas.length > 0 && (
        <section className="page" style={{ paddingTop: 0 }}>
          {telas.map((tela, i) => (
            <TelaCard key={i} tela={tela} />
          ))}
        </section>
      )}

      {/* Modulos legados com tabelas de campos (retrocompatibilidade) */}
      {modulos.map((modulo, i) => (
        <section key={i} className="page" style={{ paddingTop: (i > 0 || telas.length > 0) ? 0 : undefined }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '6px' }}>
            {modulo.titulo}
          </h2>
          {modulo.descricao && (
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '28px', lineHeight: '1.6' }}>
              {modulo.descricao}
            </p>
          )}

          {/* Narrativa do modulo: modelo de dados, relacoes e regras em texto */}
          <Prose content={modulo.intro} />

          {/* Tabelas de campos */}
          {(modulo.tabelas || []).map((tabela, j) => (
            <div key={j}>
              <h3 className="sub-title">{tabela.titulo}</h3>
              <FieldTable
                headers={tabela.headers}
                rows={tabela.rows}
              />
            </div>
          ))}

          {/* Regras do modulo */}
          {(modulo.regras || []).map((regra, j) => (
            <RuleBox key={j}>{regra}</RuleBox>
          ))}
        </section>
      ))}
    </>
  )
}
