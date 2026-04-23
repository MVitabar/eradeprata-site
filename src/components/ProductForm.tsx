'use client'

import { useState, useEffect } from 'react'
import { Category } from '@/types'
import Link from 'next/link'

interface ProductFormProps {
  initialData?: {
    name: string
    description: string
    price: string
    category_id: string
    stock: string
    is_active: boolean
    image_url: string
  }
  categories: Category[]
  onSubmit: (data: any) => Promise<void>
  loading: boolean
  error: string
  isEditing?: boolean
}

export default function ProductForm({ 
  initialData, 
  categories, 
  onSubmit, 
  loading, 
  error, 
  isEditing = false 
}: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    category_id: initialData?.category_id || '',
    stock: initialData?.stock || '0',
    is_active: initialData?.is_active !== undefined ? initialData.is_active : true,
    image_url: initialData?.image_url || ''
  })
  const [imagePreview, setImagePreview] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (initialData?.image_url) {
      setImagePreview(initialData.image_url)
    }
  }, [initialData?.image_url])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        setError('Por favor, selecione apenas arquivos de imagem (JPG, PNG, GIF, WebP)')
        return // O pai irá tratar o erro
      }

      // Validar tamanho (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('A imagem deve ter no máximo 5MB')
        return // O pai irá tratar o erro
      }

      setUploading(true)

      // Criar preview
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setImagePreview(result)
      }
      reader.readAsDataURL(file)

      // Aqui você implementaria o upload para um serviço como Cloudinary, AWS S3, etc.
      // Por enquanto, vamos simular o upload e converter em base64
      const reader2 = new FileReader()
      reader2.onload = (event) => {
        const base64 = event.target?.result as string
        setFormData(prev => ({ 
          ...prev, 
          image_url: base64 
        }))
        setUploading(false)
      }
      reader2.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview('')
    setFormData(prev => ({ ...prev, image_url: '' }))
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Imagem do Produto */}
      <div>
        <label htmlFor="image" className="block font-bold mb-2">
          Imagem do Produto *
        </label>
        <div className="space-y-4">
          {/* Preview da Imagem */}
          {imagePreview && (
            <div className="mb-4">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="h-32 w-32 object-cover rounded-lg border border-silver-300"
              />
              <button
                type="button"
                onClick={removeImage}
                className="ml-2 bg-red-600 text-white px-3 py-1 text-sm hover:bg-red-700 transition"
              >
                Remover
              </button>
            </div>
          )}

          {/* Upload da Imagem */}
          <div className="flex items-center space-x-4">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image"
              className="flex-1 bg-silver-100 border-2 border-dashed border-silver-300 rounded-lg px-4 py-8 text-center cursor-pointer hover:bg-silver-200 transition"
            >
              <div className="space-y-2">
                <svg className="mx-auto h-12 w-12 text-silver-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88 3.12A4 4 0 015.12 3.12L7 20a4 4 0 01.88-3.12A4 4 0 01-5.12-3.12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8v4a2 2 0 012-2v-4a2 2 0 01-2 2H6a2 2 0 01-2 2v4a2 2 0 012 2h10a2 2 0 012-2V8z" />
                </svg>
                <p className="text-sm text-silver-600">
                  {uploading ? 'Enviando...' : 'Clique para selecionar imagem'}
                </p>
                <p className="text-xs text-silver-500">
                  JPG, PNG, GIF, WebP (Máx: 5MB)
                </p>
              </div>
            </label>
          </div>

          {/* URL alternativa (opcional) */}
          <div className="mt-4">
            <label htmlFor="image_url" className="block font-bold mb-2 text-sm text-silver-600">
              O URL da Imagem (opcional)
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter text-sm"
              placeholder="https://exemplo.com/imagen.jpg"
            />
          </div>
        </div>
      </div>

      {/* Informação do Produto */}
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
          className="flex-1 bg-black text-white px-6 py-3 font-bold hover:bg-silver-800 transition disabled:opacity-50"
        >
          {loading ? 'Guardando...' : (isEditing ? 'Atualizar Produto' : 'Criar Produto')}
        </button>
        <Link
          href="/admin/produtos"
          className="bg-silver-200 text-black px-6 py-3 font-bold hover:bg-silver-300 transition"
        >
          Cancelar
        </Link>
      </div>
    </div>
  )
}
