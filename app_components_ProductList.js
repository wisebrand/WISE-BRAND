import ProductCard from './ProductCard'

const products = [
  { id: 1, name: 'Smartphone', price: 299.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Laptop', price: 999.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Headphones', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Smart Watch', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

