import config from '../../projeto.config.js'

export default function TabDesign() {
  const dados = config.designSystem
  if (!dados || !dados.htmlPath) return null

  return (
    <div className="embed-frame">
      <iframe
        src={dados.htmlPath}
        title={`Design System — ${config.projeto}`}
        className="embed-iframe"
      />
    </div>
  )
}
