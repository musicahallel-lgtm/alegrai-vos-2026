import { GALERIA } from '../data/evento'
import { asset } from '../asset'
import './Gallery.css'

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="gallery__head reveal">
          <p className="eyebrow">Edições anteriores</p>
          <h2 className="section-title">
            Relembre momentos <span className="light">marcantes</span>
          </h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Reviva um pouco do que já vivemos juntos nas edições anteriores do Alegrai-vos — louvor,
            adoração e comunhão.
          </p>
        </div>

        <div className="gallery__grid reveal">
          {GALERIA.map((src, i) => (
            <figure className="gallery__item" key={src}>
              <img src={asset(src)} alt={`Alegrai-vos — momento ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
