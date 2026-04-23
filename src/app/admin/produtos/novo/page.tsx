'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Category } from '@/types'
import { createProduct, getCategories } from '@/lib/database'
import ProductForm from '@/components/ProductForm'

export default function NewProduct() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (err) {
      setError('Erro ao carregar categorias')
      console.error(err)
    }
  }

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true)
      
      const productData = {
        name: data.name,
        description: data.description || undefined,
        price: parseFloat(data.price),
        category_id: data.category_id || undefined,
        stock: parseInt(data.stock),
        is_active: data.is_active,
        image_url: data.image_url || undefined
      }
      
      await createProduct(productData)
      router.push('/admin/produtos')
    } catch (err) {
      setError('Erro ao criar produto')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-old-english text-3xl">Novo Produto</h1>
              <Link 
                href="/admin/produtos"
                className="bg-silver-200 text-black px-4 py-2 hover:bg-silver-300 transition"
              >
                Voltar
              </Link>
            </div>
          
            <ProductForm
              categories={categories}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
              isEditing={false}
            />
          </div>
        </main>
      
        <Footer />
      </div>
    </AdminGuard>
  )
}
