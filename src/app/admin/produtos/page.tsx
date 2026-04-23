'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import AdminProductsClient from './AdminProductsClient'
import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { getProducts, deleteProduct } from '@/lib/database'

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="font-old-english text-2xl sm:text-3xl">Gerenciar Produtos</h1>
              <div className="flex gap-2 sm:gap-4">
                <Link 
                  href="/admin/produtos/novo"
                  className="bg-black text-white px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-silver-800 transition"
                >
                  Novo Produto
                </Link>
                <Link 
                  href="/admin"
                  className="bg-silver-200 text-black px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-silver-300 transition"
                >
                  Voltar
                </Link>
              </div>
            </div>

            <AdminProductsClient />
          </div>
        </main>
        
        <Footer />
      </div>
    </AdminGuard>
  )
}
