"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react"
import { useCart } from "@/app/cart-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-playfair font-bold text-primary hover:opacity-80 transition">
          Oud Aroma
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#products" className="text-foreground hover:text-primary transition">
            Collections
          </Link>
          <Link href="/#story" className="text-foreground hover:text-primary transition">
            Our Story
          </Link>
          <Link href="/chat" className="text-foreground hover:text-primary transition">
            Support
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Cart & Chat Icons */}
        <div className="flex items-center gap-4">
          <Link href="/chat" className="p-2 hover:bg-secondary/20 rounded transition" title="Chat Support">
            <MessageCircle className="w-6 h-6 text-primary" />
          </Link>
          <Link href="/cart" className="relative p-2 hover:bg-secondary/20 rounded transition">
            <ShoppingBag className="w-6 h-6 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-background text-xs rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/#products" className="text-foreground hover:text-primary transition">
              Collections
            </Link>
            <Link href="/#story" className="text-foreground hover:text-primary transition">
              Our Story
            </Link>
            <Link href="/chat" className="text-foreground hover:text-primary transition">
              Support
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
