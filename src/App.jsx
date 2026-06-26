import { useState, useEffect } from 'react'
import config from '../projeto.config.js'
import TabHoje from './components/TabHoje'
import TabSistema from './components/TabSistema'
import TabSpec from './components/TabSpec'
import TabCrono from './components/TabCrono'
import TabDesign from './components/TabDesign'
import TabFluxo from './components/TabFluxo'
import TabMockups from './components/TabMockups'

// ── Icones SVG inline ───────────────────────────────────────

const IconAlertCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const IconLayout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
)

const IconFileText = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
)

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const IconPalette = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IconFlow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h6a3 3 0 0 1 3 3v6" />
  </svg>
)

const IconMockups = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

// Mapa de icones por ID da tab
const tabIcons = {
  hoje: <IconAlertCircle />,
  sistema: <IconLayout />,
  fluxo: <IconFlow />,
  spec: <IconFileText />,
  crono: <IconCalendar />,
  design: <IconPalette />,
  mockups: <IconMockups />,
}

// Cores por posicao da tab
const tabColors = ['#1A4A2A', '#2E7D32', '#1B5E20', '#1A4A2A', '#2E7D32', '#1B5E20', '#388E3C']

// Abas renderizadas via iframe
const embedTabs = ['fluxo', 'design', 'mockups']

// ── Brand tokens ────────────────────────────────────────────
function hexToRgbTriplet(hex) {
  if (typeof hex !== 'string') return null
  const m = hex.trim().replace('#', '')
  if (m.length !== 6) return null
  const r = parseInt(m.slice(0, 2), 16)
  const g = parseInt(m.slice(2, 4), 16)
  const b = parseInt(m.slice(4, 6), 16)
  if ([r, g, b].some(Number.isNaN)) return null
  return `${r}, ${g}, ${b}`
}

function applyBrandTokens(cores) {
  if (!cores) return
  const root = document.documentElement
  const map = {
    principal: '--brand-principal',
    vibrante: '--brand-vibrante',
    escuro: '--brand-escuro',
  }
  Object.entries(map).forEach(([key, cssVar]) => {
    const hex = cores[key]
    if (!hex) return
    root.style.setProperty(cssVar, hex)
    const rgb = hexToRgbTriplet(hex)
    if (rgb) root.style.setProperty(`${cssVar}-rgb`, rgb)
  })
}

// ── Summary ─────────────────────────────────────────────────

function Summary({ onNavigate }) {
  const { resumo, tabs } = config

  return (
    <div className="summary">
      <div className="summary-inner">
        <div className="summary-header">
          <h1>{resumo.titulo}</h1>
          <p>{resumo.subtitulo}</p>
        </div>
        <div className="summary-grid">
          {tabs.map((tab, i) => (
            <button key={tab.id} className="summary-card" onClick={() => onNavigate(tab.id)}>
              <div className="summary-card-num" style={{ color: tabColors[i] || '#1A4A2A' }}>{tab.num}</div>
              <h3>{tab.label}</h3>
              <p>{tab.desc}</p>
              <span className="summary-card-arrow" style={{ color: tabColors[i] || '#1A4A2A' }}>Ver seção →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── App ─────────────────────────────────────────────────────

function App() {
  const [activeTab, setActiveTab] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    applyBrandTokens(config.brand && config.brand.cores)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tabs = (config.tabs || []).map(tab => ({
    id: tab.id,
    label: tab.label,
    icon: tabIcons[tab.id] || <IconFileText />,
  }))

  const handleNavigate = (tabId) => {
    setActiveTab(tabId)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const tabComponents = {
    hoje: config.hoje ? <TabHoje /> : null,
    sistema: config.sistema ? <TabSistema /> : null,
    fluxo: config.fluxograma ? <TabFluxo /> : null,
    spec: config.spec ? <TabSpec /> : null,
    crono: config.crono ? <TabCrono /> : null,
    design: config.designSystem ? <TabDesign /> : null,
    mockups: config.mockups ? <TabMockups /> : null,
  }

  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <div className="header-left">
            <img
              src={config.brand.clientLogo || config.brand.logo}
              alt={config.cliente}
              className="header-logo"
              onClick={() => { setActiveTab(null); setMenuOpen(false); }}
              style={{ cursor: 'pointer' }}
            />
            <div className="header-divider" />
            <span
              className="header-project"
              onClick={() => { setActiveTab(null); setMenuOpen(false); }}
              style={{ cursor: 'pointer' }}
            >
              {config.projeto}
            </span>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <button
              className={`header-tab mobile-only ${activeTab === null ? 'active' : ''}`}
              onClick={() => { setActiveTab(null); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Início
            </button>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleNavigate(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

      <main className="app-main">
        {activeTab === null && <Summary onNavigate={handleNavigate} />}
        {tabs.map(tab => {
          const isEmbed = embedTabs.includes(tab.id)
          if (isEmbed) {
            return activeTab === tab.id ? (
              <div key={tab.id}>{tabComponents[tab.id]}</div>
            ) : null
          }
          return (
            <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              {tabComponents[tab.id]}
            </div>
          )
        })}
      </main>

      {!embedTabs.includes(activeTab) && (
        <footer className="app-footer">
          <img src={config.brand.logo} alt="Labrego IA" style={{ height: 16, opacity: 0.4 }} />
          <span>Documentação — {config.projeto} — {config.data}</span>
        </footer>
      )}

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </>
  )
}

export default App
