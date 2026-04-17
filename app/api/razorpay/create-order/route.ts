import { NextResponse } from "next/server";

import {
  createRazorpayOrder,
  getCompanyLogoUrl,
  getDefaultServicePrice,
  getRazorpayCredentials,
  getRazorpayMode,
} from "@/lib/razorpay";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

function cleanText(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function buildReceipt() {
  return `physio_${Date.now()}`.slice(0, 40);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = cleanText(body.name);
    const email = cleanText(body.email).toLowerCase();
    const phone = cleanText(body.phone);
    const preferredSlot = cleanText(body.preferredSlot, "Next available");
    const currentConcern = cleanText(body.currentConcern);
    const serviceName = cleanText(body.serviceName, "Expert Virtual Physio Consultation");
    const requestedAmount = Number(body.amount);
    const amountInRupees =
      Number.isFinite(requestedAmount) && requestedAmount > 0 ? Math.round(requestedAmount) : getDefaultServicePrice();

    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter the customer's full name." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phonePattern.test(phone.replace(/\s+/g, ""))) {
      return NextResponse.json({ error: "Please enter a valid Indian mobile number." }, { status: 400 });
    }

    if (amountInRupees < 1 || amountInRupees > 250000) {
      return NextResponse.json({ error: "Amount must be between Rs 1 and Rs 2,50,000." }, { status: 400 });
    }

    const { keyId } = getRazorpayCredentials();
    const order = await createRazorpayOrder({
      amountInPaise: amountInRupees * 100,
      currency: "INR",
      receipt: buildReceipt(),
      notes: {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        service_name: serviceName,
        preferred_slot: preferredSlot,
        concern: currentConcern,
      },
    });

    return NextResponse.json({
      keyId,
      mode: getRazorpayMode(),
      orderId: order.id,
      amount: order.amount,
      amountInRupees,
      currency: order.currency,
      companyName: "Delhi Physio At Home",
      description: serviceName,
      image: getCompanyLogoUrl(),
      paymentMethods: ["UPI", "Card", "NetBanking", "Wallet"],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "We could not start the payment right now.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
