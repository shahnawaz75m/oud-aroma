"use client"

import { useCart } from "@/app/cart-context"
import { useState } from "react"

const jewelryItems = [
  {
    id: 201,
    name: "Gold Signet Ring",
    description: "Classic 24K gold signet ring with traditional engravings",
    price: "$299",
    image: "/gold-signet-ring-classic-arabian.jpg",
    category: "Jewelry",
  },
  {
    id: 202,
    name: "Pearl Bracelet",
    description: "Elegant pearl bracelet with gold accents",
    price: "$199",
    image: "/pearl-bracelet-elegant-luxury.jpg",
    category: "Jewelry",
  },
  {
    id: 203,
    name: "Diamond Ring",
    description: "Exquisite diamond ring with intricate detailing",
    price: "$449",
    image: "/diamond-ring-luxury-sparkle.jpg",
    category: "Jewelry",
  },
  {
    id: 204,
    name: "Bangle Set",
    description: "Set of ornate gold bangles with enamel work",
    price: "$279",
    image: "/gold-bangle-set-traditional.jpg",
    category: "Jewelry",
  },
  {
    id: 205,
    name: "Emerald Ring",
    description: "Stunning emerald ring set in white gold",
    price: "$399",
    image: "/emerald-ring-precious-stone.jpg",
    category: "Jewelry",
  },
  {
    id: 206,
    name: "Charm Bracelet",
    description: "Delicate charm bracelet with Arabic motifs",
    price: "$159",
    image: "/charm-bracelet-arabic-motifs.jpg",
    category: "Jewelry",
  },
]

export default function JewelryCollections() {
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
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">Rings & Bracelets</h2>
          <p className="text-lg text-muted-foreground font-lora">
            Luxurious jewelry collection with traditional Arabian craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jewelryItems.map((item) => (
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
