"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-12 text-center border border-border">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">Join Our Circle</h2>

        <p className="text-lg text-muted-foreground mb-8 font-lora">
          Receive exclusive offers, new fragrance launches, and insights into the world of Arabian perfumery.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-lora"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground font-lora font-semibold hover:bg-primary/90 transition rounded whitespace-nowrap"
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  )
}
