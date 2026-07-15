import { EVENTO } from '../data/evento'
import { asset } from '../asset'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={asset('logo.png')} alt="Alegrai-vos" className="footer__logo" />
        </div>

        <p className="footer__theme">
          “O povo que andava nas trevas viu uma grande luz.”
        </p>

        <div className="footer__social">
          <a href={EVENTO.instagramUrl} target="_blank" rel="noopener noreferrer">
            @{EVENTO.instagram}
          </a>
        </div>
      </div>

      <div className="container footer__legal">
        <span>
          {EVENTO.datasLabel} · {EVENTO.horarioInicio} · {EVENTO.local}, {EVENTO.cidade}
        </span>
        <span>© {EVENTO.ano} {EVENTO.realizacao}. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
