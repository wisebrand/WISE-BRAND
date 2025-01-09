import Link from 'nextlink'
import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Jumia Clone</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 rounded-full text-black"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="p-2 hover:bg-orange-600 rounded-full">
            <ShoppingCart size={24} />
          </button>
          <button className="p-2 hover:bg-orange-600 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

