import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-old-english text-4xl md:text-5xl text-center mb-12 text-black">
            O Artista
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="font-bold text-2xl mb-6">A Jornada Criativa</h2>
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
                <p>
                  Através das três épocas - Descoberta, Transformação e Eternidade - 
                  o criador explora os ciclos da consciência humana, da percepção 
                  e da transcendência, utilizando a prata como espelho da alma.
                </p>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="font-bold text-2xl mb-6">O Conceito</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-silver-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Abstração como Linguagem</h3>
                  <p className="font-typewriter text-silver-600">
                    A arte abstrata permite expressar emoções e conceitos 
                    que transcendem as limitações da representação literal.
                  </p>
                </div>
                <div className="bg-silver-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Prata como Metáfora</h3>
                  <p className="font-typewriter text-silver-600">
                    O metal prateado simboliza reflexão, pureza e a capacidade 
                    de revelar verdades ocultas através da luz e sombra.
                  </p>
                </div>
                <div className="bg-silver-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Tempo como Co-criador</h3>
                  <p className="font-typewriter text-silver-600">
                    Cada obra evolui com o tempo, adquirindo novas camadas 
                    de significado conforme o olhar do observador.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="font-bold text-2xl mb-6">Filosofia Artística</h2>
              <div className="font-typewriter text-silver-600 space-y-4">
                <p>
                  A filosofia por trás de Era de Prata baseia-se na premissa de que 
                  a verdadeira arte não reside no objeto final, mas na interação 
                  entre a obra, o artista e o observador. Cada peça é um diálogo 
                  aberto, uma pergunta sem resposta definitiva.
                </p>
                <p>
                  O artista acredita que a arte abstrata tem o poder de conectar 
                  as pessoas com suas emoções mais profundas, revelando aspectos 
                  de si mesmas que permanecem ocultos no cotidiano. A prata, com 
                  sua capacidade de refletir e distorcer simultaneamente, torna-se 
                  o veículo perfeito para esta exploração.
                </p>
                <p className="italic text-silver-500">
                  "Não busque significados em minhas obras. Encontre-se nelas. 
                  A verdadeira arte não está no que eu criei, mas no que você 
                  descobre ao contemplar."
                </p>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="font-bold text-2xl mb-6">O Processo Criativo</h2>
              <div className="bg-black text-white p-8 rounded-lg">
                <div className="space-y-6 font-typewriter">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-silver-300">1. A Inspiração</h3>
                    <p className="text-silver-400">
                      Cada obra começa com um momento de clareza, um vislumbre 
                      de uma verdade que pede para ser expressa.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-silver-300">2. A Materialização</h3>
                    <p className="text-silver-400">
                      A abstração toma forma através da manipulação da prata, 
                      onde cada gesto é intencional e cada acidente, revelador.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-silver-300">3. A Transformação</h3>
                    <p className="text-silver-400">
                      A obra adquire vida própria, transcendendo a intenção 
                      original e tornando-se uma entidade independente.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-silver-300">4. A Revelação</h3>
                    <p className="text-silver-400">
                      No encontro com o observador, a obra completa seu ciclo, 
                      revelando novos significados e possibilidades infinitas.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="text-center">
              <h2 className="font-bold text-2xl mb-6">Conecte-se com a Obra</h2>
              <p className="font-typewriter text-silver-600 mb-8">
                Era de Prata é um convite aberto a todos que buscam mais do que 
                o visível, que ousam questionar e que encontram na arte 
                    um espelho para sua própria alma.
              </p>
              <div className="space-x-4">
                <a 
                  href="/produtos"
                  className="inline-block bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition"
                >
                  Explorar as Obras
                </a>
                <a 
                  href="/contato"
                  className="inline-block border border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition"
                >
                  Dialogar com o Artista
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
