import { EVENTO } from '../data/evento'
import './About.css'

const NUMEROS = [
  { valor: '2', sufixo: 'dias', desc: 'de louvor e adoração' },
  { valor: 'Grátis', sufixo: 'entrada', desc: 'mediante inscrição' },
  { valor: '4ª', sufixo: 'edição', desc: 'de um encontro que só cresce' },
]

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container">
        <div className="about__grid">
          <div className="reveal">
            <p className="eyebrow">O evento</p>
            <h2 className="section-title">
              Um encontro de louvor, música e <span className="light">mensagem de esperança</span>
            </h2>
          </div>

          <div className="about__text reveal">
            <p>
              Nos dias <strong>20 e 21 de novembro de 2026</strong>, Manaus recebe a quarta edição
              do <strong>Alegrai-vos</strong>, um grande encontro católico promovido pela{' '}
              <strong>{EVENTO.realizacao}</strong>, no {EVENTO.local}.
            </p>
            <p>
              Com o tema <em>“Alegrai-vos! O povo que andava nas trevas viu uma grande luz”</em>, o
              evento proporciona uma profunda experiência de fé, esperança, comunhão e renovação
              espiritual para jovens, adultos, famílias e participantes de diferentes comunidades e
              movimentos da Igreja.
            </p>
            <p>
              A programação reúne momentos de oração, louvor, pregação, música e adoração, criando
              um ambiente de acolhimento e de encontro pessoal com Deus.
            </p>
          </div>
        </div>

        <div className="about__numbers reveal">
          {NUMEROS.map((n) => (
            <div className="about__stat" key={n.sufixo}>
              <div className="about__stat-value">
                {n.valor} <span>{n.sufixo}</span>
              </div>
              <p>{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
