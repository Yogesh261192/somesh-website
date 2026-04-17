"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Loader2, PhoneCall } from "lucide-react";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");
  const paymentStatus = searchParams.get("status");
  const serviceName = searchParams.get("service") || "Expert Virtual Physio Consultation";

  useEffect(() => {
    if (countdown === 0) {
      window.location.assign("/");
      return;
    }

    const timer = window.setTimeout(() => setCountdown((current) => current - 1), 1000);

    return () => window.clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="bg-[linear-gradient(180deg,#edf9f4_0%,#ffffff_55%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[36px] border border-emerald-100 bg-white p-8 text-center shadow-[0_30px_90px_-45px_rgba(15,23,42,0.4)] sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
            <CheckCircle2 className="h-10 w-10 text-emerald-700" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Payment confirmed</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Your consultation booking is secured</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Thank you for choosing Delhi Physio At Home. Your payment for <span className="font-semibold text-slate-900">{serviceName}</span> was received successfully, and our team will connect with you shortly.
          </p>

          <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-950 p-6 text-left text-white sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Payment reference</p>
              <p className="mt-2 break-all text-sm font-medium text-slate-100">{paymentId || "Available in Razorpay Dashboard"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Order reference</p>
              <p className="mt-2 break-all text-sm font-medium text-slate-100">{orderId || "Generated at checkout"}</p>
            </div>
          </div>

          {paymentStatus ? (
            <div className="mt-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              Razorpay status: {paymentStatus}
            </div>
          ) : null}

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">What happens next</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <p>1. Your consultation details are now linked to the Razorpay payment reference.</p>
              <p>2. The Delhi Physio At Home team will reach out on your shared phone number or email.</p>
              <p>3. If you need urgent coordination, call the support line below.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2d6a4f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#255840]"
              href="tel:+918130171272"
            >
              <PhoneCall className="h-4 w-4" />
              Call +91 81301 71272
            </a>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
              href="/"
            >
              Back to homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
            Redirecting automatically in <span className="font-semibold text-slate-950">{countdown}s</span>
            <Loader2 className="h-4 w-4 animate-spin text-emerald-700" />
          </div>
        </div>
      </div>
    </div>
  );
}