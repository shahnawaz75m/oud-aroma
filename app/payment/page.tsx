"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { useCart } from "@/app/cart-context"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const { cartTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [processing, setProcessing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const total = cartTotal + 10 + cartTotal * 0.1

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setCompleted(true)
      clearCart()
    }, 2000)
  }

  if (completed) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-6 md:px-12 lg:px-24 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-24 h-24 text-primary" />
            </div>
            <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Payment Successful</h1>
            <p className="text-muted-foreground mb-4 font-lora">
              Thank you for your purchase! Your order has been confirmed.
            </p>
            <p className="text-lg font-playfair font-bold text-primary mb-8">Order Total: ${total.toFixed(2)}</p>
            <p className="text-muted-foreground mb-8 font-lora">
              A confirmation email has been sent to your email address with tracking information.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            >
              Return to Home
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
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-12">Payment</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="p-6 bg-card border border-border rounded-lg mb-6">
                <h2 className="text-xl font-playfair font-bold text-foreground mb-6">Payment Method</h2>

                <div className="space-y-4 mb-6">
                  {["card", "bank", "paypal"].map((method) => (
                    <label key={method} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-foreground capitalize font-semibold">
                        {method === "card" ? "Credit Card" : method === "bank" ? "Bank Transfer" : "PayPal"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {paymentMethod === "card" && (
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h3 className="text-lg font-playfair font-bold text-foreground mb-6">Card Information</h3>

                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder Name"
                      value={cardData.cardName}
                      onChange={handleCardChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground mb-4"
                    />

                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.cardNumber}
                      onChange={handleCardChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground mb-4"
                      maxLength="19"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        required
                        className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        required
                        className="px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                        maxLength="3"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/checkout"
                      className="px-8 py-3 bg-secondary text-foreground rounded hover:bg-secondary/80 transition"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      disabled={processing}
                      className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-semibold disabled:opacity-50"
                    >
                      {processing ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </form>
              )}

              {paymentMethod !== "card" && (
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="p-6 bg-card border border-border rounded-lg text-center">
                    <p className="text-foreground mb-6">
                      {paymentMethod === "bank"
                        ? "You will be redirected to your bank for secure payment processing."
                        : "You will be redirected to PayPal for secure payment processing."}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/checkout"
                      className="px-8 py-3 bg-secondary text-foreground rounded hover:bg-secondary/80 transition"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      disabled={processing}
                      className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-semibold disabled:opacity-50"
                    >
                      {processing ? "Processing..." : "Continue to " + (paymentMethod === "bank" ? "Bank" : "PayPal")}
                    </button>
                  </div>
                </form>
              )}
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
