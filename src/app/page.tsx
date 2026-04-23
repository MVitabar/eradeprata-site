import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/CountdownTimer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Era de Prata | Início - Jornada Artística Abstrata",
  description: "Bem-vindo à Era de Prata. Descubra uma jornada artística através das três épocas: Trinidad, a metamorfose e a chegada. Uma experiência visual e filosófica única.",
  keywords: ["era de prata", "arte abstrata", "trinidad", "jornada artística", "metafora", "filosofia", "prata", "contagem regressiva"],
  openGraph: {
    title: "Era de Prata | Início - Jornada Artística Abstrata",
    description: "Bem-vindo à Era de Prata. Descubra uma jornada artística através das três épocas: Trinidad, a metamorfose e a chegada.",
    url: "https://eradeprata.com",
    images: [
      {
        url: "https://eradeprata.com/TRINIDAD.PNG",
        width: 1200,
        height: 630,
        alt: "Trinidad - Era de Prata",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Três Imagens em Vertical */}
        <section className="relative min-h-screen flex flex-col justify-center bg-black p-4">
          <div className="w-full max-w-4xl mx-auto space-y-4">
            {/* Primeira Imagem - TRINIDAD */}
            <div className="relative">
              <img 
                src="/TRINIDAD.PNG" 
                alt="Trinidad - Era de Prata" 
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Segunda Imagem - AERADEPRATA */}
            <div className="relative">
              <img 
                src="/AERADEPRATA.PNG" 
                alt="A Era de Prata" 
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Terceira Imagem - LLEGANDO */}
            <div className="relative">
              <img 
                src="/LLEGANDO.PNG" 
                alt="Llegando - Chegada" 
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Texto Adicional */}
        <div className="relative z-20 text-center text-white px-4">
          <p className="font-typewriter text-4xl mb-4">
            Você não deveria estar aqui ainda...
          </p>
        </div>

        {/* Contador Regressivo */}
        <CountdownTimer />

        {/* Seção de Navegação */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="font-old-english text-4xl mb-8">
              Continue Sua Jornada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                href="/a-era-de-prata"
                className="bg-white text-black px-6 py-3 font-bold hover:bg-silver-200 transition"
              >
                O Conceito
              </Link>
              <Link 
                href="/produtos"
                className="bg-silver-600 text-white px-6 py-3 font-bold hover:bg-silver-700 transition"
              >
                Explorar Merch
              </Link>
              <Link 
                href="/contato"
                className="border border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition"
              >
                Conectar-se
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
