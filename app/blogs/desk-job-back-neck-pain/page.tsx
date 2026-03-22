"use client"

import { useState } from "react"

const content = {
  en: {
    category: "Back & Neck Pain",
    date: "March 21, 2026",
    title: "Desk Job? Don't Ignore Back & Neck Pain — Complete Guide for Young Professionals",
    intro: "If you're between 25 and 35 and spend 8-10 hours a day in front of a laptop, you're at high risk for back and neck pain. Poor posture, wrong chair height, and a sedentary lifestyle are silently damaging your spine. Here's everything you need to know.",
    sections: [
      {
        heading: "Why Is This Happening?",
        content: "Sitting for long hours puts enormous pressure on your spine. Hunching forward to look at a screen can put 4-5 times more pressure on your cervical vertebrae than sitting upright. Studies show that back and neck pain cases among 25-35 year old professionals have increased by over 40% in the last 5 years — largely due to sedentary lifestyles and work-from-home culture."
      },
      {
        heading: "Symptoms You Should Never Ignore",
        list: [
          "Stiffness in the neck or back when you wake up",
          "Difficulty getting up after sitting for long periods",
          "Headaches that start from the neck",
          "Numbness or tingling in hands or fingers",
          "Constant tightness in the shoulders",
          "Difficulty concentrating while working"
        ]
      },
      {
        heading: "5 Things You Can Do Right Now",
        tips: [
          { title: "1. Fix Your Screen Height", desc: "Your screen should be at eye level — not too low or too high. Tilting your head forward puts 4-5x more pressure on the cervical spine." },
          { title: "2. Take a Break Every 45 Minutes", desc: "Even a 2-3 minute break gives your muscles a chance to relax. Set a reminder on your phone." },
          { title: "3. Do These 3 Simple Stretches Daily", desc: "Chin Tuck: Pull your chin inward, hold for 5 seconds — repeat 10 times. Shoulder Roll: Roll both shoulders backward — 10 times. Cat-Cow Stretch: On all fours, arch your back up and down — 10 times." },
          { title: "4. Fix Your Sleeping Position", desc: "A pillow that's too thick or too thin can cause back and neck pain. Use a medium-firm pillow that keeps your neck in a neutral position." },
          { title: "5. Stay Hydrated", desc: "Spinal discs are 80% water. Dehydration directly affects disc health. Drink at least 2.5-3 litres of water daily." }
        ]
      },
      {
        heading: "Why Physiotherapy Is Essential",
        content: "Most people take painkillers or ignore the pain — but this only provides temporary relief. If pain has lasted more than 2 weeks, it's a sign you need professional help. A certified physiotherapist diagnoses your exact problem and creates a personalized exercise plan. Manual therapy, dry needling, and targeted exercises treat the root cause — not just the symptoms. And the best part? You don't need to visit a clinic. DelhiPhysio@Home's certified physiotherapists come to your home across Delhi, Noida, Ghaziabad, Indirapuram, and Gurgaon."
      },
      {
        heading: "When to See a Doctor Immediately",
        list: [
          "Weakness developing in arms or legs",
          "Pain that worsens at night",
          "Difficulty with bladder or bowel control",
          "Pain lasting more than 4 weeks and getting worse"
        ],
        warning: true
      }
    ],
    ctaTitle: "Book Home Physiotherapy",
    ctaDesc: "Certified physiotherapists in Delhi NCR will come to your home for treatment. Book your first session today.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs"
  },
  hi: {
    category: "Back & Neck Pain",
    date: "March 21, 2026",
    title: "Desk Job Kar Rahe Ho? Back & Neck Pain Ko Ignore Mat Karo — Young Professionals Ke Liye Complete Guide",
    intro: "25 se 35 saal ki umar mein back pain aur neck pain ka hona aajkal aam baat ho gayi hai. Lagatar laptop pe kaam, galat posture, aur kam physical activity — yeh sab milkar aapki sehat bigaad rahe hain. Jaanein kya karna chahiye.",
    sections: [
      {
        heading: "Kyun Ho Raha Hai Yeh Dard?",
        content: "Agar aap din mein 8-10 ghante laptop ya computer ke saamne baithte hain, toh aapki spine par bahut zyada pressure aata hai. Galat chair, screen ki height aur sar ko aage jhukane ki aadat — yeh sab milkar cervical spondylosis, muscle stiffness aur chronic back pain ka karan bante hain. Studies ke mutabik, 25-35 saal ke professionals mein back aur neck pain ke cases pichle 5 saalon mein 40% se zyada badhe hain — aur iska sabse bada karan hai sedentary lifestyle aur work from home culture."
      },
      {
        heading: "Sabse Common Symptoms Jo Ignore Nahi Karne Chahiye",
        list: [
          "Subah uthte waqt gardan ya kamar mein akadahat",
          "Lambe time baithne ke baad uthna mushkil lagta ho",
          "Sar dard jo gardan se shuru hota ho",
          "Haath ya ungliyon mein soonapan ya jhanjhanahat",
          "Shoulders mein constant tightness",
          "Kaam karte waqt concentrate karna mushkil lagta ho"
        ]
      },
      {
        heading: "5 Cheezen Jo Aap Abhi Se Kar Sakte Hain",
        tips: [
          { title: "1. Screen Ki Height Theek Karein", desc: "Aapki screen aankho ke level par honi chahiye — neeche ya zyada upar nahi. Sar ko aage jhukana cervical vertebrae par 4-5 guna zyada pressure dalta hai." },
          { title: "2. Har 45 Minute Mein Ek Baar Uthein", desc: "Sirf 2-3 minute ka break bhi muscles ko relax karne ka mauka deta hai. Phone mein reminder set karein." },
          { title: "3. Yeh 3 Simple Stretches Rozana Karein", desc: "Chin Tuck: Thodhi ko andar ki taraf kheenchein, 5 second rokein — 10 baar karein. Shoulder Roll: Dono kandhon ko peeche ki taraf ghoomayein — 10 baar. Cat-Cow Stretch: Charon haath-paon par aayein aur kamar ko upar-neeche karein — 10 baar." },
          { title: "4. Sone Ka Tarika Theek Karein", desc: "Bahut zyada mota ya bahut patla takiya back aur neck pain ka karan ban sakta hai. Ek medium-firm pillow use karein jo gardan ko neutral position mein rakhe." },
          { title: "5. Paani Poora Piyein", desc: "Spinal discs ka 80% hissa paani hota hai. Dehydration directly disc health ko affect karta hai. Din mein kam se kam 2.5-3 litre paani piyein." }
        ]
      },
      {
        heading: "Physiotherapy Kyun Zaroori Hai?",
        content: "Bahut log pain killers kha lete hain ya dard ko ignore karte hain — lekin yeh sirf temporary relief deta hai. Agar dard 2 hafte se zyada hai, toh yeh sign hai ki aapko professional help chahiye. Ek certified physiotherapist aapki exact problem diagnose karke personalized exercise plan banata hai. Manual therapy, dry needling, aur targeted exercises se root cause treat hota hai — sirf symptoms nahi. Aur sabse achhi baat? Ab clinic jaane ki zaroorat nahi. DelhiPhysio@Home ke certified physiotherapists aapke ghar aate hain — Delhi, Noida, Ghaziabad, Indirapuram aur Gurgaon mein."
      },
      {
        heading: "Kab Turant Doctor Se Milna Chahiye?",
        list: [
          "Haath ya paon mein kamzori aa rahi ho",
          "Dard raat ko zyada hota ho",
          "Bladder ya bowel control mein takleef ho",
          "Dard 4 hafte se zyada ho aur badh raha ho"
        ],
        warning: true
      }
    ],
    ctaTitle: "Ghar Baithe Physiotherapy Book Karein",
    ctaDesc: "Delhi NCR mein certified physiotherapists aapke ghar aakar treatment denge. Pehla consultation book karein aaj hi.",
    ctaWhatsApp: "WhatsApp Par Book Karein",
    ctaCall: "Call Karein: +91 81301 71272",
    backLink: "← Sabhi Blogs Dekhein"
  }
}

export default function BlogPost() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === "en" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"}`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === "hi" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"}`}
            >
              हिंदी
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{c.category}</span>
            <span className="text-xs text-muted-foreground">{c.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground">{c.intro}</p>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.heading}</h2>
              {"content" in section && (
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              )}
              {"list" in section && (
                <ul className="space-y-2 text-muted-foreground">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-1 ${section.warning ? "text-red-500" : "text-primary"}`}>
                        {section.warning ? "⚠" : "✓"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {"tips" in section && (
                <div className="space-y-4">
                  {section.tips.map((tip, j) => (
                    <div key={j} className="bg-primary/5 rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{c.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918130171272?text=Hi, I would like to book a physiotherapy session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {c.ctaWhatsApp}
            </a>
            <a
              href="tel:+918130171272"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              {c.ctaCall}
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {c.backLink}
          </a>
        </div>

      </div>
    </main>
  )
}
