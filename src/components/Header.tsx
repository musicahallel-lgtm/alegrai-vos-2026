import { useEffect, useState } from 'react'
import { EVENTO } from '../data/evento'
import { asset } from '../asset'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label="Alegrai-vos 2026">
          <img src={asset('logo.png')} alt="Alegrai-vos" className="brand__logo" />
        </a>

        <nav className="site-nav">
          <a href="#sobre">O evento</a>
          <a href="#conheca-nos">História</a>
          <a href="#atracoes">Atrações</a>
          <a href="#caravanas">Caravanas</a>
          <a href="#parcerias">Parceiros</a>
          <a href="#inscricao">Inscrição</a>
        </nav>

        <a
          href={EVENTO.inscricaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary site-header__cta"
        >
          Inscreva-se
        </a>
      </div>
    </header>
  )
}
