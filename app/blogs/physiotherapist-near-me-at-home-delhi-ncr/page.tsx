"use client"
import { useState } from "react"
import Script from "next/script"
import Link from "next/link"

const content = {
  en: {
    category: "Home Physiotherapy Guide",
    date: "April 27, 2026",
    slug: "physiotherapist-near-me-at-home-delhi-ncr",
    title: "Physiotherapist Near Me at Home in Delhi NCR — What to Expect & How to Book",
    intro:
      "Searching for a 'physiotherapist near me at home' in Delhi, Noida, Ghaziabad or Gurgaon? This guide tells you exactly what a home physio visit looks like, what to check before booking, and how to get same-day care at your doorstep.",
    author: "Dr. Somesh Mamgain",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why 'Physiotherapist Near Me at Home' is the Fastest Growing Search in Delhi NCR",
        content:
          "Every day, thousands of people in Delhi NCR type 'physiotherapist near me' or 'physio at home near me' into Google — and for good reason. After a knee replacement, a stroke, or weeks of chronic back pain, the last thing you want to do is sit in an auto or car for 40 minutes through traffic. Home physiotherapy solves this completely. A certified physiotherapist comes to your house, fully equipped, and gives you one-on-one clinical attention that a busy clinic simply cannot match.",
      },
      {
        heading: "Who Needs a Home Visit Physiotherapist?",
        content: "Home physiotherapy is ideal — but not limited to — the following cases:",
        list: [
          "Post-surgery patients (knee replacement, hip replacement, spine surgery) who cannot travel safely",
          "Elderly patients with mobility issues, stroke recovery, or Parkinson's",
          "Working professionals with severe back pain, neck pain, or sciatica who cannot take time off",
          "Sports injuries requiring consistent daily sessions during early recovery",
          "Patients in pain who want same-day booking without a clinic appointment",
          "Anyone who simply values the convenience and privacy of home care",
        ],
      },
      {
        heading: "What Happens During a Home Physiotherapy Visit?",
        content:
          "Many first-time patients are unsure what to expect. Here is a realistic, step-by-step breakdown of what your first session looks like:",
        numbered: [
          "Arrival & Setup (5 min): The physiotherapist arrives with a portable kit — TENS machine, IFT unit, ultrasound device, resistance bands, and manual therapy tools. No clinic setup needed.",
          "Detailed Assessment (15 min): Full evaluation of your complaint — history, posture, range of motion, neurological checks, and functional movement tests. This is what separates a physiotherapist from a regular masseur.",
          "Hands-On Treatment (25–30 min): Manual therapy, joint mobilization, soft tissue release, and targeted modalities (TENS/IFT/ultrasound) based on your diagnosis.",
          "Exercise Prescription (10 min): You are taught 3–5 specific exercises to do between sessions. These are written or sent on WhatsApp for reference.",
          "Follow-Up Plan (5 min): The therapist explains the expected recovery timeline, session frequency, and answers your questions.",
        ],
      },
      {
        heading: "How to Find a Genuine Physiotherapist Near You at Home (Not a Masseur)",
        content:
          "This is the most important section. Delhi NCR has many 'physiotherapy at home' services that are actually just untrained massage providers. Here is how to verify before booking:",
        list: [
          "Ask for BPT/MPT degree — a qualified physiotherapist holds a Bachelor of Physiotherapy (BPT) minimum, registered with the Indian Association of Physiotherapists (IAP)",
          "Check if they carry clinical equipment — TENS, IFT, or Ultrasound. A genuine physio brings more than their hands",
          "Look for Google reviews mentioning specific conditions treated — not just 'good massage'",
          "Ask if they do a proper assessment before starting treatment — anyone who starts treatment without assessment is not providing clinical physiotherapy",
        ],
      },
      {
        heading: "Areas We Cover in Delhi NCR for Home Physiotherapy",
        content:
          "Delhi Physio At Home provides certified home visit physiotherapy across the entire NCR region with same-day availability in most areas:",
        list: [
          "Ghaziabad: Raj Nagar Extension, Vaishali, Vasundhara, Indirapuram, Kaushambi, Crossings Republik, Loni",
          "Delhi: South Delhi, East Delhi, Preet Vihar, Shahdara, Dwarka, Rohini, Punjabi Bagh",
          "Noida: Sectors 1–150, Greater Noida, Noida Extension",
          "Gurgaon: DLF phases, Sohna Road, Golf Course Road, Sector 56, 57",
        ],
      },
      {
        heading: "Same-Day Booking — How It Works",
        content:
          "Getting a physiotherapist at home today in Delhi NCR is simpler than you think:",
        numbered: [
          "WhatsApp us at +91 81301 71272 with your name, area, and complaint",
          "We confirm availability and send you the therapist's expected arrival time",
          "Therapist arrives with full equipment — you just need a clear floor space or a firm bed",
          "Pay after the session — no advance payment required for first visit",
        ],
      },
      {
        heading: "Common Conditions Treated at Home in Delhi NCR",
        list: [
          "Back pain and sciatica (slip disc, lumbar spondylosis)",
          "Neck pain and cervical spondylosis",
          "Knee pain and post-knee replacement rehabilitation",
          "Stroke and neurological rehabilitation at home",
          "Frozen shoulder and rotator cuff injuries",
          "Sports injuries — ligament sprains, muscle strains",
          "Elderly mobility, fall prevention and balance training",
          "Post-surgical rehab (hip, spine, shoulder surgeries)",
        ],
      },
      {
        heading: "When to Choose Virtual Consultation Instead",
        content:
          "Not every case needs a home visit. A video consultation works well when:",
        list: [
          "You need a second opinion on your current treatment plan",
          "You want to learn exercises and correct your posture remotely",
          "You are outside Delhi NCR (we serve all of India virtually)",
          "You had a home visit and need a follow-up check",
          "You want to understand your MRI/X-ray report in plain language",
        ],
      },
      {
        heading: "Red Flags — Seek Immediate Medical Help, Not Physio",
        list: [
          "Sudden loss of bladder or bowel control (possible cauda equina emergency)",
          "Severe weakness in both legs suddenly",
          "Pain after a major fall or road accident — get X-ray first",
          "Fever with back pain (possible infection)",
          "Unexplained weight loss with pain",
        ],
        warning: true,
      },
      {
        heading: "Book Your Home Physio Visit Today",
        content:
          "Delhi Physio At Home provides BPT-certified physiotherapists with 8+ years of experience for home visits across Delhi, Ghaziabad, Noida, and Gurgaon. Same-day booking available.",
      },
    ],
  },
  hi: {
    category: "होम फिजियोथेरेपी गाइड",
    date: "27 अप्रैल 2026",
    slug: "physiotherapist-near-me-at-home-delhi-ncr",
    title: "मेरे पास घर पर फिजियोथेरेपिस्ट — दिल्ली NCR में कैसे बुक करें और क्या उम्मीद रखें",
    intro:
      "दिल्ली, नोएडा, गाजियाबाद या गुरुग्राम में 'मेरे पास घर पर फिजियोथेरेपिस्ट' खोज रहे हैं? यह गाइड बताती है कि होम फिजियो विजिट कैसी होती है, बुकिंग से पहले क्या जाँचें, और उसी दिन अपने दरवाजे पर देखभाल कैसे पाएं।",
    author: "डॉ. सोमेश मामगैन",
    readTime: "7 मिनट पढ़ें",
    sections: [
      {
        heading: "'मेरे पास घर पर फिजियोथेरेपिस्ट' दिल्ली NCR की सबसे तेज़ बढ़ती सर्च क्यों है?",
        content:
          "रोज़ हज़ारों लोग दिल्ली NCR में Google पर 'physiotherapist near me' या 'physio at home near me' टाइप करते हैं — और इसकी अच्छी वजह है। घुटना प्रत्यारोपण, स्ट्रोक, या हफ्तों की पीठ दर्द के बाद, ट्रैफिक में 40 मिनट बैठना आखिरी चीज़ है जो आप करना चाहते हैं। होम फिजियोथेरेपी इसे पूरी तरह हल करती है।",
      },
      {
        heading: "होम विजिट फिजियोथेरेपिस्ट की ज़रूरत किसे है?",
        content: "होम फिजियोथेरेपी इन मामलों में आदर्श है:",
        list: [
          "पोस्ट-सर्जरी मरीज़ (घुटना, कूल्हा, रीढ़ की सर्जरी) जो सुरक्षित रूप से यात्रा नहीं कर सकते",
          "बुज़ुर्ग मरीज़ जिनमें गतिशीलता की समस्या, स्ट्रोक रिकवरी या पार्किंसन है",
          "पीठ दर्द, गर्दन दर्द या साइएटिका से पीड़ित काम करने वाले पेशेवर",
          "रोज़ाना सेशन की ज़रूरत वाली खेल चोटें",
          "जो बिना क्लिनिक अपॉइंटमेंट के उसी दिन बुकिंग चाहते हैं",
        ],
      },
      {
        heading: "होम फिजियोथेरेपी विजिट में क्या होता है?",
        content: "पहली बार के मरीज़ अक्सर नहीं जानते कि क्या उम्मीद रखें। यहाँ एक स्टेप-बाय-स्टेप ब्रेकडाउन है:",
        numbered: [
          "आगमन और सेटअप (5 मिनट): TENS, IFT, अल्ट्रासाउंड, रेज़िस्टेंस बैंड के साथ फिजियोथेरेपिस्ट आता है",
          "विस्तृत मूल्यांकन (15 मिनट): इतिहास, पोस्चर, गति की सीमा, न्यूरोलॉजिकल जाँच",
          "हाथों से उपचार (25–30 मिनट): मैन्युअल थेरेपी, जॉइंट मोबिलाइज़ेशन, TENS/IFT",
          "एक्सरसाइज़ प्रेस्क्रिप्शन (10 मिनट): 3–5 एक्सरसाइज़ WhatsApp पर भेजी जाएंगी",
          "फॉलो-अप प्लान (5 मिनट): रिकवरी टाइमलाइन और सेशन फ्रिक्वेंसी",
        ],
      },
      {
        heading: "असली फिजियोथेरेपिस्ट कैसे पहचानें (मसाजवाला नहीं)?",
        content: "दिल्ली NCR में कई 'फिजियोथेरेपी एट होम' सेवाएं असल में अप्रशिक्षित मसाज प्रदाता हैं। जाँच करें:",
        list: [
          "BPT/MPT डिग्री माँगें — न्यूनतम बैचलर ऑफ फिजियोथेरेपी",
          "देखें कि वो TENS, IFT या अल्ट्रासाउंड लाते हैं या नहीं",
          "Google रिव्यू में विशिष्ट स्थितियों का उल्लेख होना चाहिए",
          "बिना मूल्यांकन के उपचार शुरू करने वाले से सावधान रहें",
        ],
      },
      {
        heading: "हम दिल्ली NCR में कहाँ-कहाँ आते हैं?",
        content: "दिल्ली फिजियो एट होम पूरे NCR में उसी दिन की उपलब्धता के साथ सर्टिफाइड होम विजिट देता है:",
        list: [
          "गाजियाबाद: राज नगर एक्सटेंशन, वैशाली, वसुंधरा, इंदिरापुरम, कौशांबी, क्रॉसिंग्स रिपब्लिक",
          "दिल्ली: साउथ, ईस्ट, प्रीत विहार, शाहदरा, द्वारका, रोहिणी, पंजाबी बाग",
          "नोएडा: सेक्टर 1–150, ग्रेटर नोएडा, नोएडा एक्सटेंशन",
          "गुरुग्राम: DLF फेज़, सोहना रोड, गोल्फ कोर्स रोड",
        ],
      },
      {
        heading: "उसी दिन बुकिंग — कैसे काम करती है",
        numbered: [
          "WhatsApp करें +91 81301 71272 — नाम, एरिया और समस्या बताएं",
          "हम उपलब्धता कन्फर्म करते हैं और आगमन का समय देते हैं",
          "थेरेपिस्ट पूरे उपकरण के साथ आता है — बस एक साफ जगह चाहिए",
          "सेशन के बाद पेमेंट — पहली विजिट पर एडवांस नहीं",
        ],
      },
      {
        heading: "घर पर इलाज की जाने वाली आम स्थितियाँ",
        list: [
          "पीठ दर्द और साइएटिका",
          "गर्दन दर्द और सर्वाइकल स्पॉन्डिलोसिस",
          "घुटने का दर्द और पोस्ट नी रिप्लेसमेंट रिहैब",
          "स्ट्रोक और न्यूरोलॉजिकल रिहैबिलिटेशन",
          "फ्रोज़न शोल्डर और रोटेटर कफ चोटें",
          "खेल चोटें — लिगामेंट मोच, मांसपेशी खिंचाव",
          "बुज़ुर्गों की गतिशीलता और बैलेंस ट्रेनिंग",
          "पोस्ट-सर्जिकल रिहैब",
        ],
      },
      {
        heading: "वर्चुअल कंसल्टेशन कब चुनें?",
        content: "हर केस में होम विजिट जरूरी नहीं। वीडियो कंसल्टेशन तब बेहतर है जब:",
        list: [
          "आपको अपने मौजूदा ट्रीटमेंट पर दूसरी राय चाहिए",
          "आप घर पर एक्सरसाइज़ सीखना और पोस्चर ठीक करना चाहते हैं",
          "आप दिल्ली NCR से बाहर हैं (हम पूरे भारत में वर्चुअली सेवा देते हैं)",
          "आप MRI/X-ray रिपोर्ट को सरल भाषा में समझना चाहते हैं",
        ],
      },
      {
        heading: "तत्काल चिकित्सा सहायता कब लें — फिजियो नहीं",
        list: [
          "मूत्राशय या आंत नियंत्रण का अचानक नुकसान",
          "दोनों पैरों में अचानक तेज़ कमज़ोरी",
          "बड़ी चोट या सड़क दुर्घटना के बाद दर्द — पहले X-ray करवाएं",
          "बुखार के साथ पीठ दर्द",
          "बिना कारण वज़न घटना और दर्द",
        ],
        warning: true,
      },
      {
        heading: "आज अपनी होम फिजियो विजिट बुक करें",
        content:
          "दिल्ली फिजियो एट होम दिल्ली, गाजियाबाद, नोएडा और गुरुग्राम में BPT-सर्टिफाइड, 8+ साल के अनुभव वाले फिजियोथेरेपिस्ट उपलब्ध कराता है। उसी दिन बुकिंग उपलब्ध।",
      },
    ],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Physiotherapist Near Me at Home in Delhi NCR — What to Expect & How to Book",
  description:
    "Complete guide to booking a physiotherapist at home in Delhi NCR. What to expect, how to verify credentials, areas covered and same-day booking.",
  author: { "@type": "Person", name: "Dr. Somesh Mamgain" },
  publisher: {
    "@type": "Organization",
    name: "Delhi Physio At Home",
    url: "https://www.delhiphysioathome.com",
  },
  datePublished: "2026-04-27T00:00:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.delhiphysioathome.com/blogs/physiotherapist-near-me-at-home-delhi-ncr",
  },
}

export default function PhysiotherapistNearMeBlog() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schema)}
      </Script>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-primary">{c.category}</span>
            <span>|</span>
            <span>{c.date}</span>
          </div>

          {/* Language toggle */}
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${
                lang === "en"
                  ? "bg-primary text-white"
                  : "bg-muted/20 text-muted-foreground"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded ${
                lang === "hi"
                  ? "bg-primary text-white"
                  : "bg-muted/20 text-muted-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            {c.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-3">{c.intro}</p>

          <div className="text-sm text-muted-foreground">
            <span>{c.author}</span>
            <span className="mx-2">•</span>
            <span>{c.date}</span>
            <span className="mx-2">•</span>
            <span>{c.readTime}</span>
          </div>
        </div>

        {/* Article */}
        <article className="space-y-8">
          {c.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {section.heading}
              </h2>
              {section.content && (
                <p className="text-muted-foreground mb-3">{section.content}</p>
              )}
              {section.list && (
                <ul
                  className={`space-y-1 ${
                    section.warning ? "text-red-600" : "text-muted-foreground"
                  }`}
                >
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span>{section.warning ? "⚠" : "✓"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.numbered && (
                <ol className="list-decimal ml-5 space-y-2 text-muted-foreground">
                  {section.numbered.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center space-y-3">
          <p className="text-lg font-semibold text-foreground">
            Need a physiotherapist at home today?
          </p>
          <p className="text-muted-foreground text-sm">
            Same-day visits across Delhi, Noida, Ghaziabad & Gurgaon.
          </p>
          <a
            href="https://wa.me/918130171272"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Book on WhatsApp
          </a>
        </div>

        {/* Back to blogs */}
        <div className="mt-8 text-center">
          <Link href="/blogs" className="text-primary hover:underline text-sm">
            ← View All Blogs
          </Link>
        </div>
      </div>
    </main>
  )
}
