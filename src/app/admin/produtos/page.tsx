'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts, deleteProduct } from '@/lib/database'
import Link from 'next/link'

export default function AdminProducts() {
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
    <AdminGuard>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-old-english text-3xl">Gerenciar Produtos</h1>
              <div className="space-x-4">
                <Link 
                  href="/admin/produtos/novo"
                  className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition"
                >
                  Novo Produto
                </Link>
                <Link 
                  href="/admin"
                  className="bg-silver-200 text-black px-4 py-2 hover:bg-silver-300 transition"
                >
                  Voltar
                </Link>
              </div>
            </div>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="bg-white border border-silver-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-silver-100">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">Nome</th>
                  <th className="px-6 py-3 text-left font-bold">Categoria</th>
                  <th className="px-6 py-3 text-left font-bold">Preço</th>
                  <th className="px-6 py-3 text-left font-bold">Estoque</th>
                  <th className="px-6 py-3 text-left font-bold">Status</th>
                  <th className="px-6 py-3 text-left font-bold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-silver-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-silver-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-bold">{product.name}</div>
                        {product.description && (
                          <div className="text-sm text-silver-600 truncate max-w-xs">
                            {product.description}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-silver-600">
                      {product.category?.name || 'Sem categoria'}
                    </td>
                    <td className="px-6 py-4 font-bold">
                      R$ {product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        product.stock > 20 ? 'bg-green-100 text-green-800' :
                        product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        product.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
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
            
            {products.length === 0 && (
              <div className="text-center py-12 text-silver-600">
                Nenhum produto encontrado. 
                <Link href="/admin/produtos/novo" className="text-black underline ml-2">
                  Criar primeiro produto
                </Link>
              </div>
            )}
          </div>
        </div>
        </main>
        
        <Footer />
      </div>
    </AdminGuard>
  )
}
