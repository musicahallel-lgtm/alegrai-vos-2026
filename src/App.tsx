import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Speakers from './components/Speakers'
import Gallery from './components/Gallery'
import Registration from './components/Registration'
import Venue from './components/Venue'
import Apoio from './components/Apoio'
import Footer from './components/Footer'

export default function App() {
  // Revela seções ao rolar a página.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Gallery />
        <Registration />
        <Venue />
        <Apoio />
      </main>
      <Footer />
    </>
  )
}
