import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Armadilha do Ego */}
                  <div className="bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm border border-silver-700">
                    <div className="aspect-video relative">
                      <img 
                        src="https://i.scdn.co/image/ab67616d0000b27361e0c8c8c4b7b1b8a6e8d1e8"
                        alt="Armadilha do Ego - Spotify"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="font-old-english text-2xl md:text-3xl font-bold mb-2">
                            "Armadilha do Ego"
                          </h3>
                          <p className="font-typewriter text-sm text-silver-300">
                            A jornada para além do eu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-typewriter text-silver-300 mb-4">
                        A melodia que dissolve as barreiras do ego, revelando a essência pura da existência.
                      </p>
                      <a 
                        href="https://open.spotify.com/intl-pt/album/6Y9KUDWPa81PZt0fFBt2J4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 font-bold hover:bg-green-700 transition w-full rounded-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Ouvir Agora
                      </a>
                    </div>
                  </div>

                  {/* Alquimista */}
                  <div className="bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm border border-silver-700">
                    <div className="aspect-video relative">
                      <img 
                        src="https://img.youtube.com/vi/j2dHQ-wj96Q/maxresdefault.jpg"
                        alt="Alquimista - YouTube"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="font-old-english text-2xl md:text-3xl font-bold mb-2">
                            "Alquimista"
                          </h3>
                          <p className="font-typewriter text-sm text-silver-300">
                            A transformação através do som
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-typewriter text-silver-300 mb-4">
                        A trilha sonora que transforma o silêncio em revelação e o tempo em eternidade.
                      </p>
                      <a 
                        href="https://youtu.be/j2dHQ-wj96Q?si=qpicZV-xMrBlKj5e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700 transition w-full rounded-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Ouvir Agora
                      </a>
                    </div>
                  </div>
                </div>
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
