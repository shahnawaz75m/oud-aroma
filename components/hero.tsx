export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
          Experience the <span className="text-primary">Essence of Arabia</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-lora">
          Immerse yourself in the luxurious world of authentic Arabic perfumes and premium bakhoor, crafted from the
          finest natural ingredients and centuries-old traditions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-lora font-semibold hover:bg-primary/90 transition rounded">
            Explore Collections
          </button>
          <button className="px-8 py-3 border border-primary text-primary font-lora font-semibold hover:bg-primary/10 transition rounded">
            Learn Our Story
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
          <img src="/luxury-oud-perfume-bottle-on-dark-background.jpg" alt="Premium Arabic Perfume" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
