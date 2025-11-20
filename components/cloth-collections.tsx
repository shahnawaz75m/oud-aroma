"use client"

import { useCart } from "@/app/cart-context"
import { useState } from "react"

const clothItems = [
  {
    id: 101,
    name: "Classic Thobe",
    description: "Traditional white thobe with elegant embroidery",
    price: "$89",
    image: "/classic-white-thobe-traditional-arabian.jpg",
    category: "Garment",
  },
  {
    id: 102,
    name: "Premium Thobe",
    description: "Luxury embroidered thobe with gold threading",
    price: "$149",
    image: "/premium-thobe-gold-embroidery-luxury.jpg",
    category: "Garment",
  },
  {
    id: 103,
    name: "Arabian Sleeper",
    description: "Comfortable sleeper with traditional patterns",
    price: "$59",
    image: "/arabian-sleeper-comfortable-traditional.jpg",
    category: "Garment",
  },
  {
    id: 104,
    name: "Silk Sleeper",
    description: "Premium silk sleeper with delicate embellishments",
    price: "$89",
    image: "/silk-sleeper-premium-embroidered.jpg",
    category: "Garment",
  },
  {
    id: 105,
    name: "Formal Thobe",
    description: "Pristine white formal thobe for special occasions",
    price: "$179",
    image: "/formal-white-thobe-occasion-wear.jpg",
    category: "Garment",
  },
  {
    id: 106,
    name: "Casual Sleeper",
    description: "Relaxed fit sleeper perfect for everyday wear",
    price: "$49",
    image: "/casual-sleeper-everyday-wear.jpg",
    category: "Garment",
  },
]

export default function ClothCollections() {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<number[]>([])

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      category: item.category,
    })

    setAddedItems([...addedItems, item.id])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id))
    }, 2000)
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">Traditional Garments</h2>
          <p className="text-lg text-muted-foreground font-lora">Authentic Arabian clothing for every occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-xl transition cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-muted relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-lg font-playfair font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground font-lora mb-4 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-playfair font-bold text-primary">{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 rounded transition ${
                      addedItems.includes(item.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {addedItems.includes(item.id) ? "Added" : "Add to Cart"}
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
