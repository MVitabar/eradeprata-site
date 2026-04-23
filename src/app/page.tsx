import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section - Introdução ao Conceito */}
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-silver-900 to-black opacity-80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-old-english text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              Era de Prata
            </h1>
            <p className="font-typewriter text-lg md:text-xl mb-8 text-silver-300 leading-relaxed">
              Uma jornada artística através do tempo, onde cada fragmento conta uma história 
              e cada sombra revela uma verdade oculta. Três momentos, uma essência.
            </p>
            <div className="space-y-4">
              <p className="text-silver-400 italic">
                "Na prata, encontramos o reflexo da alma em sua forma mais pura"
              </p>
              <div className="space-x-4">
                <Link 
                  href="#primeira-epoca" 
                  className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-silver-200 transition"
                >
                  Começar Jornada
                </Link>
                <Link 
                  href="#artista" 
                  className="inline-block border border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition"
                >
                  Sobre o Artista
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        {/* Primeira Época - A Descoberta */}
        <section id="primeira-epoca" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-silver-50 to-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-old-english text-4xl md:text-5xl font-bold mb-8 text-black">
                  Primeira Época
                  <span className="block text-2xl md:text-3xl text-silver-600 mt-2">A Descoberta</span>
                </h2>
                <div className="space-y-6 font-typewriter text-silver-700 leading-relaxed">
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
                  <p className="italic text-silver-600">
                    "Na primeira época, aprendi que a verdade não está na superfície, 
                    mas na forma como a luz dança sobre ela."
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="#segunda-epoca"
                    className="inline-block bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition"
                  >
                    Continuar Jornada →
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-silver-200 to-silver-400 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🌅</div>
                      <p className="text-black font-bold">O Amanhecer da Consciência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segunda Época - A Transformação */}
        <section id="segunda-epoca" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-silver-100">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-old-english text-4xl md:text-5xl font-bold mb-8 text-black">
                  Segunda Época
                  <span className="block text-2xl md:text-3xl text-silver-600 mt-2">A Transformação</span>
                </h2>
                <div className="space-y-6 font-typewriter text-silver-700 leading-relaxed">
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
                  <p className="italic text-silver-600">
                    "Transformar não é mudar, é revelar o que sempre esteve lá, 
                    esperando o momento certo para emergir."
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="#terceira-epoca"
                    className="inline-block bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition"
                  >
                    Continuar Jornada →
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-silver-300 to-silver-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🔄</div>
                      <p className="text-white font-bold">A Alquimia da Existência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terceira Época - A Eternidade */}
        <section id="terceira-epoca" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-silver-100 to-black text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-old-english text-4xl md:text-5xl font-bold mb-8 text-white">
                  Terceira Época
                  <span className="block text-2xl md:text-3xl text-silver-300 mt-2">A Eternidade</span>
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
                <div className="mt-8 space-x-4">
                  <Link 
                    href="/produtos" 
                    className="inline-block bg-white text-black px-6 py-3 font-bold hover:bg-silver-200 transition"
                  >
                    Explorar a Obra
                  </Link>
                  <Link 
                    href="/contato"
                    className="inline-block border border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition"
                  >
                    Conectar com o Artista
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-silver-600 to-black rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">∞</div>
                      <p className="text-white font-bold">A Transcendência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Seção do Artista */}
        <section id="artista" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-old-english text-4xl md:text-5xl text-center mb-16 text-black">
                O Artista
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <div>
                  <h3 className="font-bold text-2xl mb-6">A Jornada Criativa</h3>
                  <div className="font-typewriter text-silver-600 space-y-4">
                    <p>
                      Era de Prata não é apenas um nome, mas a essência de uma jornada artística 
                      que transcende o tempo e o espaço. Nascida da necessidade de expressar 
                      o inexprimível, esta obra coletiva representa a busca constante pela 
                      verdade através da arte abstrata.
                    </p>
                    <p>
                      O artista por trás de Era de Prata encontrou na prata não apenas um material, 
                      mas uma metáfora para a existência humana - reflexiva, mutável, etérea 
                      e, ao mesmo tempo, concreta. Cada peça é um fragmento desta compreensão, 
                      um convite à contemplação profunda.
                    </p>
                  </div>
                </div>
                <div className="bg-silver-100 p-8 rounded-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-black font-bold">A Expressão Pura</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-silver-50 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-xl mb-3">Abstração como Linguagem</h3>
                  <p className="font-typewriter text-silver-600 text-sm">
                    A arte abstrata permite expressar emoções e conceitos 
                    que transcendem as limitações da representação literal.
                  </p>
                </div>
                <div className="bg-silver-50 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-xl mb-3">Prata como Metáfora</h3>
                  <p className="font-typewriter text-silver-600 text-sm">
                    O metal prateado simboliza reflexão, pureza e a capacidade 
                    de revelar verdades ocultas através da luz e sombra.
                  </p>
                </div>
                <div className="bg-silver-50 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-xl mb-3">Tempo como Co-criador</h3>
                  <p className="font-typewriter text-silver-600 text-sm">
                    Cada obra evolui com o tempo, adquirindo novas camadas 
                    de significado conforme o olhar do observador.
                  </p>
                </div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-lg mb-16">
                <h3 className="font-bold text-2xl mb-6 text-center">Filosofia Artística</h3>
                <div className="font-typewriter text-silver-300 space-y-4 text-center">
                  <p>
                    "Não busque significados em minhas obras. Encontre-se nelas. 
                    A verdadeira arte não está no que eu criei, mas no que você 
                    descobre ao contemplar."
                  </p>
                  <p className="italic text-silver-400">
                    A arte está na interação entre obra, artista e observador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Conexão */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="font-old-english text-4xl mb-8">
              A Jornada Continua
            </h2>
            <p className="font-typewriter text-xl mb-12 text-silver-300 max-w-3xl mx-auto">
              Era de Prata não é apenas uma coleção de obras, mas um convite à reflexão. 
              Cada peça carrega consigo as três épocas, transformando-se conforme o olhar 
              de quem a contempla. A arte está na interação, na descoberta, na transformação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="font-bold text-xl mb-2">Contemplar</h3>
                <p className="font-typewriter text-silver-400 text-sm">
                  Permita-se ver além do óbvio
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤔</div>
                <h3 className="font-bold text-xl mb-2">Refletir</h3>
                <p className="font-typewriter text-silver-400 text-sm">
                  Encontre seu próprio significado
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-xl mb-2">Transformar</h3>
                <p className="font-typewriter text-silver-400 text-sm">
                  Deixe a arte transformar você
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
