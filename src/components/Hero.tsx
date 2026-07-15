import { useEffect, useState } from 'react'
import { EVENTO } from '../data/evento'
import { asset } from '../asset'
import './Hero.css'

function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime()
  const [diff, setDiff] = useState(() => target - Date.now())

  useEffect(() => {
    const id = setInterval(() => setDiff(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const clamped = Math.max(diff, 0)
  const dias = Math.floor(clamped / 86400000)
  const horas = Math.floor((clamped % 86400000) / 3600000)
  const min = Math.floor((clamped % 3600000) / 60000)
  const seg = Math.floor((clamped % 60000) / 1000)
  return { dias, horas, min, seg }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="count__unit">
      <span className="count__value">{String(value).padStart(2, '0')}</span>
      <span className="count__label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const { dias, horas, min, seg } = useCountdown(EVENTO.dataInicioISO)

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden />
      <div className="hero__overlay" aria-hidden />

      <div className="container hero__inner">
        <p className="hero__badge reveal">
          {EVENTO.edicao} · {EVENTO.realizacao}
        </p>

        <img src={asset('logo.png')} alt="Alegrai-vos" className="hero__logo reveal" />

        <h1 className="hero__dates reveal">
          20 &amp; 21 <span className="light">NOV</span> 2026
        </h1>

        <p className="hero__theme reveal">
          “O povo que andava nas trevas <span className="light">viu uma grande luz</span>.”
        </p>

        <p className="hero__meta reveal">
          {EVENTO.horarioInicio} · {EVENTO.local}, {EVENTO.cidade}
        </p>

        <div className="hero__actions reveal">
          <a
            href={EVENTO.inscricaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Fazer minha inscrição
          </a>
          <a href="#sobre" className="btn btn-ghost">
            Conhecer o evento
          </a>
        </div>

        <div className="count reveal" aria-label="Contagem regressiva para o evento">
          <Unit value={dias} label="dias" />
          <span className="count__sep">:</span>
          <Unit value={horas} label="horas" />
          <span className="count__sep">:</span>
          <Unit value={min} label="min" />
          <span className="count__sep">:</span>
          <Unit value={seg} label="seg" />
        </div>
      </div>
    </section>
  )
}
