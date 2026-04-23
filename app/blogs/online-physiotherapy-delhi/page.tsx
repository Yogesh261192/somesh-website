"use client"
import { useState } from "react"
import Script from "next/script"
import Link from "next/link"

const content = {
  en: {
    category: "Online Physiotherapy & Virtual Care",
    date: "April 23, 2026",
    title: "Online Physiotherapy in Delhi — Real Treatment From Home, No Travel Needed",
    intro: "Searching for a physiotherapist online or online physiotherapy services in Delhi? You can now consult a certified physiotherapist from your home, office, or anywhere — via video call. Same expert care, zero commute.",
    author: "Dr. Somesh",
    readTime: "7 min read",
    sections: [
      {
        heading: "What is Online Physiotherapy?",
        content: "Online physiotherapy (also called tele-physiotherapy or virtual physio) is a live video consultation with a certified physiotherapist. You describe your problem, they assess your movement, posture, and pain patterns on screen — and give you a personalised treatment plan, exercises, and real-time corrections. It's not a chatbot. It's a real expert, watching you move."
      },
      {
        heading: "Is Online Physio Actually Effective?",
        content: "Yes — and research backs it. For most musculoskeletal problems (back pain, knee pain, neck pain, shoulder stiffness, post-injury rehab), tele-physiotherapy gives outcomes comparable to in-person care. The key is a proper video assessment, not just a prescription of generic exercises.",
        list: [
          "Live posture and movement assessment via video",
          "Personalised exercise plan — not copy-paste advice",
          "Real-time corrections as you do your exercises",
          "Follow-up tracking to adjust the plan as you improve",
          "Documented sessions so progress is measurable"
        ]
      },
      {
        heading: "Who is Online Physiotherapy Best For?",
        list: [
          "Working professionals in Delhi with tight schedules (no time for clinic travel)",
          "People with mild-to-moderate pain who can move but need expert guidance",
          "Post-injury or post-surgery patients in maintenance phase",
          "WFH employees with back pain, neck stiffness, or wrist issues",
          "Seniors who find travel difficult but need regular physiotherapy",
          "Anyone outside central Delhi — Noida, Ghaziabad, Gurgaon, or other cities"
        ]
      },
      {
        heading: "Conditions Treated via Online Physiotherapy",
        content: "A virtual consultation is suitable for a wide range of conditions — especially those where guided exercise is the primary treatment:",
        list: [
          "Chronic lower back pain and lumbar spondylosis",
          "Neck pain and cervical spondylosis (very common in Delhi WFH crowd)",
          "Frozen shoulder / adhesive capsulitis — stage 2 and thawing phase",
          "Knee pain — osteoarthritis, runner's knee, post-ACL rehab",
          "Sciatica and disc-related leg pain",
          "Rotator cuff issues and shoulder stiffness",
          "Tennis elbow, golfer's elbow, wrist pain",
          "Posture correction — slouch, forward head posture",
          "Post-fracture and post-surgery rehabilitation (maintenance phase)"
        ]
      },
      {
        heading: "Why Delhi Patients Are Switching to Online Physio",
        content: "Delhi's traffic alone can make a 3 km clinic visit a 45-minute ordeal. Add to that parking, wait time, and the physical strain of travelling when you're already in pain — and the value of physio at home or online becomes obvious.",
        list: [
          "Skip Delhi traffic — consult from your sofa or office chair",
          "Same-day slots available — book and get consulted within hours",
          "No need to carry X-rays or reports to a clinic — share digitally",
          "Consistent follow-up is easier — you're more likely to attend",
          "More affordable than repeated clinic visits or private hospital OPD"
        ]
      },
      {
        heading: "How a Session Works — Step by Step",
        numbered: [
          "Book online: choose a slot on our website — slots available 7 AM to 9 PM",
          "Pay ₹399 to confirm your appointment (Razorpay / UPI supported)",
          "Receive a WhatsApp confirmation with the video link",
          "Join the video call — the physio assesses you live (posture, movement, pain location)",
          "Get your personalised exercise plan shared via WhatsApp after the session",
          "Book follow-up sessions to track and adjust your plan"
        ],
        content: "The whole setup takes less than 2 minutes. No app download required — works on any smartphone or laptop browser."
      },
      {
        heading: "What to Keep Ready Before Your Session",
        list: [
          "A quiet space with enough room to stand and move your arms/legs",
          "Wear comfortable clothes — you may need to show the affected area",
          "Keep your phone or laptop propped up so both hands are free",
          "Have your MRI / X-ray reports ready if you have them (not mandatory)",
          "Note down your main complaints — duration, triggers, what makes it better/worse"
        ]
      },
      {
        heading: "Online vs Home Visit — Which to Choose?",
        content: "Both are available. Here's a quick guide:",
        list: [
          "Choose Online if: your pain is mild-moderate, you need guidance and exercises, you're short on time or outside Delhi",
          "Choose Home Visit if: you need hands-on manual therapy, ultrasound/TENS/IFT machine treatment, post-surgery mobilisation, or you cannot move comfortably",
          "Many patients start with an online consultation to understand the problem, then book a home visit for hands-on treatment — this is a smart combination"
        ]
      },
      {
        heading: "Red Flags — When NOT to Delay and Call Us Immediately",
        list: [
          "Sudden severe pain with inability to move a joint",
          "Pain after a fall, accident, or sports injury",
          "Numbness or tingling spreading down arms or legs",
          "Bladder or bowel changes with back pain (see a doctor urgently)",
          "Fever with joint pain or swelling"
        ],
        warning: true
      },
      {
        heading: "Why Choose Delhi Physio At Home for Online Consultation?",
        list: [
          "✅ Certified physiotherapists — not wellness coaches or fitness trainers",
          "✅ Same-day appointment slots across Delhi, Noida, Ghaziabad, Gurgaon",
          "✅ Hindi and English consultations available",
          "✅ WhatsApp-based follow-up — easy and convenient",
          "✅ Priced at ₹399 — affordable expert care",
          "✅ Option to upgrade to home visit if hands-on treatment is needed"
        ]
      }
    ]
  },
  hi: {
    category: "ऑनलाइन फिजियोथेरेपी और वर्चुअल केयर",
    date: "23 अप्रैल 2026",
    title: "ऑनलाइन फिजियोथेरेपी दिल्ली — घर बैठे असली इलाज, बिना यात्रा के",
    intro: "दिल्ली में ऑनलाइन फिजियोथेरेपिस्ट या ऑनलाइन फिजियोथेरेपी सेवाएं ढूंढ रहे हैं? अब आप घर, ऑफिस या कहीं से भी — वीडियो कॉल पर — एक सर्टिफाइड फिजियोथेरेपिस्ट से कंसल्ट कर सकते हैं। वही विशेषज्ञ देखभाल, शून्य आवागमन।",
    author: "डॉ. सोमेश",
    readTime: "7 मिनट पढ़ें",
    sections: [
      {
        heading: "ऑनलाइन फिजियोथेरेपी क्या है?",
        content: "ऑनलाइन फिजियोथेरेपी (टेली-फिजियोथेरेपी या वर्चुअल फिजियो) एक सर्टिफाइड फिजियोथेरेपिस्ट के साथ लाइव वीडियो कंसल्टेशन है। आप अपनी समस्या बताते हैं — वो स्क्रीन पर आपकी मूवमेंट, पोस्चर और दर्द का आकलन करते हैं — और एक पर्सनलाइज़्ड ट्रीटमेंट प्लान देते हैं। यह कोई चैटबॉट नहीं है। यह एक असली विशेषज्ञ है जो आपको देख रहा है।"
      },
      {
        heading: "क्या ऑनलाइन फिजियो सच में असरदार है?",
        content: "हाँ — और रिसर्च इसे सपोर्ट करती है। अधिकांश मस्कुलोस्केलेटल समस्याओं के लिए टेली-फिजियोथेरेपी इन-पर्सन केयर जितनी ही प्रभावी है। सही वीडियो असेसमेंट और पर्सनलाइज़्ड प्लान ही इसे असरदार बनाता है।",
        list: [
          "वीडियो पर लाइव पोस्चर और मूवमेंट असेसमेंट",
          "पर्सनलाइज़्ड एक्सरसाइज़ प्लान — कॉपी-पेस्ट सलाह नहीं",
          "एक्सरसाइज़ करते समय रियल-टाइम सुधार",
          "प्रगति के अनुसार प्लान अपडेट करने के लिए फॉलो-अप",
          "मेज़रेबल प्रोग्रेस के लिए डॉक्यूमेंटेड सेशन"
        ]
      },
      {
        heading: "ऑनलाइन फिजियोथेरेपी किसके लिए सबसे उपयुक्त है?",
        list: [
          "व्यस्त शेड्यूल वाले दिल्ली के वर्किंग प्रोफेशनल्स (क्लिनिक जाने का समय नहीं)",
          "हल्के-मध्यम दर्द वाले जो हिल-डुल सकते हैं पर विशेषज्ञ मार्गदर्शन चाहिए",
          "चोट या सर्जरी के बाद मेंटेनेंस फेज़ में मरीज़",
          "बैक पेन, गर्दन जकड़न, या कलाई की समस्या वाले WFH कर्मचारी",
          "बुज़ुर्ग जिन्हें यात्रा मुश्किल लगती है पर नियमित फिजियोथेरेपी चाहिए",
          "दिल्ली के बाहर वाले — नोएडा, गाज़ियाबाद, गुड़गांव या अन्य शहर"
        ]
      },
      {
        heading: "ऑनलाइन फिजियोथेरेपी से ठीक होने वाली स्थितियाँ",
        content: "वर्चुअल कंसल्टेशन कई स्थितियों के लिए उपयुक्त है — खासकर जहाँ गाइडेड एक्सरसाइज़ मुख्य उपचार है:",
        list: [
          "क्रोनिक लोअर बैक पेन और लम्बर स्पॉन्डिलोसिस",
          "गर्दन दर्द और सर्वाइकल स्पॉन्डिलोसिस (दिल्ली WFH में बहुत सामान्य)",
          "फ्रोजन शोल्डर — स्टेज 2 और थॉइंग फेज़",
          "घुटने का दर्द — ऑस्टियोआर्थराइटिस, रनर्स नी, पोस्ट-ACL रिहैब",
          "साइटिका और डिस्क से जुड़ा पैर दर्द",
          "रोटेटर कफ समस्याएं और कंधे की जकड़न",
          "टेनिस एल्बो, गोल्फर एल्बो, कलाई दर्द",
          "पोस्चर करेक्शन — स्लाउच, फॉरवर्ड हेड पोस्चर",
          "फ्रैक्चर और सर्जरी के बाद रिहैबिलिटेशन (मेंटेनेंस फेज़)"
        ]
      },
      {
        heading: "दिल्ली के मरीज़ ऑनलाइन फिजियो की ओर क्यों बढ़ रहे हैं?",
        content: "दिल्ली का ट्रैफ़िक अकेले 3 किमी की क्लिनिक यात्रा को 45 मिनट का झंझट बना देता है। पार्किंग, वेटिंग टाइम, और दर्द में यात्रा का तनाव — और ऑनलाइन फिजियो की वैल्यू खुद साफ़ हो जाती है।",
        list: [
          "दिल्ली ट्रैफ़िक छोड़ें — सोफे या ऑफिस चेयर से कंसल्ट करें",
          "सेम-डे स्लॉट — बुक करें और घंटों में कंसल्ट पाएं",
          "X-रे या रिपोर्ट क्लिनिक ले जाने की ज़रूरत नहीं — डिजिटल शेयर करें",
          "फॉलो-अप आसान है — आप अटेंड करने की ज़्यादा संभावना रखते हैं",
          "क्लिनिक या प्राइवेट हॉस्पिटल OPD से ज़्यादा किफायती"
        ]
      },
      {
        heading: "सेशन कैसे काम करता है — स्टेप बाय स्टेप",
        numbered: [
          "ऑनलाइन बुक करें: हमारी वेबसाइट पर स्लॉट चुनें — सुबह 7 बजे से रात 9 बजे तक",
          "₹399 पेमेंट करें अपॉइंटमेंट कन्फर्म करने के लिए (Razorpay/UPI सपोर्टेड)",
          "WhatsApp पर वीडियो लिंक के साथ कन्फर्मेशन मिलेगा",
          "वीडियो कॉल जॉइन करें — फिजियो लाइव असेसमेंट करेंगे",
          "सेशन के बाद WhatsApp पर पर्सनलाइज़्ड एक्सरसाइज़ प्लान मिलेगा",
          "प्लान ट्रैक और अपडेट करने के लिए फॉलो-अप सेशन बुक करें"
        ],
        content: "पूरा सेटअप 2 मिनट से कम में होता है। कोई ऐप डाउनलोड नहीं — किसी भी स्मार्टफोन या लैपटॉप ब्राउज़र पर काम करता है।"
      },
      {
        heading: "सेशन से पहले क्या तैयार रखें",
        list: [
          "एक शांत जगह जहाँ खड़े होकर हाथ-पैर हिला सकें",
          "आरामदायक कपड़े पहनें — प्रभावित हिस्सा दिखाना पड़ सकता है",
          "फोन या लैपटॉप को इस तरह रखें कि दोनों हाथ फ्री हों",
          "MRI/X-रे रिपोर्ट हो तो तैयार रखें (ज़रूरी नहीं)",
          "अपनी मुख्य शिकायतें नोट करें — अवधि, ट्रिगर, बेहतर/बुरा क्या लगता है"
        ]
      },
      {
        heading: "ऑनलाइन vs होम विज़िट — क्या चुनें?",
        content: "दोनों उपलब्ध हैं। यहाँ एक त्वरित गाइड है:",
        list: [
          "ऑनलाइन चुनें अगर: दर्द हल्का-मध्यम है, एक्सरसाइज़ गाइडेंस चाहिए, समय कम है या दिल्ली के बाहर हैं",
          "होम विज़िट चुनें अगर: हाथों से मैनुअल थेरेपी, TENS/IFT मशीन ट्रीटमेंट, पोस्ट-सर्जरी मोबिलाइज़ेशन चाहिए",
          "कई मरीज़ ऑनलाइन कंसल्टेशन से शुरू करते हैं, फिर हाथों-हाथ इलाज के लिए होम विज़िट बुक करते हैं — यह एक स्मार्ट कॉम्बिनेशन है"
        ]
      },
      {
        heading: "रेड फ्लैग्स — कब बिल्कुल देर न करें",
        list: [
          "अचानक तेज़ दर्द जिसमें जोड़ हिलाना संभव न हो",
          "गिरने, एक्सीडेंट या खेल चोट के बाद दर्द",
          "हाथ या पैरों में सुन्नता या झनझनाहट",
          "कमर दर्द के साथ ब्लैडर/बाउल में बदलाव (तुरंत डॉक्टर से मिलें)",
          "जोड़ दर्द या सूजन के साथ बुखार"
        ],
        warning: true
      },
      {
        heading: "ऑनलाइन कंसल्टेशन के लिए Delhi Physio At Home क्यों चुनें?",
        list: [
          "✅ सर्टिफाइड फिजियोथेरेपिस्ट — वेलनेस कोच या फिटनेस ट्रेनर नहीं",
          "✅ दिल्ली, नोएडा, गाज़ियाबाद, गुड़गांव में सेम-डे अपॉइंटमेंट",
          "✅ हिंदी और अंग्रेज़ी में कंसल्टेशन उपलब्ध",
          "✅ WhatsApp-बेस्ड फॉलो-अप — आसान और सुविधाजनक",
          "✅ सिर्फ ₹399 — किफायती विशेषज्ञ देखभाल",
          "✅ ज़रूरत हो तो होम विज़िट में अपग्रेड का विकल्प"
        ]
      }
    ]
  }
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Online Physiotherapy in Delhi — Consult From Home | Delhi Physio at Home",
  "description": "Book an online physiotherapy consultation in Delhi with a certified physiotherapist. Video call, personalised plan, same-day slots. ₹399 per session.",
  "author": { "@type": "Person", "name": "Dr. Somesh" },
  "publisher": { "@type": "Organization", "name": "Delhi Physio Home" },
  "datePublished": new Date().toISOString()
}

export default function OnlinePhysiotherapyBlog() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-primary">{c.category}</span>
            <span>|</span>
            <span>{c.date}</span>
          </div>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-primary text-white" : "bg-muted/20 text-muted-foreground"}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded ${lang === "hi" ? "bg-primary text-white" : "bg-muted/20 text-muted-foreground"}`}
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

        <article className="space-y-8">
          {c.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.heading}</h2>
              {section.content && (
                <p className="text-muted-foreground mb-3">{section.content}</p>
              )}
              {section.list && (
                <ul className={`space-y-1 ${section.warning ? "text-red-600" : "text-muted-foreground"}`}>
                  {section.list.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              )}
              {section.numbered && (
                <ol className="list-decimal ml-5 text-muted-foreground space-y-1">
                  {section.numbered.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </article>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/918130171272"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg inline-block"
          >
            Book on WhatsApp
          </a>
        </div>
        <div className="mt-8 text-center">
          <Link href="/blogs">← View All Blogs</Link>
        </div>
      </div>
    </main>
  )
}
