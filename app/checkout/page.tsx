"use client"

import type React from "react"

import { useCart } from "@/app/cart-context"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"

export default function CheckoutPage() {
  const { cartTotal } = useCart()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Proceed to payment
    window.location.href = "/payment"
  }

  const total = cartTotal + 10 + cartTotal * 0.1

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-12">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h2 className="text-xl font-playfair font-bold text-foreground mb-6">Shipping Information</h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground mb-4"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground mb-4"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground mb-4"
                  />

                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/cart"
                    className="px-8 py-3 bg-secondary text-foreground rounded hover:bg-secondary/80 transition"
                  >
                    Back to Cart
                  </Link>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-semibold"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>

            <div className="md:col-span-1">
              <div className="p-6 bg-card border border-border rounded-lg sticky top-32">
                <h2 className="text-xl font-playfair font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 pb-6 border-b border-border">
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
                </div>

                <div className="pt-6 flex justify-between font-playfair font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
