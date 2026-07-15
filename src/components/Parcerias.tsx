import { EVENTO } from '../data/evento'
import { waLink } from '../wa'
import './Parcerias.css'

export default function Parcerias() {
  const expositorMsg = `Olá! Tenho interesse em ser EXPOSITOR no Alegrai-vos ${EVENTO.ano}.`
  const patrocinadorMsg = `Olá! Tenho interesse em ser PATROCINADOR do Alegrai-vos ${EVENTO.ano} e levar minha marca ao evento.`

  return (
    <section className="section section--cream parcerias" id="parcerias">
      <div className="container">
        <div className="parcerias__head reveal">
          <p className="eyebrow">Faça parte</p>
          <h2 className="section-title">
            Leve sua marca para o <span className="light">Alegrai-vos</span>
          </h2>
        </div>

        <div className="parcerias__grid">
          <div className="parceria-card reveal">
            <span className="parceria-card__icon" aria-hidden>◆</span>
            <h3>Seja um expositor</h3>
            <p>
              Garanta seu espaço para expor seus produtos e serviços a milhares de participantes
              durante os dois dias de evento.
            </p>
            <a
              className="btn btn-blue"
              href={waLink(EVENTO.whatsapp, expositorMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero ser expositor
            </a>
            <span className="parceria-card__contato">Contato: {EVENTO.whatsappLabel}</span>
          </div>

          <div className="parceria-card parceria-card--destaque reveal">
            <span className="parceria-card__icon" aria-hidden>★</span>
            <h3>Seja um patrocinador</h3>
            <p>
              Traga a sua marca para o Alegrai-vos {EVENTO.ano} e viva o impacto de um evento que
              transforma. Associe sua empresa a uma mensagem de fé, alegria e esperança.
            </p>
            <a
              className="btn btn-primary"
              href={waLink(EVENTO.whatsapp, patrocinadorMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero patrocinar
            </a>
            <span className="parceria-card__contato">Contato: {EVENTO.whatsappLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
