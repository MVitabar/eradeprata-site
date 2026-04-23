'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import { useState, useEffect } from 'react'
import { Category } from '@/types'
import { getCategories, deleteCategory } from '@/lib/database'
import Link from 'next/link'

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      setLoading(true)
      const data = await getCategories()
      setCategories(data)
    } catch (err) {
      setError('Erro ao carregar categorias')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta categoria?')) return
    
    try {
      await deleteCategory(id)
      setCategories(categories.filter(c => c.id !== id))
    } catch (err) {
      setError('Erro ao excluir categoria')
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
            <h1 className="font-old-english text-3xl">Gerenciar Categorias</h1>
            <div className="space-x-4">
              <Link 
                href="/admin/categorias/nova"
                className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition"
              >
                Nova Categoria
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white border border-silver-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                {category.description && (
                  <p className="font-typewriter text-silver-600 mb-4">
                    {category.description}
                  </p>
                )}
                <div className="text-sm text-silver-500 mb-4">
                  Criada em: {new Date(category.created_at).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/categorias/${category.id}/editar`}
                    className="bg-silver-200 text-black px-3 py-1 text-sm hover:bg-silver-300 transition"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-600 text-white px-3 py-1 text-sm hover:bg-red-700 transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {categories.length === 0 && (
            <div className="text-center py-12 text-silver-600">
              Nenhuma categoria encontrada. 
              <Link href="/admin/categorias/nova" className="text-black underline ml-2">
                Criar primeira categoria
              </Link>
            </div>
          )}
        </div>
      </main>
      
        <Footer />
      </div>
    </AdminGuard>
  )
}
