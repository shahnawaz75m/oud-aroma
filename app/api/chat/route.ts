import { generateText } from "ai"

// Product database for context
const productDatabase = {
  perfumes: [
    { name: "Khamra Lattafa", price: 249, type: "premium oud" },
    { name: "Arabian Oud", price: 179, type: "traditional oud" },
    { name: "Royal Rose", price: 159, type: "rose fragrance" },
    { name: "Amber Luxury", price: 189, type: "amber fragrance" },
    { name: "Keffiyah", price: 189, type: "spiced fragrance" },
    { name: "Arabian Sleeper", price: 209, type: "evening fragrance" },
  ],
  garments: [
    { name: "Classic White Thobe", price: 89, type: "thobe" },
    { name: "Premium Thobe with Gold Embroidery", price: 149, type: "thobe" },
    { name: "Arabian Sleeper", price: 79, type: "sleeper" },
    { name: "Silk Premium Sleeper", price: 119, type: "sleeper" },
  ],
  jewelry: [
    { name: "Gold Signet Ring", price: 199, type: "ring" },
    { name: "Diamond Ring", price: 499, type: "ring" },
    { name: "Pearl Bracelet", price: 249, type: "bracelet" },
    { name: "Gold Bangle Set", price: 299, type: "bracelet" },
  ],
}

const systemPrompt = `You are a helpful customer service assistant for Oud Aroma, a luxury Arabic perfume and traditional garments store.

Available Products:
Perfumes: ${productDatabase.perfumes.map((p) => `${p.name} ($${p.price})`).join(", ")}
Garments: ${productDatabase.garments.map((g) => `${g.name} ($${g.price})`).join(", ")}
Jewelry: ${productDatabase.jewelry.map((j) => `${j.name} ($${j.price})`).join(", ")}

You should:
1. Help customers find products by recommending based on their preferences
2. Answer questions about product details, ingredients, and authenticity
3. Provide information about shipping, returns, and pricing
4. Offer styling advice for traditional garments
5. Suggest fragrance pairings
6. Redirect to the cart/checkout when appropriate
7. Be warm, professional, and knowledgeable about Arabian culture and luxury products

Keep responses concise and helpful.`

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      system: systemPrompt,
      prompt: message,
      temperature: 0.7,
      maxTokens: 200,
    })

    return Response.json({ reply: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}
