import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const recentBlogs = [
  {
    title: "Desk Job? Don't Ignore Back & Neck Pain — Complete Guide",
    excerpt: "If you spend 8-10 hours a day in front of a laptop, you're at high risk for back and neck pain. Poor posture and a sedentary lifestyle are silently damaging your spine.",
    date: "Mar 21, 2026",
    readTime: "5 min read",
    slug: "desk-job-back-neck-pain",
    imageUrl: "https://images.unsplash.com/photo-1559311173-e01ef6f19c65" 
  },
  {
    title: "Knee Surgery Recovery at Home in Delhi NCR: A Complete Guide",
    excerpt: "Everything you need to know about post-operative physiotherapy at home after knee replacement or ACL surgery in Delhi, Ghaziabad, Noida & Gurgaon.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    slug: "knee-surgery-recovery", 
    imageUrl: "https://images.unsplash.com/photo-1631217314941-e894886fbb00"
  },
  {
    title: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises",
    excerpt: "Herniated/slip disc and sciatica can be treated at home with guided physiotherapy. Includes exercises, lifestyle fixes, and same-day home booking.",
    date: "Apr 02, 2026",
    readTime: "9 min read",
    slug: "slip-disc-treatment-at-home-delhi",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
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
            <div key={index} className="flex flex-col bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blogs/${blog.slug}`} className="relative h-48 w-full overflow-hidden block">
                <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
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