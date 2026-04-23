'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts, deleteProduct } from '@/lib/database'
import Link from 'next/link'

export default function AdminProductsClient() {
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

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return
    
    try {
      await deleteProduct(id)
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

  return (
    <div className="container mx-auto px-4">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Mobile View - Cards */}
      <div className="lg:hidden space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-silver-200 rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              {product.description && (
                <p className="text-sm text-silver-600 mt-1">
                  {product.description}
                </p>
              )}
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-silver-600">Categoria:</span>
                <span className="font-medium">{product.category?.name || 'Sem categoria'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-silver-600">Preço:</span>
                <span className="font-bold">R$ {product.price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-silver-600">Estoque:</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  product.stock > 20 ? 'bg-green-100 text-green-800' :
                  product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {product.stock} unidades
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-silver-600">Status:</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  product.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.is_active ? 'Ativo' : 'Inativo'}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2 pt-4 border-t border-silver-200">
              <Link
                href={`/admin/produtos/${product.id}/editar`}
                className="flex-1 bg-silver-200 text-black px-3 py-2 text-sm text-center hover:bg-silver-300 transition"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="flex-1 bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden lg:block">
        <div className="bg-white border border-silver-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-silver-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-sm">Nome</th>
                  <th className="px-4 py-3 text-left font-bold text-sm">Categoria</th>
                  <th className="px-4 py-3 text-left font-bold text-sm">Preço</th>
                  <th className="px-4 py-3 text-left font-bold text-sm">Estoque</th>
                  <th className="px-4 py-3 text-left font-bold text-sm">Status</th>
                  <th className="px-4 py-3 text-left font-bold text-sm">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-silver-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-silver-50">
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-bold">{product.name}</div>
                        {product.description && (
                          <div className="text-sm text-silver-600 truncate max-w-xs">
                            {product.description}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-silver-600 text-sm">
                      {product.category?.name || 'Sem categoria'}
                    </td>
                    <td className="px-4 py-4 font-bold text-sm">
                      R$ {product.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${
                        product.stock > 20 ? 'bg-green-100 text-green-800' :
                        product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${
                        product.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/produtos/${product.id}/editar`}
                          className="bg-silver-200 text-black px-3 py-1 text-sm hover:bg-silver-300 transition"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-600 text-white px-3 py-1 text-sm hover:bg-red-700 transition"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12 text-silver-600">
          Nenhum produto encontrado. 
          <Link href="/admin/produtos/novo" className="text-black underline ml-2">
            Criar primeiro produto
          </Link>
        </div>
      )}
    </div>
  )
}
