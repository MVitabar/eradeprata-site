export interface Category {
  id: string
  name: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  image_url?: string
  category_id?: string
  stock: number
  is_active: boolean
  created_at: string
  updated_at: string
  category?: Category
}
