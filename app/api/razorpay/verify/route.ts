import { NextResponse } from "next/server";

import { fetchRazorpayPayment, verifyPaymentSignature } from "@/lib/razorpay";

export const runtime = "nodejs";

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paymentId = cleanText(body.razorpay_payment_id);
    const orderId = cleanText(body.razorpay_order_id);
    const signature = cleanText(body.razorpay_signature);

    if (!paymentId || !orderId || !signature) {
      return NextResponse.json({ error: "Missing payment verification fields." }, { status: 400 });
    }

    const isValid = verifyPaymentSignature({ orderId, paymentId, signature });

    if (!isValid) {
      return NextResponse.json({ error: "Payment signature mismatch. Payment was not verified." }, { status: 400 });
    }

    try {
      const payment = await fetchRazorpayPayment(paymentId);
      const acceptableStatuses = new Set(["authorized", "captured"]);

      if (!acceptableStatuses.has(payment.status)) {
        return NextResponse.json(
          {
            error: `Payment verification failed because Razorpay returned status: ${payment.status}.`,
          },
          { status: 400 }
        );
      }

      return NextResponse.json({
        verified: true,
        paymentId,
        orderId,
        paymentStatus: payment.status,
        amount: payment.amount,
        currency: payment.currency,
      });
    } catch (error) {
      console.warn("Razorpay payment fetch skipped after signature verification:", error);

      return NextResponse.json({
        verified: true,
        paymentId,
        orderId,
        paymentStatus: "signature_verified",
      });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "We could not verify the payment.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
