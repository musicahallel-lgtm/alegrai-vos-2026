import { useState } from 'react'
import { EVENTO } from '../data/evento'
import { waLink } from '../wa'
import './Caravanas.css'

const VAZIO = { coordenador: '', cpf: '', nomeCaravana: '', cidade: '', telefone: '' }

export default function Caravanas() {
  const [form, setForm] = useState({ ...VAZIO })
  const [erro, setErro] = useState('')

  function update<K extends keyof typeof form>(campo: K, valor: string) {
    setForm((f) => ({ ...f, [campo]: valor }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.coordenador.trim().length < 2) return setErro('Informe o nome do coordenador.')
    if (form.cpf.replace(/\D/g, '').length < 11) return setErro('Informe um CPF válido.')
    if (form.nomeCaravana.trim().length < 2) return setErro('Informe o nome da caravana.')
    if (form.cidade.trim().length < 2) return setErro('Informe a cidade.')
    if (form.telefone.replace(/\D/g, '').length < 10) return setErro('Informe um telefone/WhatsApp válido.')
    setErro('')

    const msg =
      `*Cadastro de Caravana — Alegrai-vos ${EVENTO.ano}*\n\n` +
      `Coordenador: ${form.coordenador}\n` +
      `CPF: ${form.cpf}\n` +
      `Nome da caravana: ${form.nomeCaravana}\n` +
      `Cidade: ${form.cidade}\n` +
      `Telefone/WhatsApp: ${form.telefone}`
    window.open(waLink(EVENTO.whatsapp, msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section caravanas" id="caravanas">
      <div className="container">
        <div className="caravanas__grid">
          <div className="caravanas__intro reveal">
            <p className="eyebrow" style={{ color: 'var(--light-blue)' }}>
              Caravanas
            </p>
            <h2 className="section-title">
              Cadastre, divulgue e <span className="light">encontre</span> uma caravana
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Vai reunir um grupo da sua paróquia, comunidade ou cidade? Cadastre sua caravana e
              facilite a organização de todos para o Alegrai-vos {EVENTO.ano}.
            </p>
            <ul className="caravanas__perks">
              <li>✦ Organize a vinda do seu grupo</li>
              <li>✦ Ajude mais pessoas a participarem</li>
              <li>✦ Receba as informações direto no WhatsApp</li>
            </ul>
          </div>

          <form className="caravanas__card reveal" onSubmit={onSubmit} noValidate>
            <h3 className="caravanas__card-title">Cadastre sua caravana</h3>
            <div className="field">
              <label htmlFor="coord">Coordenador de caravana *</label>
              <input id="coord" value={form.coordenador} onChange={(e) => update('coordenador', e.target.value)} placeholder="Nome do coordenador" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="cpf">CPF *</label>
                <input id="cpf" value={form.cpf} onChange={(e) => update('cpf', e.target.value)} placeholder="000.000.000-00" inputMode="numeric" />
              </div>
              <div className="field">
                <label htmlFor="cidade-car">Qual a cidade? *</label>
                <input id="cidade-car" value={form.cidade} onChange={(e) => update('cidade', e.target.value)} placeholder="Cidade" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="nome-car">Nome da caravana *</label>
              <input id="nome-car" value={form.nomeCaravana} onChange={(e) => update('nomeCaravana', e.target.value)} placeholder="Ex.: Caravana Paróquia São José" />
            </div>
            <div className="field">
              <label htmlFor="tel-car">Telefone / WhatsApp *</label>
              <input id="tel-car" value={form.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(92) 90000-0000" inputMode="tel" />
            </div>

            {erro && <p className="form-error">{erro}</p>}

            <button type="submit" className="btn btn-primary caravanas__btn">
              Cadastrar caravana
            </button>
            <p className="caravanas__fine">O cadastro é enviado pelo WhatsApp da organização.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
