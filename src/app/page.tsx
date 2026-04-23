'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/CountdownTimer'
import Link from 'next/link'

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
                Merch
              </Link>
              <Link 
                href="/contato"
                className="border border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition"
              >
                Contato
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
