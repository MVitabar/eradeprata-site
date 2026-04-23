'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts } from '@/lib/database'
import Link from 'next/link'

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError('Erro ao carregar produtos')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) {
      return
    }

    try {
      // Implementar deleteProduct quando disponível
      // await deleteProduct(id)
      setProducts(products.filter(p => p.id !== id))
    } catch (err) {
      setError('Erro ao excluir produto')
      console.error(err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black">Carregando...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-silver-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            {product.image_url && (
              <div className="h-48 bg-silver-100 flex items-center justify-center">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-silver-600 text-sm mb-2">{product.category?.name || 'Sem categoria'}</p>
              <p className="font-typewriter text-black mb-4">
                {product.description ? product.description.substring(0, 100) + '...' : ''}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  R$ {product.price ? product.price.toFixed(2) : '0,00'}
                </span>
                <div className="space-x-2">
                  <Link 
                    href={`/produtos/${product.id}/editar`}
                    className="text-silver-600 hover:text-black transition"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-silver-600">Nenhum produto encontrado.</p>
          <Link 
            href="/produtos/novo" 
            className="inline-block mt-4 bg-black text-white px-6 py-2 rounded hover:bg-silver-800 transition"
          >
            Adicionar Primeiro Produto
          </Link>
        </div>
      )}
    </div>
  )
}
