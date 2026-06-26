import config from '../../projeto.config.js'

export default function TabMockups() {
  const dados = config.mockups
  if (!dados || !dados.htmlPath) return null

  return (
    <div className="embed-frame">
      <iframe
        src={dados.htmlPath}
        title={`Mockups — ${config.projeto}`}
        className="embed-iframe"
      />
    </div>
  )
}
