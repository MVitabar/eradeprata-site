'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Product } from '@/types'
import { getProduct } from '@/lib/database'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

interface ProductDetailClientProps {
  productId: string
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    loadProduct()
  }, [productId])

  const loadProduct = async () => {
    try {
      setLoading(true)
      setError('')
      
      if (!productId) {
        throw new Error('ID do produto não fornecido')
      }
      
      console.log('Carregando produto com ID:', productId, 'Tipo:', typeof productId)
      const data = await getProduct(productId)
      console.log('Produto carregado:', data)
      setProduct(data)
    } catch (err: any) {
      console.error('Erro ao carregar produto:', err)
      console.error('Detalhes do erro:', err?.message, err?.code, err?.details)
      setError(`Produto não encontrado: ${err?.message || 'Erro desconhecido'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppPurchase = () => {
    if (!product) return
    
    const phoneNumber = '48996209954'
    const totalPrice = (product.price * quantity).toFixed(2)
    const message = `Olá! Tenho interesse no produto: ${product.name}%0A%0A` +
      `📦 Produto: ${product.name}%0A` +
      `💰 Preço unitário: R$ ${product.price.toFixed(2)}%0A` +
      `📊 Quantidade: ${quantity}%0A` +
      `💰 Total: R$ ${totalPrice}%0A` +
      `📂 Categoria: ${product.category?.name || 'Sem categoria'}%0A` +
      `📦 Estoque disponível: ${product.stock} unidades%0A%0A` +
      `Gostaria de finalizar a compra!`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-typewriter">Carregando produto...</div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-white">
              <h1 className="font-old-english text-4xl mb-4">Produto não encontrado</h1>
              <p className="font-typewriter text-silver-300 mb-8">{error || 'O produto que você procura não está disponível.'}</p>
              <Link 
                href="/produtos"
                className="inline-block bg-white text-black px-6 py-3 font-bold hover:bg-silver-200 transition"
              >
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/produtos"
              className="text-silver-400 hover:text-white transition font-typewriter"
            >
              ← Voltar aos Produtos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Imagem do Produto */}
            <div className="relative">
              {product.image_url ? (
                <div className="bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              ) : (
                <div className="bg-silver-900 bg-opacity-20 rounded-lg h-[400px] flex items-center justify-center">
                  <div className="text-silver-600">
                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0l4.414 4.414a2 2 0 012.828 0l4.414-4.414a2 2 0 012.828 0l-4.414 4.414a2 2 0 01-2.828 0l-4.414-4.414a2 2 0 00-2.828 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 8v8m-4-4h8" />
                    </svg>
                  </div>
                </div>
              )}
              
              {product.is_active && (
                <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                  Disponível
                </div>
              )}
            </div>

            {/* Informações do Produto */}
            <div className="text-white">
              {/* Categoria */}
              {product.category && (
                <div className="mb-4">
                  <span className="inline-block bg-silver-700 text-silver-200 text-sm px-3 py-1 rounded">
                    {product.category.name}
                  </span>
                </div>
              )}

              {/* Nome */}
              <h1 className="font-old-english text-4xl md:text-5xl mb-4">
                {product.name}
              </h1>

              {/* Preço */}
              <div className="mb-6">
                <span className="text-3xl font-bold">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.stock > 0 ? (
                  <span className="text-green-400 ml-4">
                    {product.stock} unidades em estoque
                  </span>
                ) : (
                  <span className="text-red-400 ml-4">
                    Esgotado
                  </span>
                )}
              </div>

              {/* Descrição */}
              {product.description && (
                <div className="mb-8">
                  <h2 className="font-typewriter text-silver-300 text-lg mb-2">Descrição</h2>
                  <p className="font-typewriter text-silver-200 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Admin Options */}
              {isLoggedIn ? (
                <div className="flex space-x-4">
                  <Link 
                    href={`/produtos/${product.id}/editar`}
                    className="bg-silver-700 text-white px-6 py-3 font-bold hover:bg-silver-600 transition"
                  >
                    Editar Produto
                  </Link>
                </div>
              ) : (
                <>
                  {/* Quantidade Selector */}
                  {product.stock > 0 && (
                    <div className="mb-6">
                      <h2 className="font-typewriter text-silver-300 text-lg mb-3">Quantidade</h2>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                          className="bg-silver-700 text-white w-10 h-10 rounded font-bold hover:bg-silver-600 transition disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          disabled={quantity >= product.stock}
                          className="bg-silver-700 text-white w-10 h-10 rounded font-bold hover:bg-silver-600 transition disabled:opacity-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Botão Comprar */}
                  <button
                    onClick={handleWhatsAppPurchase}
                    disabled={product.stock === 0}
                    className={`w-full md:w-auto px-8 py-4 font-bold text-lg transition ${
                      product.stock === 0 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-silver-200'
                    }`}
                  >
                    {product.stock === 0 ? 'Esgotado' : 'Comprar'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
