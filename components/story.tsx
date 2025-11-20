export default function Story() {
  return (
    <section id="story" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">A Legacy of Luxury</h2>

          <p className="text-lg text-muted-foreground font-lora leading-relaxed">
            Oud Aroma was born from a passion to preserve and elevate the ancient art of Arabic perfumery. Our founder
            spent years perfecting recipes passed down through generations, sourcing the rarest ingredients from across
            the Arabian Peninsula and beyond.
          </p>

          <p className="text-lg text-muted-foreground font-lora leading-relaxed">
            Every fragrance tells a story of tradition, craftsmanship, and the unmistakable essence of Arabia. We
            believe that luxury is not just about the product—it's about the experience and the heritage you carry with
            every spritz.
          </p>

          <div className="pt-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-lora font-semibold hover:bg-primary/90 transition rounded">
              Discover More
            </button>
          </div>
        </div>

        <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
          <img src="/arabian-marketplace-oud-traditional-craftsmanship.jpg" alt="Our Heritage" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
