import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const recentBlogs = [
  {
    title: "Knee Surgery Recovery at Home in Delhi NCR",
    excerpt: "Everything you need to know about post-operative physiotherapy at home after knee replacement or ACL surgery.",
    date: "March 23, 2026",
    readTime: "8 min read",
    slug: "knee-surgery-recovery-delhi-ncr",
    imageUrl: "/assets/kneeblog.webp" 
  },
  {
    title: "Desk Job? Don't Ignore Back & Neck Pain",
    excerpt: "Complete guide for young professionals — causes, prevention tips and physiotherapy benefits.",
    date: "March 21, 2026",
    readTime: "6 min read",
    slug: "desk-job-back-neck-pain", 
    imageUrl: "/assets/deskjob_blog.webp"
  },
  {
    title: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises",
    excerpt: "Home-based slip disc and sciatica physiotherapy with pain relief exercises.",
    date: "Apr 02, 2026",
    readTime: "7 min read",
    slug: "slip-disc-treatment-at-home-delhi",
    imageUrl: "/assets/sciaticablog.webp"
  }
]

export function RecentBlogsSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>Latest Health Tips & Articles</h2>
            <p className="mt-4 text-lg text-muted-foreground">Expert advice, exercises, and recovery tips from our experienced physiotherapists.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blogs" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog, index) => (
            <div key={index} className="flex flex-col h-full bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blogs/${blog.slug}`} className="relative aspect-video w-full shrink-0 overflow-hidden block">
                <img src={blog.imageUrl} alt={blog.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <Link href={`/blogs/${blog.slug}`} className="group">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}