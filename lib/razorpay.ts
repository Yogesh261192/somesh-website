import crypto from "node:crypto";

type PaymentMode = "live" | "test";

type RazorpayOrderPayload = {
  amountInPaise: number;
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
};

type RazorpayOrderResponse = {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
};

type RazorpayPaymentResponse = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  order_id: string;
};

function readEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  return "";
}

function getBasicAuthHeader() {
  const { keyId, keySecret } = getRazorpayCredentials();
  const token = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  return `Basic ${token}`;
}

async function parseJsonSafely(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function sanitizeValue(value: string, maxLength = 200) {
  return value.trim().slice(0, maxLength);
}

export function getRazorpayCredentials() {
  const keyId = readEnv("RAZORPAY_KEY_ID", "YOUR_RAZORPAY_KEY_ID", "NEXT_PUBLIC_RAZORPAY_KEY_ID");
  const keySecret = readEnv("RAZORPAY_KEY_SECRET", "YOUR_RAZORPAY_KEY_SECRET");

  if (!keyId) {
    throw new Error("Razorpay Key ID is missing. Add RAZORPAY_KEY_ID or YOUR_RAZORPAY_KEY_ID to your environment.");
  }

  if (!keySecret) {
    throw new Error("Razorpay Key Secret is missing. Add RAZORPAY_KEY_SECRET or YOUR_RAZORPAY_KEY_SECRET to your environment.");
  }

  return { keyId, keySecret };
}

export function getRazorpayMode(): PaymentMode {
  const keyId = readEnv("RAZORPAY_KEY_ID", "YOUR_RAZORPAY_KEY_ID", "NEXT_PUBLIC_RAZORPAY_KEY_ID");

  return keyId.startsWith("rzp_live_") ? "live" : "test";
}

export function getDefaultServicePrice() {
  const value = Number(readEnv("SERVICE_PRICE", "VIRTUAL_CONSULTATION_PRICE"));

  if (!Number.isFinite(value) || value <= 0) {
    return 399;
  }

  return Math.round(value);
}

export function getCompanyLogoUrl() {
  return readEnv("COMPANY_LOGO_URL") || "/assets/logo.webp";
}

export function getWebhookSecret() {
  return readEnv("RAZORPAY_WEBHOOK_SECRET");
}

export async function createRazorpayOrder({ amountInPaise, currency = "INR", receipt, notes = {} }: RazorpayOrderPayload) {
  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: getBasicAuthHeader(),
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      amount: amountInPaise,
      currency,
      receipt,
      notes: Object.fromEntries(
        Object.entries(notes)
          .filter(([, value]) => value.trim().length > 0)
          .map(([key, value]) => [key, sanitizeValue(value)])
      ),
    }),
  });

  const data = (await parseJsonSafely(response)) as { error?: { description?: string } } | RazorpayOrderResponse | null;

  if (!response.ok || !data || !("id" in data)) {
    const message = data && "error" in data ? data.error?.description : "Unable to create the Razorpay order.";
    throw new Error(message || "Unable to create the Razorpay order.");
  }

  return data;
}

export async function fetchRazorpayPayment(paymentId: string) {
  const response = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
    method: "GET",
    headers: {
      Authorization: getBasicAuthHeader(),
    },
    cache: "no-store",
  });

  const data = (await parseJsonSafely(response)) as { error?: { description?: string } } | RazorpayPaymentResponse | null;

  if (!response.ok || !data || !("id" in data)) {
    const message = data && "error" in data ? data.error?.description : "Unable to fetch the Razorpay payment.";
    throw new Error(message || "Unable to fetch the Razorpay payment.");
  }

  return data;
}

export function verifyPaymentSignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}) {
  const { keySecret } = getRazorpayCredentials();
  const digest = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const expected = Buffer.from(digest, "utf8");
  const received = Buffer.from(signature, "utf8");

  if (expected.length !== received.length) {
    return false;
  }

  return crypto.timingSafeEqual(expected, received);
}

export function verifyWebhookSignature(payload: string, signature: string, secret: string) {
  const digest = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  const expected = Buffer.from(digest, "utf8");
  const received = Buffer.from(signature, "utf8");

  if (expected.length !== received.length) {
    return false;
  }

  return crypto.timingSafeEqual(expected, received);
}
