import { PARCEIROS, EVENTO } from '../data/evento'
import { asset } from '../asset'
import './Apoio.css'

export default function Apoio() {
  return (
    <section className="section section--cream apoio" id="apoio">
      <div className="container">
        <div className="apoio__head reveal">
          <p className="eyebrow">Realização e apoio</p>
          <h2 className="section-title">
            Quem <span className="light">apoia</span> esta missão
          </h2>
        </div>

        <div className="apoio__bloco reveal">
          <h3 className="apoio__bloco-titulo">Realização</h3>
          <div className="apoio__grid">
            <div className="apoio__card apoio__card--realizacao" title={EVENTO.realizacao}>
              <img src={asset(EVENTO.realizacaoLogo)} alt={EVENTO.realizacao} />
            </div>
          </div>
        </div>

        {PARCEIROS.map((bloco) => (
          <div className="apoio__bloco reveal" key={bloco.titulo}>
            <h3 className="apoio__bloco-titulo">{bloco.titulo}</h3>
            <div className="apoio__grid">
              {bloco.logos.map((a) => (
                <div className="apoio__card" key={a.nome} title={a.nome}>
                  <img src={asset(a.logo)} alt={a.nome} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
