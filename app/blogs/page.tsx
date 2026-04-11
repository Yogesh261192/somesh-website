import Link from "next/link"

const blogs = [
  {
    title: "Heel Pain (Plantar Fasciitis) Treatment at Home in Delhi NCR",
    excerpt: "Suffering from morning heel pain? Learn causes, exercises, and how home physiotherapy helps.",
    date: "April 10, 2026",
    slug: "heel-pain-treatment-at-home-delhi",
    category: "Foot Pain"
  },
  {
    title: "Parkinson's Disease",
    excerpt: "How home physiotherapy for Parkinson's Disease supports movement and balance.",
    date: "April 5, 2026",
    slug: "parkinsons-disease",
    category: "Neurological Rehabilitation"
  },
  {
    title: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises",
    excerpt: "Home-based slip disc and sciatica physiotherapy with pain relief exercises.",
    date: "April 2, 2026",
    slug: "slip-disc-treatment-at-home-delhi",
    category: "Sciatica & Slip Disc"
  },
  {
    title: "Frozen Shoulder Treatment Guide",
    excerpt: "Complete frozen shoulder physiotherapy guide for Delhi NCR.",
    date: "March 30, 2026",
    slug: "frozen-shoulder-treatment-at-home-delhi",
    category: "Shoulder Pain"
  },
  {
    title: "Knee Surgery Recovery at Home",
    excerpt: "Post knee surgery physiotherapy and recovery timeline.",
    date: "March 23, 2026",
    slug: "knee-surgery-recovery-delhi-ncr",
    category: "Post Surgery"
  },
  {
    title: "Desk Job Back & Neck Pain Guide",
    excerpt: "Complete guide for office professionals suffering from back & neck pain.",
    date: "March 21, 2026",
    slug: "desk-job-back-neck-pain",
    category: "Back & Neck Pain"
  }
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-4xl px-4">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Health & Physiotherapy Blog
        </h1>

        <p className="text-center text-muted-foreground mb-10">
          Tips, advice, and insights from our physiotherapy experts.
        </p>

        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog.slug} className="border p-6 rounded-xl">
              
              <div className="flex gap-3 mb-2">
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {blog.date}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-sm text-muted-foreground mb-4">
                {blog.excerpt}
              </p>

              <Link href={`/blogs/${blog.slug}`}>
                Read More →
              </Link>

            </div>
          ))}
        </div>

      </div>
    </main>
  )
}