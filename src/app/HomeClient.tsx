'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts } from '@/lib/database'
import ProductPreview from '@/components/ProductPreview'
import CountdownTimer from '@/components/CountdownTimer'
import EraDePrataDropdown from '@/components/EraDePrataDropdown'

export default function HomeClient() {
  const [products, setProducts] = useState<Product[]>([])
  const [productsLoading, setProductsLoading] = useState(true)
  const [productsError, setProductsError] = useState('')

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setProductsLoading(true)
      setProductsError('')
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      console.error('Erro ao carregar produtos:', err)
      setProductsError('Não foi possível carregar os produtos')
    } finally {
      setProductsLoading(false)
    }
  }

  return (
    <>
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

      <EraDePrataDropdown />

      {/* Merch Section - Produtos com Preview */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-silver-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="font-old-english text-5xl md:text-6xl font-bold mb-8">
              Merch
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="font-typewriter text-xl md:text-2xl text-silver-300 leading-relaxed">
                Leve a Era de Prata com você. Cada peça é um fragmento 
                desta jornada artística, um reflexo da prata que dança com a luz.
              </p>
            </div>
            
            {/* Preview dos Produtos */}
            <div className="mb-12">
              <ProductPreview 
                products={products} 
                loading={productsLoading} 
                error={productsError} 
              />
            </div>
            
            <div className="mt-8">
              <a 
                href="/produtos"
                className="inline-block bg-white text-black px-8 py-4 font-bold hover:bg-silver-200 transition text-lg"
              >
                Ver Todos os Produtos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Desbloquear Memórias Section - Botão para Página Dedicada */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="font-old-english text-5xl md:text-6xl font-bold mb-8">
              Desbloquear Memórias
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="font-typewriter text-xl md:text-2xl text-silver-300 leading-relaxed">
                As melodias que despertam as memórias adormecidas. 
                Cada nota é uma chave que abre portas para outras épocas.
              </p>
              <p className="font-typewriter text-lg md:text-xl text-silver-400 leading-relaxed">
                Descubra "Alquimista" — a trilha sonora que transforma 
                o silêncio em revelação e o tempo em eternidade.
              </p>
              <div className="mt-12">
                <a 
                  href="/desbloquear-memorias"
                  className="inline-block bg-white text-black px-8 py-4 font-bold hover:bg-silver-200 transition text-lg"
                >
                  Ouvir Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final de Navegação */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-old-english text-4xl mb-8">
            Continue Sua Jornada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="/contato"
              className="border border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition"
            >
              Conectar-se
            </a>
            <a 
              href="/admin"
              className="bg-silver-600 text-white px-6 py-3 font-bold hover:bg-silver-700 transition"
            >
              Acesso Admin
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
