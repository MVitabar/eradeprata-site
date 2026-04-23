import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AEraDePrata() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-black to-silver-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-old-english text-5xl md:text-6xl font-bold mb-8">
                O que é Era de Prata
              </h1>
              <p className="font-typewriter text-xl text-silver-300 max-w-3xl mx-auto mb-8">
                Uma composição artística abstrata que explora os ciclos da consciência humana
              </p>
            </div>
          </div>
        </section>

        {/* Definição Principal */}
        <section className="py-20 bg-gradient-to-b from-silver-900 to-white text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8 font-typewriter text-lg text-silver-200 leading-relaxed">
                <p>
                  Era de Prata é uma composição artística abstrata que explora os ciclos da consciência 
                  humana através de três momentos fundamentais: Descoberta, Transformação e Eternidade. 
                  Não é uma marca, mas uma jornada filosófica materializada em prata.
                </p>
                
                <p>
                  Cada obra representa um fragmento desta compreensão, onde a prata funciona como 
                  metáfora da alma humana - reflexiva, mutável, etérea e, ao mesmo tempo, concreta. 
                  A arte transcende o material para se tornar um diálogo entre criador, obra e observador.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                    <div className="text-3xl mb-3">🌅</div>
                    <h3 className="font-bold text-xl mb-2">Descoberta</h3>
                    <p className="text-sm text-silver-300">
                      O amanhecer da consciência, o primeiro brilho da compreensão
                    </p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                    <div className="text-3xl mb-3">🔄</div>
                    <h3 className="font-bold text-xl mb-2">Transformação</h3>
                    <p className="text-sm text-silver-300">
                      A metamorfose constante do ser, a alquimia da existência
                    </p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                    <div className="text-3xl mb-3">∞</div>
                    <h3 className="font-bold text-xl mb-2">Eternidade</h3>
                    <p className="text-sm text-silver-300">
                      A transcendência do tempo, a imortalidade da arte
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-silver-800 bg-opacity-20 rounded-lg border border-silver-600">
                  <p className="italic text-silver-300 text-lg">
                    "Era de Prata não é sobre o que você vê, mas sobre o que você descobre 
                    ao olhar. Cada peça é um espelho que reflete não apenas luz, 
                    mas a própria alma de quem contempla."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* As Três Épocas em Detalhe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-old-english text-4xl md:text-5xl text-center mb-16 text-black">
              As Três Épocas
            </h2>
            
            <div className="space-y-20">
              {/* Primeira Época */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="font-old-english text-3xl md:text-4xl font-bold mb-6 text-black">
                    Primeira Época
                    <span className="block text-2xl md:text-3xl text-silver-600 mt-2">A Descoberta</span>
                  </h3>
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
                </div>
                <div className="bg-gradient-to-br from-silver-200 to-silver-400 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🌅</div>
                    <p className="text-black font-bold">O Amanhecer da Consciência</p>
                  </div>
                </div>
              </div>

              {/* Segunda Época */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-gradient-to-br from-silver-300 to-silver-600 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔄</div>
                    <p className="text-white font-bold">A Alquimia da Existência</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-old-english text-3xl md:text-4xl font-bold mb-6 text-black">
                    Segunda Época
                    <span className="block text-2xl md:text-3xl text-silver-600 mt-2">A Transformação</span>
                  </h3>
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
                </div>
              </div>

              {/* Terceira Época */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="font-old-english text-3xl md:text-4xl font-bold mb-6 text-black">
                    Terceira Época
                    <span className="block text-2xl md:text-3xl text-silver-600 mt-2">A Eternidade</span>
                  </h3>
                  <div className="space-y-6 font-typewriter text-silver-700 leading-relaxed">
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
                    <p className="italic text-silver-600">
                      "Na eternidade da arte, descobrimos que a verdadeira imortalidade 
                      está na capacidade de tocar infinitas almas através do tempo."
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-silver-600 to-black rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">∞</div>
                    <p className="text-white font-bold">A Transcendência</p>
                  </div>
                </div>
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
                Explorar Obras
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
