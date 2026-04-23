'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Category } from '@/types'
import { updateCategory, getCategoryById } from '@/lib/database'

export default function EditCategory() {
  const router = useRouter()
  const params = useParams()
  const categoryId = params.id as string
  
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })

  useEffect(() => {
    loadCategory()
  }, [categoryId])

  const loadCategory = async () => {
    try {
      const categoryData = await getCategoryById(categoryId)
      setCategory(categoryData)
      
      setFormData({
        name: categoryData.name,
        description: categoryData.description || ''
      })
    } catch (err) {
      setError('Erro ao carregar categoria')
      console.error(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name) {
      setError('Preencha o nome da categoria')
      return
    }

    try {
      setLoading(true)
      
      await updateCategory(categoryId, {
        name: formData.name,
        description: formData.description || undefined
      })
      
      router.push('/admin/categorias')
    } catch (err) {
      setError('Erro ao atualizar categoria')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!category) {
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
            <h1 className="font-old-english text-3xl">Editar Categoria</h1>
            <Link 
              href="/admin/categorias"
              className="bg-silver-200 text-black px-4 py-2 hover:bg-silver-300 transition"
            >
              Voltar
            </Link>
          </div>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2">
                  Nome da Categoria *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                  placeholder="Nome da categoria"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block font-bold mb-2">
                  Descrição
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                  placeholder="Descrição da categoria (opcional)"
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition disabled:opacity-50"
                >
                  {loading ? 'Salvando...' : 'Atualizar Categoria'}
                </button>
                <Link
                  href="/admin/categorias"
                  className="bg-silver-200 text-black px-6 py-3 font-bold hover:bg-silver-300 transition"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      
        <Footer />
      </div>
    </AdminGuard>
  )
}
