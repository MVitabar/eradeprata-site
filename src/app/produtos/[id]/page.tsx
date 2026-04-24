import { Metadata } from 'next'
import { getProduct } from '@/lib/database'
import ProductDetailClient from './ProductDetailClient'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  try {
    const { id } = await params
    const product = await getProduct(id)
    return {
      title: `${product.name} | Era de Prata - Merch`,
      description: product.description || `Descubra ${product.name} na coleção Era de Prata.`,
      openGraph: {
        title: product.name,
        description: product.description || '',
        images: product.image_url ? [product.image_url] : [],
      },
    }
  } catch {
    return {
      title: 'Produto | Era de Prata',
      description: 'Produto da coleção Era de Prata.',
    }
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  return <ProductDetailClient productId={id} />
}
