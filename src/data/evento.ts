// Dados do evento centralizados — edite aqui para atualizar o site inteiro.

export const EVENTO = {
  nome: 'Alegrai-vos',
  edicao: '4ª edição',
  ano: 2026,
  tema: 'O povo que andava nas trevas viu uma grande luz',
  datasLabel: '20 e 21 de novembro de 2026',
  horarioInicio: 'Início às 8h',
  // Data/hora de início para a contagem regressiva (horário de Manaus, UTC-4).
  dataInicioISO: '2026-11-20T08:00:00-04:00',
  local: 'Centro de Convenções Vasco Vasques',
  cidade: 'Manaus — AM',
  realizacao: 'Comunidade Católica Hallel',
  realizacaoLogo: '/apoio/hallel.png',
  // Link oficial de inscrição (plataforma e-inscricao). Troque quando sair o de 2026.
  inscricaoUrl: 'https://www.e-inscricao.com/Alegraivos/hallel2025-qjna',
  // WhatsApp da organização (formato internacional 55 + DDD + número). Usado nos formulários e contatos.
  whatsapp: '5592993243020',
  whatsappLabel: '(92) 99324-3020',
  instagram: 'alegraivoshallel',
  instagramUrl: 'https://instagram.com/alegraivoshallel',
  // Endereço para o mapa (Google Maps embed via query).
  enderecoMapa: 'Centro de Convenções Vasco Vasques, Manaus, AM',
}

export interface Convidado {
  nome: string
  papel: string
  // Coloque a foto em /public/convidados/<arquivo> e referencie aqui.
  foto?: string
  // Destaca o card (borda dourada + selo). Use para o convidado principal.
  destaque?: boolean
  selo?: string
}

export const CONVIDADOS: Convidado[] = [
  {
    nome: 'Moisés Rocha',
    papel: 'Fundador da Comunidade Filhos de João Batista · Cantor, pregador e adorador',
    foto: '/convidados/moises-rocha.webp',
    destaque: true,
    selo: 'Convidado especial',
  },
  { nome: 'Clenir Viana', papel: 'Fundadora da Comunidade Católica Hallel', foto: '/convidados/clenir-viana.png' },
  { nome: 'Gill Motta', papel: 'Fundador da Comunidade Metanoia · Cantor e adorador', foto: '/convidados/gill-motta.png' },
  { nome: 'Padre Luiz Marculino', papel: 'Pregação e presidência', foto: '/convidados/luiz-marculino.jpg' },
]

export interface BlocoProgramacao {
  horario: string
  titulo: string
}

export interface DiaProgramacao {
  dia: string
  data: string
  blocos: BlocoProgramacao[]
}

// Programação provisória — ajuste os horários com a organização.
export const PROGRAMACAO: DiaProgramacao[] = [
  {
    dia: 'Sexta-feira',
    data: '20 de novembro',
    blocos: [
      { horario: '18h', titulo: 'Abertura dos portões' },
      { horario: '19h', titulo: 'Louvor e adoração' },
      { horario: '20h', titulo: 'Pregação' },
      { horario: '21h30', titulo: 'Momento de música e ministração' },
    ],
  },
  {
    dia: 'Sábado',
    data: '21 de novembro',
    blocos: [
      { horario: '16h', titulo: 'Abertura dos portões' },
      { horario: '17h', titulo: 'Louvor e oração' },
      { horario: '18h30', titulo: 'Pregação' },
      { horario: '20h', titulo: 'Adoração e encerramento' },
    ],
  },
]

// Galeria de edições anteriores — imagens em /public/galeria/
export const GALERIA: string[] = [
  '/galeria/foto-1.jpg',
  '/galeria/foto-2.jpg',
  '/galeria/foto-3.jpg',
  '/galeria/foto-4.jpg',
  '/galeria/foto-5.jpg',
  '/galeria/foto-6.jpg',
]

export interface Apoiador {
  nome: string
  logo: string
}

export interface BlocoParceiros {
  titulo: string
  logos: Apoiador[]
}

// Parceiros por categoria — logos em /public/apoio/
export const PARCEIROS: BlocoParceiros[] = [
  {
    titulo: 'Apoio Institucional',
    logos: [
      { nome: 'Prefeitura de Manaus', logo: '/apoio/prefeitura-manaus.png' },
      { nome: 'Governo do Estado do Amazonas', logo: '/apoio/governo-amazonas.png' },
      { nome: 'Arquidiocese de Manaus', logo: '/apoio/arquidiocese-manaus.png' },
    ],
  },
  {
    titulo: 'Parceiros de Mídia',
    logos: [
      { nome: 'Rede Amazônica', logo: '/apoio/amazonica.png' },
      { nome: 'Rio Mar 103,5 FM', logo: '/apoio/riomar-fm.png' },
    ],
  },
]

export const FAIXAS_ETARIAS = [
  'Até 17 anos',
  '18 a 25 anos',
  '26 a 35 anos',
  '36 a 50 anos',
  'Acima de 50 anos',
]
