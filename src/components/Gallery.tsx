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
            Momentos que <span className="light">marcam</span>
          </h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Um pouco do que já vivemos juntos — louvor, adoração e comunhão em cada edição do
            Alegrai-vos.
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
