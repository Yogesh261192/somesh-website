import Link from "next/link"

const blogs = [
  {
    title: "Knee Surgery Recovery at Home in Delhi NCR: A Complete Guide",
    excerpt: "Everything you need to know about post-operative physiotherapy at home after knee replacement or ACL surgery in Delhi, Ghaziabad, Noida & Gurgaon.",
    date: "March 23, 2026",
    slug: "knee-surgery-recovery-delhi-ncr",
    category: "Post-Surgery Recovery"
  },
  {
    title: "Desk Job? Don't Ignore Back & Neck Pain — Complete Guide for Young Professionals",
    excerpt: "A complete guide for 25-35 year old professionals — causes, prevention tips and the role of physiotherapy.25-35 saal ke professionals ke liye complete guide — causes, prevention tips aur physiotherapy ke fayde.",
    date: "March 21, 2026",
    slug: "desk-job-back-neck-pain",
    category: "Back & Neck Pain"
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Health & Physiotherapy Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tips, advice, and insights from our physiotherapy experts.
          </p>
        </div>

        <div className="grid gap-8">
          {blogs.map((blog) => (
            <div key={blog.slug} className="bg-white rounded-2xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">{blog.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {blog.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {blog.excerpt}
              </p>
              <a href={`/blogs/${blog.slug}`} className="text-sm font-medium text-foreground hover:underline block">
                Read More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Need Physiotherapy at Home?</h2>
          <p className="text-muted-foreground mb-4">Book a session with our certified physiotherapists today.</p>
          <a
            href="https://wa.me/918130171272?text=Hi, I would like to book a physiotherapy session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
