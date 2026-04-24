'use client'

import Link from 'next/link'
import { Product } from '@/types'

interface ProductPreviewProps {
  products: Product[]
  loading?: boolean
  error?: string
}

const handleWhatsAppPurchase = (product: Product) => {
  const phoneNumber = '48996209954'
  const message = `Olá! Tenho interesse no produto: ${product.name}%0A%0A` +
    `📦 Produto: ${product.name}%0A` +
    `💰 Preço: R$ ${product.price ? product.price.toFixed(2) : '0,00'}%0A` +
    `📂 Categoria: ${product.category?.name || 'Sem categoria'}%0A` +
    `📦 Estoque: ${product.stock > 0 ? `${product.stock} unidades disponíveis` : 'Esgotado'}%0A%0A` +
    `Gostaria de mais informações sobre este produto!`
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

export default function ProductPreview({ products, loading, error }: ProductPreviewProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-silver-900 bg-opacity-20 rounded-lg p-6 animate-pulse">
            <div className="w-full h-48 bg-silver-800 rounded-lg mb-4"></div>
            <div className="h-4 bg-silver-700 rounded mb-2"></div>
            <div className="h-3 bg-silver-700 rounded mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="h-3 bg-silver-700 rounded w-20"></div>
              <div className="h-3 bg-silver-700 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-silver-400 py-8">
        <p className="font-typewriter">Não foi possível carregar os produtos. Tente novamente.</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-silver-400 py-8">
        <p className="font-typewriter">Nenhum produto disponível no momento.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products.slice(0, 6).map((product) => (
        <Link
          key={product.id}
          href={`/produtos/${product.id}`}
          className="group block bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm border border-silver-800 hover:border-silver-600 transition-all duration-300 hover:scale-105"
        >
          {/* Imagem do Produto */}
          <div className="relative h-48 overflow-hidden bg-silver-800">
            {product.image_url ? (
              <img 
                src={product.image_url} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-silver-600">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0l4.414 4.414a2 2 0 012.828 0l4.414-4.414a2 2 0 012.828 0l-4.414 4.414a2 2 0 01-2.828 0l-4.414-4.414a2 2 0 00-2.828 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-4h8" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Badge de Status */}
            {product.is_active && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Ativo
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="p-4">
            <h3 className="font-typewriter text-white text-lg font-bold mb-2 line-clamp-2 group-hover:text-silver-200 transition-colors">
              {product.name}
            </h3>
            
            {product.category && (
              <div className="mb-3">
                <span className="inline-block bg-silver-700 text-silver-200 text-xs px-2 py-1 rounded">
                  {product.category.name}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg">
                R$ {product.price.toFixed(2)}
              </span>
              
              {product.stock > 0 ? (
                <span className="text-silver-400 text-sm">
                  {product.stock} un.
                </span>
              ) : (
                <span className="text-red-400 text-sm">
                  Esgotado
                </span>
              )}
            </div>

            {/* Descrição Curta */}
            {product.description && (
              <p className="text-silver-300 text-sm mt-3 line-clamp-2">
                {product.description}
              </p>
            )}
            
            {/* Botão Ver Detalhes */}
            <div className="mt-4">
              <span className="inline-block bg-black text-white px-4 py-2 text-sm font-bold group-hover:bg-silver-800 transition">
                Ver Detalhes →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
