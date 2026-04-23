'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function EraDePrataClient() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Hero Section com Fundo */}
        <section className="relative min-h-screen flex items-start justify-center pt-20
        ">
          <img 
            src="/IMGCONFONDO.PNG" 
            alt="Era de Prata - Fundo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
                    
          <div className="relative z-10 text-white px-4 max-w-5xl mx-auto mt-8">
            <div className="space-y-8">
              <div className="inline-block bg-black/60 px-4 py-2 rounded">
                <p className="font-typewriter text-4xl md:text-6xl text-center md:text-left text-shadow">
                  Uma sequencia de eventos.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded md:ml-12">
                <p className="font-typewriter text-3xl md:text-5xl text-center md:text-right text-shadow">
                  Fragmentos lançados no tempo.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded">
                <p className="font-typewriter text-2xl md:text-4xl text-center text-shadow">
                  Nada é isolado.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded md:ml-24">
                <p className="font-typewriter text-3xl md:text-5xl text-center md:text-left text-shadow">
                  Tudo responde a algo maior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primeira Época - A Cruz */}
        <section className="relative min-h-screen flex items-center justify-center bg-black">
          <div className="container mx-auto px-4">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              <img 
                src="/CRUZ.png" 
                alt="Cruz - Primeira Época" 
                className="w-full max-w-xs mx-auto object-contain"
              />
              <div className="text-white text-center">
                <h2 className="font-old-english text-3xl font-bold mb-4">
                  Primeira Época
                  <span className="block text-xl text-silver-400 mt-2">A Descoberta</span>
                </h2>
                <div className="space-y-4 font-typewriter text-silver-300 text-sm leading-relaxed">
                  <p>
                    Nos primórdios da criação, quando o tempo ainda não tinha forma e as cores 
                    dançavam no vácuo, surgiu a primeira manifestação. Um brilho fraco, quase 
                    imperceptível, que continha em si a promessa de todo o universo artístico 
                    que viria a existir.
                  </p>
                  <p>
                    Era o momento do reconhecimento, quando o artista compreendeu que cada 
                    traço, cada sombra, cada reflexo na superfície prateada continha uma 
                    história esperando para ser contada. A descoberta não foi apenas visual, 
                    mas existencial - a compreensão de que a arte transcende o material.
                  </p>
                  <p className="italic text-silver-400 text-xs">
                    "Na primeira época, aprendi que a verdade não está na superfície, 
                    mas na forma como a luz dança sobre ela."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="font-old-english text-5xl font-bold mb-6">
                  Primeira Época
                  <span className="block text-3xl text-silver-400 mt-2">A Descoberta</span>
                </h2>
                <div className="space-y-6 font-typewriter text-silver-300 leading-relaxed">
                  <p>
                    Nos primórdios da criação, quando o tempo ainda não tinha forma e as cores 
                    dançavam no vácuo, surgiu a primeira manifestação. Um brilho fraco, quase 
                    imperceptível, que continha em si a promessa de todo o universo artístico 
                    que viria a existir.
                  </p>
                  <p>
                    Era o momento do reconhecimento, quando o artista compreendeu que cada 
                    traço, cada sombra, cada reflexo na superfície prateada continha uma 
                    história esperando para ser contada. A descoberta não foi apenas visual, 
                    mas existencial - a compreensão de que a arte transcende o material.
                  </p>
                  <p className="italic text-silver-400">
                    "Na primeira época, aprendi que a verdade não está na superfície, 
                    mas na forma como a luz dança sobre ela."
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/CRUZ.png" 
                  alt="Cruz - Primeira Época" 
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Segunda Época - A Faca */}
        <section className="relative min-h-screen flex items-center justify-center bg-black">
          <div className="container mx-auto px-4">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              <img 
                src="/FACA.png" 
                alt="Faca - Segunda Época" 
                className="w-full max-w-xs mx-auto object-contain"
              />
              <div className="text-white text-center">
                <h2 className="font-old-english text-3xl font-bold mb-4">
                  Segunda Época
                  <span className="block text-xl text-silver-400 mt-2">A Transformação</span>
                </h2>
                <div className="space-y-4 font-typewriter text-silver-300 text-sm leading-relaxed">
                  <p>
                    Com a descoberta veio a metamorfose. O artista, agora possuidor do conhecimento 
                    primordial, começou a transformar o bruto em refinado, o caos em ordem, 
                    o silêncio em sinfonia. Cada pincelada era um ato de rebelião contra o vazio.
                  </p>
                  <p>
                    Na segunda época, a prata deixou de ser apenas material e tornou-se 
                    metáfora. Reflexo da alma humana em sua constante mutação, a obra 
                    adquiriu profundidade, camadas de significado que revelavam-se 
                    gradualmente àqueles que ousavam olhar além do óbvio.
                  </p>
                  <p className="italic text-silver-400 text-xs">
                    "Transformar não é mudar, é revelar o que sempre esteve lá, 
                    esperando o momento certo para emergir."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/FACA.png" 
                  alt="Faca - Segunda Época" 
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
              <div className="text-white">
                <h2 className="font-old-english text-5xl font-bold mb-6">
                  Segunda Época
                  <span className="block text-3xl text-silver-400 mt-2">A Transformação</span>
                </h2>
                <div className="space-y-6 font-typewriter text-silver-300 leading-relaxed">
                  <p>
                    Com a descoberta veio a metamorfose. O artista, agora possuidor do conhecimento 
                    primordial, começou a transformar o bruto em refinado, o caos em ordem, 
                    o silêncio em sinfonia. Cada pincelada era um ato de rebelião contra o vazio.
                  </p>
                  <p>
                    Na segunda época, a prata deixou de ser apenas material e tornou-se 
                    metáfora. Reflexo da alma humana em sua constante mutação, a obra 
                    adquiriu profundidade, camadas de significado que revelavam-se 
                    gradualmente àqueles que ousavam olhar além do óbvio.
                  </p>
                  <p className="italic text-silver-400">
                    "Transformar não é mudar, é revelar o que sempre esteve lá, 
                    esperando o momento certo para emergir."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terceira Época - A Coroa */}
        <section className="relative min-h-screen flex items-center justify-center bg-black">
          <div className="container mx-auto px-4">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              <img 
                src="/COROA.png" 
                alt="Coroa - Terceira Época" 
                className="w-full max-w-xs mx-auto object-contain"
              />
              <div className="text-white text-center">
                <h2 className="font-old-english text-3xl font-bold mb-4">
                  Terceira Época
                  <span className="block text-xl text-silver-400 mt-2">A Eternidade</span>
                </h2>
                <div className="space-y-4 font-typewriter text-silver-300 text-sm leading-relaxed">
                  <p>
                    Na culminação da jornada artística, o tempo dissolve-se e a obra transcende 
                    seu criador. A terceira época não é um fim, mas um começo - o momento 
                    em que a arte ad vida própria e passa a existir independentemente 
                    de sua origem.
                  </p>
                  <p>
                    A prata, agora polida por incontáveis camadas de significado, 
                    reflete não apenas a luz, mas a eternidade. Cada traço contém 
                    a soma das épocas anteriores, cada sombra guarda os segredos 
                    revelados e os mistérios ainda por desvendar.
                  </p>
                  <p className="italic text-silver-400 text-xs">
                    "Na eternidade da arte, descobrimos que a verdadeira imortalidade 
                    está na capacidade de tocar infinitas almas através do tempo."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="font-old-english text-5xl font-bold mb-6">
                  Terceira Época
                  <span className="block text-3xl text-silver-400 mt-2">A Eternidade</span>
                </h2>
                <div className="space-y-6 font-typewriter text-silver-300 leading-relaxed">
                  <p>
                    Na culminação da jornada artística, o tempo dissolve-se e a obra transcende 
                    seu criador. A terceira época não é um fim, mas um começo - o momento 
                    em que a arte ad vida própria e passa a existir independentemente 
                    de sua origem.
                  </p>
                  <p>
                    A prata, agora polida por incontáveis camadas de significado, 
                    reflete não apenas a luz, mas a eternidade. Cada traço contém 
                    a soma das épocas anteriores, cada sombra guarda os segredos 
                    revelados e os mistérios ainda por desvendar.
                  </p>
                  <p className="italic text-silver-400">
                    "Na eternidade da arte, descobrimos que a verdadeira imortalidade 
                    está na capacidade de tocar infinitas almas através do tempo."
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/COROA.png" 
                  alt="Coroa - Terceira Época" 
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="font-old-english text-4xl mb-8">
              Continue Sua Jornada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                href="/"
                className="bg-white text-black px-6 py-3 font-bold hover:bg-silver-200 transition"
              >
                Voltar ao Início
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
