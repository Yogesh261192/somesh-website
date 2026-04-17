import Razorpay from "razorpay"
import { NextResponse } from "next/server"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST() {
  const order = await razorpay.orders.create({
    amount: 39900, // paise mein
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  })
  return NextResponse.json(order)
}