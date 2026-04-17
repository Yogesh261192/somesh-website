import { NextResponse } from "next/server";

import { getWebhookSecret, verifyWebhookSignature } from "@/lib/razorpay";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("x-razorpay-signature");
  const eventId = request.headers.get("x-razorpay-event-id");
  const payload = await request.text();
  const webhookSecret = getWebhookSecret();

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret is not configured. Add RAZORPAY_WEBHOOK_SECRET before enabling the webhook." },
      { status: 500 }
    );
  }

  if (!signature || !verifyWebhookSignature(payload, signature, webhookSecret)) {
    return NextResponse.json({ error: "Invalid Razorpay webhook signature." }, { status: 400 });
  }

  try {
    const body = JSON.parse(payload);
    const payment = body.payload?.payment?.entity;

    console.log("Razorpay webhook received", {
      event: body.event,
      eventId,
      paymentId: payment?.id,
      orderId: payment?.order_id,
      status: payment?.status,
    });
  } catch (error) {
    console.warn("Razorpay webhook JSON parse warning:", error);
  }

  return NextResponse.json({ received: true });
}
