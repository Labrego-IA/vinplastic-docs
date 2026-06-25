export function Logo({ height = 18, opacity = 0.5 }) {
  return (
    <img
      src="/logo-labrego.png"
      alt="Labrego IA"
      style={{ height, opacity, display: 'block' }}
    />
  )
}

export function PageHeader({ tag, children }) {
  return (
    <div className="page-header">
      <span className="page-tag">{tag}</span>
      <span className="page-logo"><Logo height={18} opacity={0.4} /></span>
      {children}
    </div>
  )
}

export function SectionHero({ num, title, description, style }) {
  return (
    <div className="section-hero" style={style}>
      {num && <div className="section-hero-num">{num}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
