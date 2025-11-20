"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to Oud Aroma Support! I can help you with product inquiries, orders, shipping, and more. What can I assist you with?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "I apologize, I could not process your request.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-primary mb-8">Contact Info</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Phone</p>
                  <p className="text-muted-foreground">+966 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <p className="text-muted-foreground">support@oudaroma.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-muted-foreground">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-playfair font-bold text-primary mb-4">Quick FAQs</h3>
              <div className="space-y-3 text-sm">
                <details className="group cursor-pointer">
                  <summary className="font-semibold text-foreground hover:text-primary">What is bakhoor?</summary>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Bakhoor is traditional Arabian incense made from wood chips, herbs, and essential oils.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="font-semibold text-foreground hover:text-primary">
                    How long do fragrances last?
                  </summary>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Our premium oud perfumes typically last 6-8 hours on skin.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="font-semibold text-foreground hover:text-primary">
                    Do you ship internationally?
                  </summary>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Yes, we ship worldwide with free shipping on orders over $100.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="font-semibold text-foreground hover:text-primary">
                    Are products 100% authentic?
                  </summary>
                  <p className="text-muted-foreground mt-2 text-xs">
                    All our products are 100% authentic and sourced directly from premium suppliers.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-2 bg-card rounded-lg border border-border shadow-lg overflow-hidden flex flex-col h-96 md:h-[600px]">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-6 font-playfair text-xl font-bold">
              Live Chat Support
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-3 rounded-lg ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground px-4 py-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 flex gap-2 bg-background">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-input text-foreground px-4 py-3 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-primary text-primary-foreground px-6 py-3 rounded hover:opacity-90 disabled:opacity-50 transition font-semibold flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
