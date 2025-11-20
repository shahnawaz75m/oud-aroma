import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Story from "@/components/story"
import Collections from "@/components/collections"
import ClothCollections from "@/components/cloth-collections"
import JewelryCollections from "@/components/jewelry-collections"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Products />
      <Story />
      <Collections />
      <ClothCollections />
      <JewelryCollections />
      <Newsletter />
      <Footer />
    </main>
  )
}
