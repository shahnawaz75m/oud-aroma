"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/app/cart-context"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Royal Oud",
    category: "Perfume",
    price: "$189",
    description: "Pure oud essence with hints of rose and amber",
    image: "/luxury-oud-perfume-bottle-elegant-gold.jpg",
  },
  {
    id: 2,
    name: "Musk Bakhoor",
    category: "Bakhoor",
    price: "$79",
    description: "Traditional bakhoor with Arabian musk blend",
    image: "/premium-bakhoor-incense-wooden-holder.jpg",
  },
  {
    id: 3,
    name: "Rose of Arabia",
    category: "Perfume",
    price: "$169",
    description: "Damascene rose with sandalwood base",
    image: "/rose-perfume-bottle-luxury-pink-gold.jpg",
  },
  {
    id: 4,
    name: "Amber Nights",
    category: "Perfume",
    price: "$199",
    description: "Deep amber with patchouli and agarwood",
    image: "/amber-perfume-dark-bottle-sophisticated.jpg",
  },
  {
    id: 5,
    name: "Khamra Lattafa",
    category: "Perfume",
    price: "$249",
    description: "Luxurious blend of oud, musk, and precious spices - a timeless classic",
    image: "/khamra-lattafa-premium-oud-perfume-luxury.jpg",
  },
  {
    id: 6,
    name: "Agarwood Elite",
    category: "Perfume",
    price: "$219",
    description: "Premium agarwood with vanilla and tonka bean notes",
    image: "/agarwood-oud-perfume-premium-elegant.jpg",
  },
  {
    id: 7,
    name: "Sandalwood Serene",
    category: "Perfume",
    price: "$159",
    description: "Creamy sandalwood with hints of jasmine and cedar",
    image: "/sandalwood-perfume-bottle-creamy-light.jpg",
  },
  {
    id: 8,
    name: "Arabian Musk Royal",
    category: "Bakhoor",
    price: "$89",
    description: "Premium bakhoor with pure Arabian musk and oud",
    image: "/arabian-musk-bakhoor-incense-premium.jpg",
  },
  {
    id: 9,
    name: "Spiced Harmony",
    category: "Perfume",
    price: "$179",
    description: "Exotic blend of clove, cardamom, and rose petals",
    image: "/spiced-exotic-perfume-bottle-arabian.jpg",
  },
  {
    id: 10,
    name: "Golden Incense",
    category: "Bakhoor",
    price: "$99",
    description: "Rich bakhoor blend with saffron and oud notes",
    image: "/golden-saffron-bakhoor-incense-luxury.jpg",
  },
  {
    id: 11,
    name: "Keffiyah",
    category: "Perfume",
    price: "$189",
    description: "Warm spiced blend with leather, tobacco, and precious woods",
    image: "/keffiyah-perfume-warm-spiced-arabianh.jpg",
  },
  {
    id: 12,
    name: "Arabian Sleeper",
    category: "Perfume",
    price: "$209",
    description: "Soothing evening blend with vanilla, musk, and soft amber notes",
    image: "/arabian-sleeper-perfume-soft-luxurious.jpg",
  },
]

export default function Products() {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<number[]>([])

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
    })

    setAddedItems([...addedItems, product.id])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== product.id))
    }, 2000)
  }

  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">Our Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Handpicked selections of the finest Arabic fragrances and aromatic experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="aspect-square bg-muted overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-playfair font-bold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 font-lora">{product.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-playfair font-bold text-primary">{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`p-2 rounded transition ${
                      addedItems.includes(product.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 hover:bg-primary/20 text-primary"
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
