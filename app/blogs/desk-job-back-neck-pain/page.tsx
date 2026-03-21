import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Back & Neck Pain from Desk Jobs | Young Professionals Guide | DelhiPhysio@Home",
  description: "Suffering from back pain or neck pain due to long hours at your desk? This guide for young professionals (25-35) explains causes, prevention tips, and how physiotherapy can help in Delhi NCR.",
  keywords: "back pain young professionals, neck pain work from home, office posture tips, physiotherapy Delhi NCR, desk job back pain, cervical pain treatment Delhi, home physiotherapy Ghaziabad, back pain relief Noida",
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              Back Pain & Neck Pain
            </span>
            <span className="text-xs text-muted-foreground">March 21, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Desk Job Kar Rahe Ho? Back & Neck Pain Ko Ignore Mat Karo — Young Professionals Ke Liye Complete Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            25 se 35 saal ki umar mein back pain aur neck pain ka hona aajkal aam baat ho gayi hai. Lagatar laptop pe kaam, galat posture, aur kam physical activity — yeh sab milkar aapki sehat bigaad rahe hain. Jaanein kya karna chahiye.
          </p>
        </div>

        {/* Article content */}
        <article className="prose prose-slate max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Kyun Ho Raha Hai Yeh Dard?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Agar aap din mein 8-10 ghante laptop ya computer ke saamne baithte hain, toh aapki spine par bahut zyada pressure aata hai. Galat chair, screen ki height aur sar ko aage jhukane ki aadat — yeh sab milkar cervical spondylosis, muscle stiffness aur chronic back pain ka karan bante hain.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Studies ke mutabik, 25-35 saal ke professionals mein back aur neck pain ke cases pichle 5 saalon mein 40% se zyada badhe hain — aur iska sabse bada karan hai sedentary lifestyle aur work from home culture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Sabse Common Symptoms Jo Ignore Nahi Karne Chahiye</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Subah uthte waqt gardan ya kamar mein akadahat</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Lambe time baithne ke baad uthna mushkil lagta ho</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Sar dard jo gardan se shuru hota ho</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Haath ya ungliyon mein soonapan ya jhanjhanahat</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Shoulders mein constant tightness</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Kaam karte waqt concentrate karna mushkil lagta ho</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5 Cheezen Jo Aap Abhi Se Kar Sakte Hain</h2>

            <div className="space-y-5">
              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1">1. Screen Ki Height Theek Karein</h3>
                <p className="text-muted-foreground text-sm">Aapki screen aankho ke level par honi chahiye — neeche ya zyada upar nahi. Sar ko aage jhukana cervical vertebrae par 4-5 guna zyada pressure dalta hai.</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1">2. Har 45 Minute Mein Ek Baar Uthein</h3>
                <p className="text-muted-foreground text-sm">Sirf 2-3 minute ka break bhi muscles ko relax karne ka mauka deta hai. Phone mein reminder set karein.</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1">3. Yeh 3 Simple Stretches Rozana Karein</h3>
                <p className="text-muted-foreground text-sm">
                  <strong>Chin Tuck:</strong> Thodhi ko andar ki taraf kheenchein, 5 second rokein — 10 baar karein.<br/>
                  <strong>Shoulder Roll:</strong> Dono kandhon ko peeche ki taraf ghoomayein — 10 baar.<br/>
                  <strong>Cat-Cow Stretch:</strong> Charon haath-paon par aayein aur kamar ko upar-neeche karein — 10 baar.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1">4. Sone Ka Tarika Theek Karein</h3>
                <p className="text-muted-foreground text-sm">Bahut zyada mota ya bahut patla takiya back aur neck pain ka karan ban sakta hai. Ek medium-firm pillow use karein jo gardan ko neutral position mein rakhe.</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1">5. Paani Poora Piyein</h3>
                <p className="text-muted-foreground text-sm">Spinal discs ka 80% hissa paani hota hai. Dehydration directly disc health ko affect karta hai. Din mein kam se kam 2.5-3 litre paani piyein.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Physiotherapy Kyun Zaroori Hai?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bahut log pain killers kha lete hain ya dard ko ignore karte hain — lekin yeh sirf temporary relief deta hai. Agar dard 2 hafte se zyada hai, toh yeh sign hai ki aapko professional help chahiye.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Ek certified physiotherapist aapki exact problem diagnose karke personalized exercise plan banata hai. Manual therapy, dry needling, aur targeted exercises se root cause treat hota hai — sirf symptoms nahi.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Aur sabse achhi baat? <strong>Ab clinic jaane ki zaroorat nahi.</strong> DelhiPhysio@Home ke certified physiotherapists aapke ghar aate hain — Delhi, Noida, Ghaziabad, Indirapuram aur Gurgaon mein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Kab Turant Doctor Se Milna Chahiye?</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">⚠</span> Haath ya paon mein kamzori aa rahi ho</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">⚠</span> Dard raat ko zyada hota ho</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">⚠</span> Bladder ya bowel control mein takleef ho</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">⚠</span> Dard 4 hafte se zyada ho aur badh raha ho</li>
            </ul>
          </section>

        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Ghar Baithe Physiotherapy Book Karein</h2>
          <p className="text-muted-foreground mb-6">
            Delhi NCR mein certified physiotherapists aapke ghar aakar treatment denge. Pehla consultation book karein aaj hi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918130171272?text=Hi, I read your blog on back and neck pain and would like to book a session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              WhatsApp Par Book Karein
            </a>
            <a
              href="tel:+918130171272"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Call Karein: +91 81301 71272
            </a>
          </div>
        </div>

        {/* Back to blogs */}
        <div className="mt-8 text-center">
          <a href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Sabhi Blogs Dekhein
          </a>
        </div>

      </div>
    </main>
  )
}
