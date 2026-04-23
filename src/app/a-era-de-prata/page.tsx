import Footer from '@/components/Footer'
import { Metadata } from 'next'
import EraDePrataClient from './EraDePrataClient'

export const metadata: Metadata = {
  title: "A Era de Prata | Conceito e Três Épocas Artísticas",
  description: "Conheça o conceito completo da Era de Prata. Explore as três épocas: Descoberta (Cruz), Transformação (Faca) e Eternidade (Coroa). Uma jornada filosófica materializada em arte abstrata.",
  keywords: ["era de prata", "conceito", "três épocas", "descoberta", "transformação", "eternidade", "cruz", "faca", "coroa", "arte abstrata", "filosofia"],
  openGraph: {
    title: "A Era de Prata | Conceito e Três Épocas Artísticas",
    description: "Conheça o conceito completo da Era de Prata. Explore as três épocas: Descoberta (Cruz), Transformação (Faca) e Eternidade (Coroa).",
    url: "https://eradeprata.com/a-era-de-prata",
    images: [
      {
        url: "https://eradeprata.com/IMGCONFONDO.PNG",
        width: 1200,
        height: 630,
        alt: "Era de Prata - Conceito Artístico",
      },
    ],
  },
}

export default function AEraDePrata() {
  return (
    <div className="min-h-screen bg-black">
      <EraDePrataClient />
      <Footer />
    </div>
  )
}
