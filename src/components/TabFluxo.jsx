import config from '../../projeto.config.js'

export default function TabFluxo() {
  const dados = config.fluxograma
  if (!dados || !dados.htmlPath) return null

  return (
    <div className="embed-frame">
      <iframe
        src={dados.htmlPath}
        title={`Fluxograma — ${config.projeto}`}
        className="embed-iframe"
      />
    </div>
  )
}
