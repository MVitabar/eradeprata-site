'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Category, Product } from '@/types'
import { updateProduct, getCategories, getProduct } from '@/lib/database'
import ProductForm from '@/components/ProductForm'

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
        name: productData.name || '',
        description: productData.description || '',
        price: productData.price?.toString() || '',
        category_id: productData.category_id?.toString() || '',
        stock: productData.stock?.toString() || '0',
        is_active: productData.is_active ?? true,
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
          
            <ProductForm
              initialData={product}
              categories={categories}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
              isEditing={true}
            />
          </div>
        </main>
      
        <Footer />
      </div>
    </AdminGuard>
  )
}
