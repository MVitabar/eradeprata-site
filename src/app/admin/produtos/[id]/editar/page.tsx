'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Category, Product } from '@/types'
import { updateProduct, getCategories, getProduct } from '@/lib/database'

export default function EditProduct() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string
  
  const [categories, setCategories] = useState<Category[]>([])
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    stock: '0',
    is_active: true,
    image_url: ''
  })

  useEffect(() => {
    loadData()
  }, [productId])

  const loadData = async () => {
    try {
      const [productData, categoriesData] = await Promise.all([
        getProduct(productId),
        getCategories()
      ])
      
      setProduct(productData)
      setCategories(categoriesData)
      
      setFormData({
        name: productData.name,
        description: productData.description || '',
        price: productData.price.toString(),
        category_id: productData.category_id || '',
        stock: productData.stock.toString(),
        is_active: productData.is_active,
        image_url: productData.image_url || ''
      })
    } catch (err) {
      setError('Erro ao carregar dados')
      console.error(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.price) {
      setError('Preencha os campos obrigatórios')
      return
    }

    try {
      setLoading(true)
      
      const productData = {
        name: formData.name,
        description: formData.description || undefined,
        price: parseFloat(formData.price),
        category_id: formData.category_id || undefined,
        stock: parseInt(formData.stock),
        is_active: formData.is_active,
        image_url: formData.image_url || undefined
      }
      
      await updateProduct(productId, productData)
      router.push('/admin/produtos')
    } catch (err) {
      setError('Erro ao atualizar produto')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!product) {
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
            <h1 className="font-old-english text-3xl">Editar Produto</h1>
            <Link 
              href="/admin/produtos"
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
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                  placeholder="Nome do produto"
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
                  placeholder="Descrição detalhada do produto"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block font-bold mb-2">
                    Preço (R$) *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label htmlFor="stock" className="block font-bold mb-2">
                    Estoque
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="category_id" className="block font-bold mb-2">
                  Categoria
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="image_url" className="block font-bold mb-2">
                  URL da Imagem
                </label>
                <input
                  type="url"
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="is_active" className="font-bold">
                  Produto ativo
                </label>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition disabled:opacity-50"
                >
                  {loading ? 'Salvando...' : 'Atualizar Produto'}
                </button>
                <Link
                  href="/admin/produtos"
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
