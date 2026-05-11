"use client";

import { useState } from "react";

const BENEFITS = [
  {
    icon: "🤝",
    title: "Patient referrals",
    desc: "Receive cases we can't cover due to location or capacity — sent directly to you.",
  },
  {
    icon: "📅",
    title: "Flexible schedule",
    desc: "Part-time or full-time, you decide your own availability and areas.",
  },
  {
    icon: "🩺",
    title: "Clinical support",
    desc: "Complex neuro or geriatric case? Discuss with our lead physio anytime.",
  },
  {
    icon: "⭐",
    title: "Build your reputation",
    desc: "Get listed on our website — build your personal brand alongside ours.",
  },
];

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "BPT",
    experience: "1–3 years",
    specialization: "Orthopaedic",
    areas: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email || !form.areas) {
      setErrorMsg("Please fill all required fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/partner-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please reach out via WhatsApp instead.");
    }
  };

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="mb-10 text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            For Physiotherapists
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Partner with Delhi Physio At Home
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join our referral network of home visit physiotherapists across Delhi NCR.
            Get patient referrals, flexible scheduling, and support from experienced peers.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-muted/20 border border-muted rounded-xl p-5"
            >
              <div className="text-2xl mb-2">{b.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        {status === "success" ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Application received!</h2>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Thanks for reaching out. We&apos;ll review your details and get back to you
              within 48 hours on WhatsApp or email.
            </p>
          </div>
        ) : (
          <div className="bg-muted/10 border border-muted rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-1">Apply to join our network</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details — we&apos;ll reach out within 48 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Dr. Priya Sharma"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98XXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">Qualification</label>
                <select
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>BPT</option>
                  <option>MPT</option>
                  <option>BPT + MPT</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">Years of experience</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>0–1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–8 years</option>
                  <option>8+ years</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-foreground">Specialization</label>
                <select
                  name="specialization"
                  value={form.specialization}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Orthopaedic</option>
                  <option>Neurological</option>
                  <option>Geriatric</option>
                  <option>Sports</option>
                  <option>Paediatric</option>
                  <option>General</option>
                  <option>Multiple</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Areas you can cover <span className="text-red-500">*</span>
                </label>
                <input
                  name="areas"
                  type="text"
                  placeholder="e.g. Vaishali, Kaushambi, Indirapuram, Noida Sector 62..."
                  value={form.areas}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Anything else you&apos;d like to share
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Current employment status, preferred timings, experience with specific conditions..."
                  value={form.message}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="mt-3 text-sm text-red-500">{errorMsg}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-base hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {status === "loading" ? "Submitting..." : "Submit application →"}
            </button>

            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted by Delhi Physio At Home.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
