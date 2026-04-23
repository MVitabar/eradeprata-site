import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminClient from './AdminClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Admin | Era de Prata - Área Administrativa",
  description: "Área administrativa do Era de Prata. Gerencie produtos, categorias e conteúdo. Acesso restrito para administradores.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function Admin() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <AdminClient />
      <Footer />
    </div>
  )
}
