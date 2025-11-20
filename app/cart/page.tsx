"use client"

import { useCart } from "@/app/cart-context"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-6 md:px-12 lg:px-24 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 font-lora">
              Add some premium fragrances or garments to get started
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-12">Shopping Cart</h1>

          <div className="space-y-6 mb-12">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-card border border-border rounded-lg hover:border-primary transition"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-playfair font-bold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <p className="text-lg font-playfair font-bold text-primary mt-2">{item.price}</p>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-destructive/10 text-destructive rounded transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 bg-secondary rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-secondary/80 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-secondary/80 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-playfair font-bold text-foreground">
                    ${(Number.parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
            <div className="flex-1">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-secondary text-foreground rounded hover:bg-secondary/80 transition"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="w-full md:w-80 p-6 bg-card border border-border rounded-lg">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-playfair font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${(cartTotal + 10 + cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-semibold"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
