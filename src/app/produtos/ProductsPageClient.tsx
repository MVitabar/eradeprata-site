'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductsClient from './ProductsClient'
import { useAuth } from '@/hooks/useAuth'

export default function ProductsPageClient() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-old-english text-3xl md:text-4xl text-black">
              Produtos
            </h1>
            {isLoggedIn && (
              <Link 
                href="/produtos/novo"
                className="bg-black text-white px-4 py-2 rounded hover:bg-silver-800 transition"
              >
                Novo Produto
              </Link>
            )}
          </div>
          
          <ProductsClient />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
