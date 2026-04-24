import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import MusicCards from './MusicCards'

export const metadata: Metadata = {
  title: "Desbloquear Memórias | Era de Prata - Trilha Sonora",
  description: "Desbloqueie as memórias adormecidas através da música 'Alquimista'. Uma jornada sonora que abre portas para outras épocas da Era de Prata.",
  keywords: ["desbloquear memórias", "alquimista", "era de prata", "música", "spotify", "youtube", "trilha sonora"],
  openGraph: {
    title: "Desbloquear Memórias | Era de Prata",
    description: "Descubra a música 'Alquimista' e desbloqueie as memórias da Era de Prata.",
    url: "https://eradeprata.com/desbloquear-memorias",
    images: [
      {
        url: "https://eradeprata.com/TRINIDAD.PNG",
        width: 1200,
        height: 630,
        alt: "Desbloquear Memórias - Era de Prata",
      },
    ],
  },
}

export default function DesbloquearMemorias() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-black p-4">
          <div className="container mx-auto text-center px-4">
            <div className="space-y-8">
              <h1 className="font-old-english text-5xl md:text-7xl font-bold text-white">
                Desbloquear Memórias
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="font-typewriter text-xl md:text-2xl text-silver-300 leading-relaxed">
                  As melodias que despertam as memórias adormecidas. 
                  Cada nota é uma chave que abre portas para outras épocas.
                </p>
                <p className="font-typewriter text-lg md:text-xl text-silver-400 leading-relaxed">
                  Na Era de Prata, a música não é apenas som — é alquimia. 
                  Transforma o silêncio em revelação, o tempo em eternidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Músicas Section - Armadilha do Ego e Alquimista */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-silver-900">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="space-y-12">
                <h2 className="font-old-english text-4xl md:text-6xl font-bold">
                    Trilhas Sonoras
                </h2>
                
                <div className="max-w-2xl mx-auto space-y-6">
                  <p className="font-typewriter text-xl md:text-2xl text-silver-300 leading-relaxed">
                    As melodias que transformam o ordinário em extraordinário. 
                    Os sons que revelam a prata escondida na escuridão.
                  </p>
                  
                  <div className="font-typewriter text-lg text-silver-400 italic">
                    "Onde a música encontra a alquimia, as memórias despertam."
                  </div>
                </div>

                {/* Cards das Músicas */}
                <MusicCards />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Explicação */}
        <section className="relative min-h-screen flex items-center justify-center bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h3 className="font-old-english text-3xl md:text-4xl font-bold mb-6">
                    A Alquimia Musical
                  </h3>
                  <div className="space-y-4 font-typewriter text-silver-300 leading-relaxed">
                    <p>
                      Na Era de Prata, cada composição é uma fórmula alquímica. 
                      Os acordes são os elementos, a melodia é o processo, 
                      e a emoção é a transmutação.
                    </p>
                    <p>
                      "Alquimista" não é apenas uma música — é um convite. 
                      Um convite para transformar o chumbo do cotidiano 
                      no ouro da percepção.
                    </p>
                    <p className="italic text-silver-400">
                      "Quando a música encontra a alma, o tempo se dissolve 
                      e todas as épocas coexistem em um único instante."
                    </p>
                  </div>
                </div>
                
                <div className="text-white">
                  <h3 className="font-old-english text-3xl md:text-4xl font-bold mb-6">
                    Despertando Memórias
                  </h3>
                  <div className="space-y-4 font-typewriter text-silver-300 leading-relaxed">
                    <p>
                      Cada nota de "Alquimista" foi cuidadosamente composta 
                      para ativar centros específicos da memória. 
                      Frequências que ressoam com experiências passadas 
                      e futuras simultaneamente.
                    </p>
                    <p>
                      Ao ouvir, permita-se viajar pelas três épocas: 
                      Trinidad (a descoberta), a metamorfose (a transformação), 
                      e a chegada (a transcendência).
                    </p>
                    <p className="italic text-silver-400">
                      "A música é a única linguagem que fala diretamente 
                      com a alma sem necessidade de tradução."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Final */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto text-center px-4">
            <div className="space-y-8">
              <h3 className="font-old-english text-4xl font-bold">
                Continue Sua Jornada
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Link 
                  href="/"
                  className="bg-white text-black px-6 py-3 font-bold hover:bg-silver-200 transition"
                >
                  Voltar ao Início
                </Link>
                <Link 
                  href="/a-era-de-prata"
                  className="bg-silver-600 text-white px-6 py-3 font-bold hover:bg-silver-700 transition"
                >
                  Era de Prata
                </Link>
                <Link 
                  href="/produtos"
                  className="border border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition"
                >
                  Merch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
