import { EVENTO } from '../data/evento'
import './Historia.css'

export default function Historia() {
  return (
    <section className="section section--cream historia" id="conheca-nos">
      <div className="container">
        <div className="historia__head reveal">
          <p className="eyebrow">Conheça-nos</p>
          <h2 className="section-title">
            Uma história de <span className="light">fé e alegria</span>
          </h2>
        </div>

        <div className="historia__grid">
          <div className="historia__text reveal">
            <p>
              O <strong>Alegrai-vos</strong> nasceu do coração da{' '}
              <strong>{EVENTO.realizacao}</strong>, com a missão de anunciar a alegria do Evangelho
              por meio do louvor, da música e da evangelização.
            </p>
            <p>
              A cada edição, o encontro cresceu e passou a reunir mais jovens, famílias e
              comunidades, tornando-se um dos momentos mais aguardados de fé, esperança e renovação
              espiritual em Manaus.
            </p>
            <p>
              Em <strong>2026</strong>, o Alegrai-vos chega à sua <strong>4ª edição</strong>, com o
              tema <em>“O povo que andava nas trevas viu uma grande luz”</em>, reafirmando o chamado
              a viver e partilhar a esperança que vem de Deus.
            </p>
          </div>

          <ul className="historia__timeline reveal">
            <li>
              <span className="historia__dot" />
              <div>
                <strong>A origem</strong>
                <p>Um chamado da Comunidade Hallel para levar a alegria do Evangelho às pessoas.</p>
              </div>
            </li>
            <li>
              <span className="historia__dot" />
              <div>
                <strong>O crescimento</strong>
                <p>Cada edição reuniu mais comunidades, movimentos e famílias em louvor e adoração.</p>
              </div>
            </li>
            <li>
              <span className="historia__dot" />
              <div>
                <strong>4ª edição · 2026</strong>
                <p>A esperança que nasce da presença de Deus, no Centro de Convenções Vasco Vasques.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
