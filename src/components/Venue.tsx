import { EVENTO } from '../data/evento'
import './Venue.css'

export default function Venue() {
  const mapaSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    EVENTO.enderecoMapa,
  )}&output=embed`

  return (
    <section className="section venue" id="local">
      <div className="container">
        <div className="venue__grid">
          <div className="reveal">
            <p className="eyebrow">Como chegar</p>
            <h2 className="section-title">{EVENTO.local}</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              {EVENTO.cidade}
            </p>
            <p style={{ color: 'var(--text-dim)', marginTop: 18 }}>
              Um dos principais espaços de eventos de Manaus, com fácil acesso e estrutura para
              receber todos os participantes do Alegrai-vos {EVENTO.ano}.
            </p>
            <a
              className="btn btn-ghost"
              style={{ marginTop: 26 }}
              href={`https://maps.google.com/?q=${encodeURIComponent(EVENTO.enderecoMapa)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>

          <div className="venue__map reveal">
            <iframe
              title="Mapa do local"
              src={mapaSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
