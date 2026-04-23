'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminGuard from '@/components/AdminGuard'
import Link from 'next/link'
import AdminCategoriesClient from './AdminCategoriesClient'

export default function AdminCategories() {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="font-old-english text-2xl sm:text-3xl">Gerenciar Categorias</h1>
              <div className="flex gap-2 sm:gap-4">
                <Link 
                  href="/admin/categorias/nova"
                  className="bg-black text-white px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-silver-800 transition"
                >
                  Nova Categoria
                </Link>
                <Link 
                  href="/admin"
                  className="bg-silver-200 text-black px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-silver-300 transition"
                >
                  Voltar
                </Link>
              </div>
            </div>

            <AdminCategoriesClient />
          </div>
        </main>
        
        <Footer />
      </div>
    </AdminGuard>
  )
}
