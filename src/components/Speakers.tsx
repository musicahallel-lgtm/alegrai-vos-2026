import { CONVIDADOS } from '../data/evento'
import { asset } from '../asset'
import './Speakers.css'

function iniciais(nome: string) {
  return nome
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export default function Speakers() {
  return (
    <section className="section section--cream speakers" id="atracoes">
      <div className="container">
        <div className="speakers__head reveal">
          <p className="eyebrow">Presenças confirmadas</p>
          <h2 className="section-title">
            Quem vai <span className="light">ministrar</span> com a gente
          </h2>
        </div>

        <div className="speakers__grid">
          {CONVIDADOS.map((c, i) => (
            <article
              className={`speaker reveal ${c.destaque ? 'speaker--destaque' : ''}`}
              key={c.nome}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {c.selo && <span className="speaker__badge">✦ {c.selo}</span>}
              <div className="speaker__photo">
                {c.foto ? (
                  <img
                    src={asset(c.foto)}
                    alt={c.nome}
                    loading="lazy"
                    onError={(e) => {
                      // Se a foto ainda não foi enviada, mostra as iniciais.
                      const el = e.currentTarget
                      el.style.display = 'none'
                      el.parentElement?.classList.add('speaker__photo--fallback')
                    }}
                  />
                ) : null}
                <span className="speaker__initials">{iniciais(c.nome)}</span>
              </div>
              <h3 className="speaker__name">{c.nome}</h3>
              <p className="speaker__role">{c.papel}</p>
            </article>
          ))}
        </div>

        <p className="speakers__note reveal">
          Programação e convidados sujeitos a atualização pela organização.
        </p>
      </div>
    </section>
  )
}
