import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import ContatoClient from './ContatoClient'

export const metadata: Metadata = {
  title: "Contato | Era de Prata - Conecte-se com o Artista",
  description: "Entre em contato com Era de Prata. Conecte-se com o artista, tire dúvidas sobre as obras, ou explore parcerias artísticas. Estamos aqui para dialogar sobre arte e filosofia.",
  keywords: ["era de prata", "contato", "artista", "diálogo", "arte", "filosofia", "suporte", "comunicação", "parceria", "obras"],
  openGraph: {
    title: "Contato | Era de Prata - Conecte-se com o Artista",
    description: "Entre em contato com Era de Prata. Conecte-se com o artista, tire dúvidas sobre as obras, ou explore parcerias artísticas.",
    url: "https://eradeprata.com/contato",
    type: "website",
  },
}

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-old-english text-4xl md:text-5xl text-center mb-12 text-black">
            Entre em Contato
          </h1>
          
          <ContatoClient />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
