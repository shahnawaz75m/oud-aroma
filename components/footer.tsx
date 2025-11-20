import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-16 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4 text-primary">Oud Aroma</h3>
          <p className="text-muted-foreground font-lora text-sm leading-relaxed">
            Premium Arabic perfumes and bakhoor for the discerning connoisseur.
          </p>
        </div>

        <div>
          <h4 className="font-playfair font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-lora">
            <li>
              <Link href="#" className="hover:text-primary transition">
                Perfumes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Bakhoor
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Collections
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Sale
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-lora">
            <li>
              <Link href="#" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-lora">
            <li>
              <Link href="#" className="hover:text-primary transition">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition">
                Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground font-lora">
        <p>&copy; 2025 Oud Aroma. All rights reserved.</p>
      </div>
    </footer>
  )
}
