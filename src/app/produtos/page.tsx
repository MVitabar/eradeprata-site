import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: "Merch | Era de Prata - Obras e Produtos Artísticos",
  description: "Explore o merch da Era de Prata. Obras únicas e produtos artísticos que materializam as três épocas: Descoberta, Transformação e Eternidade. Arte abstrata em formato tangível.",
  keywords: ["era de prata", "merch", "produtos", "obras", "arte", "comprar", "loja", "arte abstrata", "três épocas", "descoberta", "transformação", "eternidade"],
  openGraph: {
    title: "Merch | Era de Prata - Obras e Produtos Artísticos",
    description: "Explore o merch da Era de Prata. Obras únicas e produtos artísticos que materializam as três épocas.",
    url: "https://eradeprata.com/produtos",
    type: "website",
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-old-english text-3xl md:text-4xl text-black">
              Produtos
            </h1>
            <Link 
              href="/produtos/novo"
              className="bg-black text-white px-4 py-2 rounded hover:bg-silver-800 transition"
            >
              Novo Produto
            </Link>
          </div>
          
          <ProductsClient />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
