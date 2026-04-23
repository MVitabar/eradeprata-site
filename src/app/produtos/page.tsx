'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts } from '@/lib/database'

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError('Erro ao carregar produtos')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-old-english text-4xl md:text-5xl text-center mb-4 text-black">
            Nossos Produtos
          </h1>
          <p className="font-typewriter text-center text-silver-600 mb-12 max-w-2xl mx-auto">
            Descubra nossa coleção exclusiva de produtos premium, 
            selecionados com o maior cuidado para você
          </p>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="text-black">Carregando produtos...</div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-600">{error}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-silver-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="h-64 bg-silver-100 flex items-center justify-center">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-silver-400 text-6xl">♔</div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="font-typewriter text-silver-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-black">R$ {product.price.toFixed(2)}</span>
                      <button className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition">
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {products.length === 0 && !loading && !error && (
            <div className="text-center py-12 text-silver-600">
              Nenhum produto encontrado no momento.
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
