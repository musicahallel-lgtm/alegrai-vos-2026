import { useState } from 'react'
import { EVENTO } from '../data/evento'
import { waLink } from '../wa'
import './Novidades.css'

export default function Novidades() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [aceito, setAceito] = useState(false)
  const [erro, setErro] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (nome.trim().length < 2) return setErro('Informe seu nome.')
    if (sobrenome.trim().length < 2) return setErro('Informe seu sobrenome.')
    if (whatsapp.replace(/\D/g, '').length < 10) return setErro('Informe um WhatsApp válido.')
    if (!aceito) return setErro('É preciso aceitar os termos e condições.')
    setErro('')

    const msg =
      `*Quero saber as novidades do Alegrai-vos ${EVENTO.ano}*\n\n` +
      `Nome: ${nome} ${sobrenome}\n` +
      `WhatsApp: ${whatsapp}`
    window.open(waLink(EVENTO.whatsapp, msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section novidades" id="novidades">
      <div className="container">
        <div className="novidades__card reveal">
          <div className="novidades__text">
            <p className="eyebrow" style={{ color: 'var(--light-blue)' }}>
              Fique por dentro
            </p>
            <h2 className="section-title">
              Quero saber as novidades do <span className="light">Alegrai-vos 2026</span>
            </h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Deixe seu contato e seja o primeiro a receber as novidades, convidados e informações do
              evento.
            </p>
          </div>

          <form className="novidades__form" onSubmit={onSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="nov-nome">Nome *</label>
                <input id="nov-nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" autoComplete="given-name" />
              </div>
              <div className="field">
                <label htmlFor="nov-sobre">Sobrenome *</label>
                <input id="nov-sobre" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Seu sobrenome" autoComplete="family-name" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="nov-wpp">WhatsApp *</label>
              <input id="nov-wpp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(92) 90000-0000" inputMode="tel" autoComplete="tel" />
            </div>

            <label className="form-check">
              <input type="checkbox" checked={aceito} onChange={(e) => setAceito(e.target.checked)} />
              <span>
                Li e aceito os <strong>termos e condições</strong> e autorizo o uso dos meus dados
                para receber informações do Alegrai-vos {EVENTO.ano} pela {EVENTO.realizacao}.
              </span>
            </label>

            {erro && <p className="form-error">{erro}</p>}

            <button type="submit" className="btn btn-primary novidades__btn">
              Quero receber as novidades
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
