import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get("x-razorpay-signature")
  
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex")

  if (signature !== expected) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const event = JSON.parse(body)
  
  if (event.event === "payment_link.paid" || event.event === "payment.captured") {
    // Lead already save ho chuka hai form submit pe
    // Yahan chahein toh DB update karo / email bhejo
    console.log("Payment successful:", event.payload)
  }

  return NextResponse.json({ received: true })
}