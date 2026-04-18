"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  CreditCard,
  Loader2,
  Lock,
  Mail,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";

type PaymentMode = "live" | "test";

type RazorpaySuccessResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    code?: string;
    description?: string;
    metadata?: {
      order_id?: string;
      payment_id?: string;
    };
  };
};

type RazorpayCheckoutOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  handler: (response: RazorpaySuccessResponse) => void | Promise<void>;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  modal?: {
    ondismiss?: () => void;
    confirm_close?: boolean;
    animation?: boolean;
    escape?: boolean;
  };
  retry?: {
    enabled?: boolean;
  };
};

type RazorpayCheckoutInstance = {
  open: () => void;
  on: (eventName: "payment.failed", callback: (response: RazorpayFailureResponse) => void) => void;
};

type StatusMessage = {
  kind: "error" | "info" | "success";
  text: string;
};

type CheckoutProps = {
  companyLogoUrl: string;
  defaultAmount: number;
  defaultServiceName: string;
  paymentMode: PaymentMode;
};

type OrderResponse = {
  keyId: string;
  mode: PaymentMode;
  orderId: string;
  amount: number;
  amountInRupees: number;
  currency: string;
  companyName: string;
  description: string;
  image?: string;
};

type VerifyResponse = {
  verified: boolean;
  paymentId: string;
  orderId: string;
  paymentStatus: string;
};

type WindowWithRazorpay = Window & {
  Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayCheckoutInstance;
};

const amountFormatter = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  maximumFractionDigits: 0,
  style: "currency",
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

export function VirtualConsultationCheckoutContent({
  companyLogoUrl,
  defaultAmount,
  defaultServiceName,
  paymentMode,
}: CheckoutProps) {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service")?.trim() || "";
  const requestedAmount = Number(searchParams.get("amount"));
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<StatusMessage | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredSlot: "Next available",
    currentConcern: "",
    amount: String(defaultAmount),
    serviceName: defaultServiceName,
  });

  useEffect(() => {
    setForm((current) => ({
      ...current,
      serviceName: requestedService || defaultServiceName,
      amount:
        Number.isFinite(requestedAmount) && requestedAmount > 0 ? String(Math.round(requestedAmount)) : String(defaultAmount),
    }));
  }, [defaultAmount, defaultServiceName, requestedAmount, requestedService]);

  const parsedAmount = Number(form.amount);
  const payableAmount = Number.isFinite(parsedAmount) && parsedAmount > 0 ? Math.round(parsedAmount) : 0;

  function updateField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validateForm() {
    if (form.name.trim().length < 2) {
      return "Please enter the customer's full name.";
    }

    if (!emailPattern.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!phonePattern.test(form.phone.replace(/\s+/g, ""))) {
      return "Please enter a valid Indian mobile number.";
    }
    

    if (!Number.isFinite(parsedAmount) || parsedAmount < 1) {
      return "Please enter a valid payment amount.";
    }


    return "";
  }

  async function verifyPayment(payload: RazorpaySuccessResponse) {
    const response = await fetch("/api/razorpay/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as VerifyResponse | { error?: string } | null;

    if (!response.ok || !data || !("verified" in data) || !data.verified) {
      throw new Error(data && "error" in data ? data.error || "Payment verification failed." : "Payment verification failed.");
    }

    return data;
  }

  async function handlePayNow() {
    const validationError = validateForm();

    if (validationError) {
      setMessage({ kind: "error", text: validationError });
      return;
    }

    const Razorpay = (window as WindowWithRazorpay).Razorpay;

    if (!Razorpay) {
      setMessage({ kind: "error", text: "Razorpay Checkout did not load. Please refresh the page and try again." });
      return;
    }

    setLoading(true);
    setMessage({ kind: "info", text: "Preparing your secure payment window..." });

    try {
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          preferredSlot: form.preferredSlot,
          currentConcern: form.currentConcern,
          amount: payableAmount,
          serviceName: form.serviceName,
        }),
      });

      const orderData = (await orderResponse.json().catch(() => null)) as OrderResponse | { error?: string } | null;

      if (!orderResponse.ok || !orderData || !("orderId" in orderData)) {
        throw new Error(orderData && "error" in orderData ? orderData.error || "Unable to start payment." : "Unable to start payment.");
      }

      const checkout = new Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: orderData.companyName,
        description: orderData.description,
        image: orderData.image || companyLogoUrl,
        order_id: orderData.orderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        notes: {
          service: form.serviceName,
          preferred_slot: form.preferredSlot,
        },
        retry: {
          enabled: true,
        },
        modal: {
          confirm_close: true,
          animation: true,
          escape: true,
          ondismiss: () => {
            setLoading(false);
            setMessage({ kind: "error", text: "Payment window closed before the transaction completed." });
          },
        },
        theme: {
          color: "#2d6a4f",
        },
        handler: async (responsePayload) => {
          try {
            setMessage({ kind: "info", text: "Payment received. Verifying with Razorpay..." });
            const verification = await verifyPayment(responsePayload);
            setMessage({ kind: "success", text: "Payment verified successfully. Redirecting to confirmation page..." });

            const successUrl = new URL("/success", window.location.origin);
            successUrl.searchParams.set("payment_id", verification.paymentId);
            successUrl.searchParams.set("order_id", verification.orderId);
            successUrl.searchParams.set("status", verification.paymentStatus);
            successUrl.searchParams.set("service", form.serviceName);

            window.location.assign(successUrl.toString());
          } catch (error) {
            setLoading(false);
            setMessage({
              kind: "error",
              text: error instanceof Error ? error.message : "Payment completed but verification failed.",
            });
          }
        },
      });

      checkout.on("payment.failed", (responsePayload) => {
        const description = responsePayload.error?.description || "The payment failed. Please retry or use another method.";
        setLoading(false);
        setMessage({ kind: "error", text: description });
      });

      checkout.open();
    } catch (error) {
      setLoading(false);
      setMessage({
        kind: "error",
        text: error instanceof Error ? error.message : "We could not start the payment right now.",
      });
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setCheckoutReady(true)}
        onError={() =>
          setMessage({
            kind: "error",
            text: "Razorpay Checkout script could not be loaded. Please refresh the page.",
          })
        }
      />

      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#e9f6f2_0%,#f7fbfa_38%,#ffffff_100%)]">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(45,106,79,0.18),transparent_52%),radial-gradient(circle_at_top_right,rgba(14,116,144,0.14),transparent_42%)]" />

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Secure online payment for Delhi Physio At Home
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Access Professional Physiotherapy from Anywhere
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Get personalized care from certified physiotherapists via secure video call. Easy booking and multiple safe payment options including UPI, Cards, and Netbanking.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-emerald-100 bg-white/90 p-6 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                      <img alt="Delhi Physio At Home" className="h-10 w-10 rounded-full object-cover" src={companyLogoUrl} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Delhi Physio At Home</p>
                      <h2 className="mt-1 text-2xl font-bold text-slate-950">{form.serviceName}</h2>
                    </div>
                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      paymentMode === "live" ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"
                    }`}
                  >
                  </div>
                </div>

                <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-950 p-6 text-white sm:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-200">Today&apos;s booking summary</p>
                    <div className="mt-3 text-4xl font-black tracking-tight">{payableAmount ? amountFormatter.format(payableAmount) : "Rs 0"}</div>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                      Includes Complete digital health assessment, 1-on-1 expert consultation, personalized recovery roadmap, and a dedicated home exercise program.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/8 p-5">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Consultation fee</span>
                      <span>{payableAmount ? amountFormatter.format(payableAmount) : "Rs 0"}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                      <span>Platform charges</span>
                      <span>Rs 0</span>
                    </div>
                    {/* <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                      <span>Taxes</span>
                      <span>Included / as applicable</span>
                    </div> */}
                    <div className="mt-4 border-t border-white/10 pt-4 text-base font-semibold">
                      <div className="flex items-center justify-between">
                        <span>Amount payable</span>
                        <span>{payableAmount ? amountFormatter.format(payableAmount) : "Rs 0"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Expert guided video assessment",
                    "Posture, mobility and pain review",
                    "Personalised exercise recommendations",
                    "Secure digital payment via Razorpay",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-sky-100 bg-sky-50/80 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Trusted payment options</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { icon: Smartphone, label: "UPI" },
                      { icon: CreditCard, label: "Card" },
                      { icon: Wallet, label: "Wallet" },
                      { icon: Lock, label: "NetBanking" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                        <Icon className="h-4 w-4 text-sky-700" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Razorpay Standard Checkout supports the payment methods enabled on your account, with retry support and
                    secure order binding.
                  </p>
                </div>

                <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Why patients trust us</p>
                  <blockquote className="mt-4 text-base leading-7 text-slate-700">
                    "The virtual diagnosis was spot-on. I was struggling with back pain for weeks, and their recovery plan showed results within days. Highly professional and convenient!""
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-slate-900">-Delhi Physio At Home patients across Delhi NCR</p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                    <Clock3 className="h-4 w-4 text-emerald-700" />
                    Same-day or priority slot support available on request
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Need help before payment?</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <a
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
                    href="tel:+918130171272"
                  >
                    <PhoneCall className="h-4 w-4" />
                    +91 81301 71272
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
                    href="mailto:info@delhiphysioathome.com"
                  >
                    <Mail className="h-4 w-4" />
                    info@delhiphysioathome.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.45)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Patient Details</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">Help us know you better</h2>
                </div>
                <div className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  SSL secured
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="full-name">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                    id="full-name"
                    placeholder="Enter patient or payer name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                      id="email"
                      inputMode="email"
                      placeholder="patient@example.com"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                      id="phone"
                      inputMode="tel"
                      placeholder="+91 Your Mobile Number"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr]">
  {/* Dropdown for Condition */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="condition">
      Select Condition
    </label>
    <select
      className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-base text-slate-700 outline-none cursor-pointer"
      id="condition"
      value={form.condition}
      onChange={(event) => updateField("condition", event.target.value)}
    >
      <option value="">-- Choose a Condition --</option>
      <option value="knee">Knee Pain</option>
      <option value="back">Back Pain</option>
      <option value="shoulder">Shoulder Pain</option>
      <option value="neck">Neck Pain</option>
      <option value="post-surgery">Post-Surgery Recovery</option>
      <option value="other">Other</option>
    </select>
  </div>

  {/* Fixed Amount Field */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="amount">
      Amount (INR)
    </label>
    <input
      className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-base text-slate-500 outline-none cursor-not-allowed"
      id="amount"
      value="399" 
      readOnly
    />
  </div>
</div>


                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="preferred-slot">
                    Preferred Slot
                  </label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                    id="preferred-slot"
                    value={form.preferredSlot}
                    onChange={(event) => updateField("preferredSlot", event.target.value)}
                  >
                    <option>Next available</option>
                    <option>Morning: 9 AM - 12 PM</option>
                    <option>Afternoon: 12 PM - 4 PM</option>
                    <option>Evening: 4 PM - 8 PM</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="current-concern">
                    Briefly Explain Your Concern
                  </label>
                  <textarea
                    className="min-h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                    id="current-concern"
                    placeholder="e.g., Lower back pain for 2 weeks, recovery after knee surgery, etc."
                    value={form.currentConcern}
                    onChange={(event) => updateField("currentConcern", event.target.value)}
                  />
                </div>
              </div>

              {message ? (
                <div
                  aria-live="polite"
                  className={`mt-6 flex items-start gap-3 rounded-2xl px-4 py-4 text-sm ${
                    message.kind === "error"
                      ? "border border-rose-200 bg-rose-50 text-rose-800"
                      : message.kind === "success"
                        ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border border-sky-200 bg-sky-50 text-sky-800"
                  }`}
                >
                  {message.kind === "error" ? (
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                  ) : message.kind === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  ) : (
                    <Loader2 className="mt-0.5 h-4 w-4 flex-none animate-spin" />
                  )}
                  <span>{message.text}</span>
                </div>
              ) : null}

              <button
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#2d6a4f] px-5 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#255840] disabled:cursor-not-allowed disabled:bg-slate-400"
                disabled={loading || !checkoutReady}
                onClick={handlePayNow}
                type="button"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5" />}
                {loading ? "Opening secure checkout..." : "Confirm Booking & Pay Securely"}
              </button>

              <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                  Razorpay Standard Checkout
                </div>
                <p className="mt-2">
                  Your payment is 100% secure with industry-standard encryption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}