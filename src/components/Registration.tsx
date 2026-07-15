import { EVENTO } from '../data/evento'
import './Registration.css'

export default function Registration() {
  return (
    <section className="section registration" id="inscricao">
      <div className="container">
        <div className="reg-cta reveal">
          <p className="eyebrow" style={{ color: 'var(--light-blue)' }}>
            Inscrições
          </p>
          <h2 className="section-title">
            Garanta sua <span className="light">vaga</span>
          </h2>
          <p className="lead" style={{ margin: '16px auto 0' }}>
            Inscrição <strong>gratuita</strong> e vagas limitadas — faça a sua inscrição na
            plataforma oficial e garanta seu lugar no Alegrai-vos {EVENTO.ano}.
          </p>

          <ul className="reg-perks">
            <li>✦ Entrada gratuita mediante inscrição</li>
            <li>✦ {EVENTO.datasLabel} · {EVENTO.horarioInicio}</li>
            <li>✦ {EVENTO.local}, {EVENTO.cidade}</li>
          </ul>

          <a
            className="btn btn-primary reg-cta__btn"
            href={EVENTO.inscricaoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer minha inscrição
          </a>

          <p className="reg-fineprint">
            Você será direcionado à plataforma oficial de inscrições.
          </p>
        </div>
      </div>
    </section>
  )
}
