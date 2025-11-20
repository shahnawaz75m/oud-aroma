const collections = [
  {
    name: "Royal Reserve",
    description: "Our most exclusive collection featuring rare agarwood and precious oils",
    image: "/luxury-oud-collection-premium-bottles.jpg",
  },
  {
    name: "Heritage",
    description: "Traditional formulas inspired by Arabian classics",
    image: "/traditional-arabian-perfume-heritage.jpg",
  },
  {
    name: "Bakhoor Dreams",
    description: "Premium incense blends for your sacred spaces",
    image: "/premium-bakhoor-incense-wooden-bowl.jpg",
  },
  {
    name: "Seasonal",
    description: "Limited edition fragrances released quarterly",
    image: "/limited-edition-seasonal-perfume-luxury.jpg",
  },
  {
    name: "Lattafa Luxury",
    description: "Featuring the iconic Khamra Lattafa and premium signature blends",
    image: "/khamra-lattafa-luxury-collection-oud.jpg",
  },
  {
    name: "Oud Essentials",
    description: "Pure oud-based fragrances with exotic notes",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Collections() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">Explore Our Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {collections.map((collection, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-muted relative">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-lg font-playfair font-bold text-foreground mb-2">{collection.name}</h3>
                <p className="text-sm text-muted-foreground font-lora leading-relaxed">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
