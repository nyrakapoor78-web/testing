import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8149351093:AAG_TOJ6tkdvWCMOwzewMeWVK7rk73cNo5M"
const TELEGRAM_CHAT_ID = "8019496582"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Format message for Telegram
    const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || "Not provided"}

💬 *Message:*
${message}
    `.trim()

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    const data = await response.json()

    if (!data.ok) {
      throw new Error("Failed to send telegram message")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
