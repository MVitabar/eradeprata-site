import { Metadata } from 'next'
import ProductsPageClient from './ProductsPageClient'

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
  return <ProductsPageClient />
}
