"use client"

import { useState } from "react"

const content = {
  en: {
    category: "Home Physiotherapy Guide",
    date: "July 20, 2026",
    title: "What Happens During a Home Physiotherapy Session? — A Complete Guide for First-Time Patients in Delhi NCR",
    intro: "If you've never had physiotherapy at home before, you might wonder — what exactly happens? Will it hurt? What equipment does the physiotherapist bring? How long does it take? This guide answers everything you need to know before booking your first home physiotherapy session in Delhi, Noida, Ghaziabad, or Gurgaon.",
    sections: [
      {
        heading: "Why Choose Home Physiotherapy?",
        content: "Home physiotherapy is not just a convenience — it is often more effective than clinic-based treatment. You recover in your own environment, there is no travel stress, and the physiotherapist can assess your actual living space, posture, and daily habits. Studies show that patients who receive physiotherapy at home show faster recovery and better compliance with exercises compared to those who visit clinics."
      },
      {
        heading: "Step 1: The Initial Assessment (First Session)",
        content: "Your first home physiotherapy session is primarily an assessment. The physiotherapist will ask about your medical history, current symptoms, pain levels, and lifestyle. They will check your range of motion, muscle strength, posture, and balance. This assessment takes 15-20 minutes and forms the foundation of your personalized treatment plan. No need to prepare anything special — just wear comfortable clothing."
      },
      {
        heading: "Step 2: What Equipment Does the Physiotherapist Bring?",
        tips: [
          { title: "Ultrasound Machine", desc: "Used for deep tissue healing, reducing inflammation, and breaking down adhesions in conditions like frozen shoulder, muscle injuries, and chronic pain." },
          { title: "TENS Machine", desc: "Transcutaneous Electrical Nerve Stimulation — used for pain relief in acute conditions, nerve pain, and post-surgical recovery." },
          { title: "Exercise Bands & Therabands", desc: "For strengthening exercises tailored to your condition and fitness level." },
          { title: "Hot & Cold Packs", desc: "For muscle relaxation before exercises and reducing inflammation after treatment." },
          { title: "Goniometer & Assessment Tools", desc: "To measure your range of motion accurately and track progress session by session." }
        ]
      },
      {
        heading: "Step 3: A Typical Session — What Actually Happens",
        tips: [
          { title: "Warm-Up (5-10 minutes)", desc: "Hot pack application or gentle mobilisation to prepare muscles and joints for treatment." },
          { title: "Manual Therapy or Electrotherapy (10-15 minutes)", desc: "Depending on your condition — ultrasound, TENS, soft tissue massage, or joint mobilisation." },
          { title: "Targeted Exercises (15-20 minutes)", desc: "Specific exercises designed for your condition. The physiotherapist guides you through each one, correcting your form and technique." },
          { title: "Home Exercise Prescription (5 minutes)", desc: "You will be given 3-5 simple exercises to do at home between sessions. These are critical for faster recovery." },
          { title: "Progress Review & Next Steps (5 minutes)", desc: "The physiotherapist reviews your progress, adjusts the treatment plan if needed, and schedules the next session." }
        ]
      },
      {
        heading: "How Many Sessions Will I Need?",
        content: "This depends entirely on your condition. Acute back or neck pain may resolve in 5-7 sessions. Frozen shoulder typically requires 15-20 sessions. Post-surgical rehabilitation can take 4-8 weeks. Neurological conditions like stroke or Parkinson's require long-term ongoing sessions. Your physiotherapist will give you a realistic timeline after the first assessment session."
      },
      {
        heading: "Common Conditions Treated at Home",
        list: [
          "Back pain and neck pain — desk job, slip disc, spondylitis",
          "Frozen shoulder and rotator cuff injuries",
          "Knee pain — arthritis, post knee replacement recovery",
          "Sciatica and nerve pain down the leg",
          "Post-surgery rehabilitation — CABG, hip replacement, ACL repair",
          "Stroke rehabilitation and neurological conditions",
          "Sports injuries and muscle strains",
          "Elderly care — balance, fall prevention, gait training"
        ]
      },
      {
        heading: "Will It Hurt?",
        content: "Physiotherapy should never be severely painful. Some discomfort during stretching or joint mobilisation is normal — especially in the early sessions. A good physiotherapist always works within your pain tolerance and adjusts intensity based on your feedback. If something hurts more than a 4 out of 10, always speak up. Pain is a signal, not something to push through blindly."
      },
      {
        heading: "What Should I Do Before the Physiotherapist Arrives?",
        list: [
          "Wear loose, comfortable clothing that allows easy movement",
          "Clear a small space — 6x6 feet is enough for most exercises",
          "Keep your medical reports, X-rays, or discharge summaries ready",
          "Note down your symptoms — when the pain started, what makes it worse or better",
          "Apply hot pack 10 minutes before the session if already advised to do so",
          "Be ready 5 minutes before the scheduled time"
        ]
      },
      {
        heading: "Red Flags — When to See a Doctor First",
        list: [
          "Sudden severe pain with no obvious cause",
          "Numbness or weakness in both legs simultaneously",
          "Loss of bladder or bowel control",
          "Chest pain, breathlessness, or dizziness along with back pain",
          "Pain following a fall or accident — get an X-ray first",
          "Unexplained weight loss along with back pain"
        ],
        warning: true
      }
    ],
    ctaTitle: "Book Your First Home Physiotherapy Session",
    ctaDesc: "Certified physiotherapists in Delhi NCR will come to your home. Same-day appointments available. Serving Delhi, Noida, Ghaziabad, Indirapuram, Vasundhara, and Gurgaon.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs"
  },
  hi: {
    category: "होम फिजियोथेरेपी गाइड",
    date: "20 जुलाई 2026",
    title: "घर पर फिजियोथेरेपी सेशन में क्या होता है? — पहली बार के मरीजों के लिए संपूर्ण गाइड",
    intro: "अगर आपने पहले कभी घर पर फिजियोथेरेपी नहीं कराई है, तो आपके मन में सवाल होंगे — सेशन में क्या होता है? क्या दर्द होगा? फिजियोथेरेपिस्ट कौन सी मशीनें लाते हैं? कितना समय लगता है? यह गाइड आपके हर सवाल का जवाब देती है।",
    sections: [
      {
        heading: "घर पर फिजियोथेरेपी क्यों चुनें?",
        content: "घर पर फिजियोथेरेपी सिर्फ सुविधाजनक नहीं — कई मामलों में यह क्लिनिक से बेहतर भी होती है। आप अपने परिचित माहौल में ठीक होते हैं, यात्रा का तनाव नहीं होता, और फिजियोथेरेपिस्ट आपकी दिनचर्या और पोस्चर को समझकर इलाज करते हैं।"
      },
      {
        heading: "पहला कदम: पहले सेशन में क्या होता है?",
        content: "पहला सेशन मुख्यतः आकलन (assessment) का होता है। फिजियोथेरेपिस्ट आपकी मेडिकल हिस्ट्री, लक्षण, दर्द का स्तर और जीवनशैली के बारे में पूछेंगे। इसमें 15-20 मिनट लगते हैं। आरामदायक कपड़े पहनें — कोई विशेष तैयारी नहीं चाहिए।"
      },
      {
        heading: "फिजियोथेरेपिस्ट कौन सी मशीनें लाते हैं?",
        tips: [
          { title: "अल्ट्रासाउंड मशीन", desc: "गहरे ऊतकों की चिकित्सा, सूजन कम करने और फ्रोजन शोल्डर जैसी समस्याओं में adhesions तोड़ने के लिए।" },
          { title: "TENS मशीन", desc: "तीव्र दर्द, नसों के दर्द और सर्जरी के बाद रिकवरी में दर्द निवारण के लिए।" },
          { title: "एक्सरसाइज बैंड्स", desc: "आपकी स्थिति के अनुसार मांसपेशियों को मजबूत करने के लिए।" },
          { title: "हॉट और कोल्ड पैक", desc: "व्यायाम से पहले मांसपेशियों को ढीला करने और बाद में सूजन कम करने के लिए।" },
          { title: "आकलन उपकरण", desc: "आपकी गति की सीमा नापने और हर सेशन में प्रगति ट्रैक करने के लिए।" }
        ]
      },
      {
        heading: "एक सामान्य सेशन — असल में क्या होता है?",
        tips: [
          { title: "वार्म-अप (5-10 मिनट)", desc: "हॉट पैक या हल्की मूवमेंट से मांसपेशियों और जोड़ों को तैयार किया जाता है।" },
          { title: "थेरेपी (10-15 मिनट)", desc: "आपकी स्थिति के अनुसार अल्ट्रासाउंड, TENS, मसाज या जॉइंट मोबिलाइजेशन।" },
          { title: "लक्षित व्यायाम (15-20 मिनट)", desc: "आपकी समस्या के अनुसार विशेष व्यायाम — फिजियोथेरेपिस्ट हर व्यायाम में मार्गदर्शन करते हैं।" },
          { title: "घरेलू व्यायाम (5 मिनट)", desc: "सेशन के बीच करने के लिए 3-5 सरल व्यायाम बताए जाते हैं। ये जल्दी ठीक होने के लिए जरूरी हैं।" },
          { title: "समीक्षा और अगला कदम (5 मिनट)", desc: "प्रगति की समीक्षा और अगले सेशन की योजना।" }
        ]
      },
      {
        heading: "कितने सेशन लगेंगे?",
        content: "यह पूरी तरह आपकी समस्या पर निर्भर करता है। तीव्र पीठ दर्द में 5-7 सेशन काफी हो सकते हैं। फ्रोजन शोल्डर में 15-20 सेशन लगते हैं। सर्जरी के बाद रिकवरी में 4-8 सप्ताह लग सकते हैं। पहले सेशन में आकलन के बाद फिजियोथेरेपिस्ट आपको सटीक जानकारी देंगे।"
      },
      {
        heading: "घर पर किन समस्याओं का इलाज होता है?",
        list: [
          "पीठ और गर्दन दर्द — स्लिप डिस्क, स्पॉन्डिलाइटिस",
          "फ्रोजन शोल्डर और कंधे की चोटें",
          "घुटने का दर्द — आर्थराइटिस, घुटना प्रत्यारोपण के बाद रिकवरी",
          "साइटिका और नसों का दर्द",
          "सर्जरी के बाद पुनर्वास — बाईपास, हिप रिप्लेसमेंट",
          "स्ट्रोक पुनर्वास और न्यूरोलॉजिकल समस्याएं",
          "बुजुर्गों की देखभाल — संतुलन और चाल सुधार"
        ]
      },
      {
        heading: "क्या दर्द होगा?",
        content: "फिजियोथेरेपी में कभी भी असहनीय दर्द नहीं होना चाहिए। स्ट्रेचिंग में हल्की तकलीफ सामान्य है — खासकर शुरुआती सेशन में। एक अच्छा फिजियोथेरेपिस्ट हमेशा आपकी सहनशक्ति के अनुसार काम करता है। अगर दर्द 4/10 से ज्यादा हो तो तुरंत बताएं।"
      },
      {
        heading: "फिजियोथेरेपिस्ट के आने से पहले क्या करें?",
        list: [
          "ढीले और आरामदायक कपड़े पहनें",
          "6x6 फीट की जगह साफ रखें",
          "मेडिकल रिपोर्ट, X-ray या डिस्चार्ज समरी तैयार रखें",
          "लक्षण नोट करें — दर्द कब शुरू हुआ, क्या बढ़ाता या घटाता है",
          "अगर पहले से सलाह दी गई हो तो सेशन से 10 मिनट पहले हॉट पैक लगाएं",
          "निर्धारित समय से 5 मिनट पहले तैयार रहें"
        ]
      },
      {
        heading: "कब पहले डॉक्टर से मिलें?",
        list: [
          "अचानक तेज दर्द बिना किसी कारण के",
          "दोनों पैरों में एक साथ सुन्नपन या कमजोरी",
          "मूत्राशय या आंत पर नियंत्रण न रहे",
          "पीठ दर्द के साथ सीने में दर्द या सांस लेने में तकलीफ",
          "गिरने या दुर्घटना के बाद — पहले X-ray कराएं",
          "बिना कारण वजन कम होने के साथ पीठ दर्द"
        ],
        warning: true
      }
    ],
    ctaTitle: "घर पर पहला फिजियोथेरेपी सेशन बुक करें",
    ctaDesc: "दिल्ली NCR में प्रमाणित फिजियोथेरेपिस्ट आपके घर आते हैं। दिल्ली, नोएडा, गाजियाबाद, इंदिरापुरम, वसुंधरा और गुरुग्राम में सेवा उपलब्ध।",
    ctaWhatsApp: "WhatsApp पर बुक करें",
    ctaCall: "कॉल करें: +91 81301 71272",
    backLink: "← सभी ब्लॉग देखें"
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
              {"list" in section && section.list && (
                <ul className="space-y-2 text-muted-foreground">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-1 ${"warning" in section && section.warning ? "text-red-500" : "text-primary"}`}>
                        {"warning" in section && section.warning ? "⚠" : "✓"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {"tips" in section && section.tips && (
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