'use client'

import { useState, useEffect } from 'react'
import { Category } from '@/types'
import { getCategories, deleteCategory } from '@/lib/database'
import Link from 'next/link'

export default function AdminCategoriesClient() {
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
    <div className="container mx-auto px-4">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Mobile View - Cards */}
      <div className="lg:hidden space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white border border-silver-200 rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg">{category.name}</h3>
              {category.description && (
                <p className="font-typewriter text-silver-600 text-sm mt-1">
                  {category.description}
                </p>
              )}
            </div>
            
            <div className="text-sm text-silver-500 mb-4">
              Criada em: {new Date(category.created_at).toLocaleDateString('pt-BR')}
            </div>
            
            <div className="flex gap-2 pt-4 border-t border-silver-200">
              <Link
                href={`/admin/categorias/${category.id}/editar`}
                className="flex-1 bg-silver-200 text-black px-3 py-2 text-sm text-center hover:bg-silver-300 transition"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
            <div className="flex gap-2">
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
  )
}
