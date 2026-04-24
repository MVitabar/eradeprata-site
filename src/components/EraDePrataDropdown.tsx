'use client'

import { useState } from 'react'

interface Epoca {
  id: string
  titulo: string
  subtitulo: string
  imagem: string
  conteudo: string[]
  citacao: string
  posicao: 'left' | 'right'
}

const epocas: Epoca[] = [
  {
    id: 'primeira',
    titulo: 'Primeira Época',
    subtitulo: 'A Descoberta',
    imagem: '/CRUZ.png',
    conteudo: [
      'Nos primórdios da criação, quando o tempo ainda não tinha forma e as cores dançavam no vácuo, surgiu a primeira manifestação. Um brilho fraco, quase imperceptível, que continha em si a promessa de todo o universo artístico que viria a existir.',
      'Era o momento do reconhecimento, quando o artista compreendeu que cada traço, cada sombra, cada reflexo na superfície prateada continha uma história esperando para ser contada. A descoberta não foi apenas visual, mas existencial - a compreensão de que a arte transcende o material.'
    ],
    citacao: '"Na primeira época, aprendi que a verdade não está na superfície, mas na forma como a luz dança sobre ela."',
    posicao: 'left'
  },
  {
    id: 'segunda',
    titulo: 'Segunda Época',
    subtitulo: 'A Transformação',
    imagem: '/FACA.png',
    conteudo: [
      'Com a descoberta veio a metamorfose. O artista, agora possuidor do conhecimento primordial, começou a transformar o bruto em refinado, o caos em ordem, o silêncio em sinfonia. Cada pincelada era um ato de rebelião contra o vazio.',
      'Na segunda época, a prata deixou de ser apenas material e tornou-se metáfora. Reflexo da alma humana em sua constante mutação, a obra adquiriu profundidade, camadas de significado que revelavam-se gradualmente àqueles que ousavam olhar além do óbvio.'
    ],
    citacao: '"Transformar não é mudar, é revelar o que sempre esteve lá, esperando o momento certo para emergir."',
    posicao: 'right'
  },
  {
    id: 'terceira',
    titulo: 'Terceira Época',
    subtitulo: 'A Eternidade',
    imagem: '/COROA.png',
    conteudo: [
      'Na culminação da jornada artística, o tempo dissolve-se e a obra transcende seu criador. A terceira época não é um fim, mas um começo - o momento em que a arte ad vida própria e passa a existir independentemente de sua origem.',
      'A prata, agora polida por incontáveis camadas de significado, reflete não apenas a luz, mas a eternidade. Cada traço contém a soma das épocas anteriores, cada sombra guarda os segredos revelados e os mistérios ainda por desvendar.'
    ],
    citacao: '"Na eternidade da arte, descobrimos que a verdadeira imortalidade está na capacidade de tocar infinitas almas através do tempo."',
    posicao: 'left'
  }
]

export default function EraDePrataDropdown() {
  const [epocaAberta, setEpocaAberta] = useState<string | null>(null)

  const toggleEpoca = (id: string) => {
    setEpocaAberta(epocaAberta === id ? null : id)
  }

  return (
    <section className="relative bg-black">
      {/* Hero Section com Fundo */}
        <div className="relative min-h-screen flex items-end justify-center pb-12 sm:pb-24 md:pb-48">
          <img 
            src="/IMGCONFONDO.PNG" 
            alt="Era de Prata - Fundo" 
            className="absolute inset-0 w-full h-full object-cover md:scale-75 md:origin-center"
          />
          
          {/* Degrade nos Laterais - Desktop Only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          
          {/* Degrade desde Abaixo - Mobile Only */}
          <div className="md:hidden absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
                  
          <div className="relative z-10 text-white px-4 max-w-5xl mx-auto mb-1 sm:mb-2 md:mb-4">
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <div className="inline-block bg-black/60 px-4 py-2 rounded">
                <p className="font-typewriter text-lg sm:text-xl md:text-4xl text-center md:text-left text-shadow">
                  Uma sequencia de eventos.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded md:ml-12">
                <p className="font-typewriter text-base sm:text-lg md:text-3xl text-center md:text-right text-shadow">
                  Fragmentos lançados no tempo.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded">
                <p className="font-typewriter text-sm sm:text-base md:text-2xl text-center text-shadow">
                  Nada é isolado.
                </p>
              </div>
              <div className="inline-block bg-black/60 px-4 py-2 rounded md:ml-24">
                <p className="font-typewriter text-base sm:text-lg md:text-3xl text-center md:text-left text-shadow">
                  Tudo responde a algo maior.
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* Épocas Dropdown */}
      <div className="space-y-8 py-16">
        {epocas.map((epoca) => (
          <div key={epoca.id} className="max-w-6xl mx-auto px-4">
            {/* Header do Dropdown */}
            <div 
              onClick={() => toggleEpoca(epoca.id)}
              className="cursor-pointer group"
            >
              <div className="flex items-center justify-between p-4 sm:p-6 bg-black bg-opacity-60 border border-silver-700 rounded-lg hover:bg-opacity-80 transition-all duration-300">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="relative overflow-hidden rounded-lg bg-silver-900 bg-opacity-20 p-2">
                    <img 
                      src={epoca.imagem} 
                      alt={`${epoca.titulo} - ${epoca.subtitulo}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-contain transition-all duration-700 ${
                        epocaAberta === epoca.id 
                          ? 'scale-0 opacity-0' 
                          : 'scale-100 opacity-90 group-hover:scale-105 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-old-english text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-silver-200 transition-colors">
                      {epoca.titulo}
                    </h2>
                    <p className="font-typewriter text-sm sm:text-base text-silver-300 group-hover:text-silver-200 transition-colors">
                      {epoca.subtitulo}
                    </p>
                  </div>
                </div>
                <div className="text-silver-300 group-hover:text-white transition-colors">
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                      epocaAberta === epoca.id ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Conteúdo do Dropdown */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
              epocaAberta === epoca.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-4 sm:p-6 lg:p-8 bg-black bg-opacity-50 border-t border-silver-800">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center transition-all duration-700 delay-300 ${
                  epocaAberta === epoca.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}>
                  {/* Texto */}
                  <div className={`${epoca.posicao === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-3 sm:space-y-4 font-typewriter leading-relaxed">
                      {epoca.conteudo.map((paragrafo, index) => (
                        <p key={index} className="text-white text-sm sm:text-base lg:text-lg">
                          {paragrafo}
                        </p>
                      ))}
                      <p className="italic text-silver-200 text-sm sm:text-base lg:text-lg">
                        {epoca.citacao}
                      </p>
                    </div>
                  </div>

                  {/* Imagem Animada - A mesma do header */}
                  <div className={`${epoca.posicao === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-lg bg-silver-900 bg-opacity-10 p-4">
                      <img 
                        src={epoca.imagem} 
                        alt={`${epoca.titulo} - ${epoca.subtitulo}`}
                        className={`w-full h-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto object-contain transition-all duration-1000 ${
                          epocaAberta === epoca.id 
                            ? 'scale-100 opacity-100' 
                            : 'scale-0 opacity-0'
                        }`}
                        style={{
                          transform: epocaAberta === epoca.id 
                            ? 'translateX(0) scale(1)' 
                            : 'translateX(-100px) scale(0.5)',
                          transformOrigin: epoca.posicao === 'right' ? 'left center' : 'right center'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
