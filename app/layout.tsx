import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/app/cart-context"
import "./globals.css"
import ChatWidget from "@/components/chat-widget"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "Oud Aroma - Luxury Arabic Perfumes & Bakhoor",
  description:
    "Discover premium Arabic perfumes and bakhoor crafted from the finest natural ingredients. Experience the essence of Arabian luxury.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className={`font-lora antialiased`}>
        <CartProvider>
          {children}
          <ChatWidget />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
