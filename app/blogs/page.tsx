import { Metadata } from 'next'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Physiotherapy Blog & Health Tips | Delhi Physio At Home",
  description: "Read the latest articles, health tips, and expert advice on physiotherapy, pain management, and rehabilitation from our certified physiotherapists.",
}

const blogs = [
  {
  title: "Online Physiotherapy in Delhi — Real Treatment From Home, No Travel Needed",
  description: "Consult a certified physiotherapist via video call from home. Same-day slots, personalised plan, ₹399 per session.",
  date: "April 23, 2026",
  readTime: "7 min read",
  category: "Online Physiotherapy",
  href: "/blogs/online-physiotherapy-delhi"
},
  {
    title: "Heel Pain (Plantar Fasciitis) Treatment at Home in Delhi NCR",
    description: "Suffering from morning heel pain? Learn causes, exercises, and how home physiotherapy helps.",
    date: "April 10, 2026",
    readTime: "6 min read",
    category: "Foot Pain",
    href: "/blogs/heel-pain-treatment-at-home-delhi"
  },
  {
    title: "Parkinson's Disease & Home Physiotherapy",
    description: "How home physiotherapy for Parkinson's Disease supports movement and balance.",
    date: "April 5, 2026",
    readTime: "7 min read",
    category: "Neurological Rehabilitation",
    href: "/blogs/parkinsons-disease"
  },
  {
    title: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises",
    description: "Home-based slip disc and sciatica physiotherapy with pain relief exercises.",
    date: "April 2, 2026",
    readTime: "7 min read",
    category: "Sciatica & Slip Disc",
    href: "/blogs/slip-disc-treatment-at-home-delhi"
  },
  {
    title: "Frozen Shoulder Treatment Guide",
    description: "Frozen shoulder ka ghar par ilaj — stage-wise complete guide.",
    date: "March 30, 2026",
    readTime: "8 min read",
    category: "Shoulder Pain",
    href: "/blogs/frozen-shoulder-treatment-at-home-delhi"
  },
  {
    title: "Knee Surgery Recovery at Home in Delhi NCR",
    description: "Everything you need to know about post-operative physiotherapy at home after knee replacement or ACL surgery.",
    date: "March 23, 2026",
    readTime: "8 min read",
    category: "Post-Surgery Recovery",
    href: "/blogs/knee-surgery-recovery-delhi-ncr"
  },
  {
    title: "Desk Job? Don't Ignore Back & Neck Pain",
    description: "Complete guide for young professionals — causes, prevention tips and physiotherapy ke fayde.",
    date: "March 21, 2026",
    readTime: "6 min read",
    category: "Back & Neck Pain",
    href: "/blogs/desk-job-back-neck-pain"
  }
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Health & Physiotherapy Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, advice, and insights from our physiotherapy experts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-3 font-medium bg-primary/10 w-fit px-3 py-1 rounded-full">
                  {blog.category}
                </div>
                <CardTitle className="text-xl leading-tight mb-2">
                  <Link href={blog.href} className="hover:text-primary transition-colors">
                    {blog.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base line-clamp-3">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4 flex items-center justify-between border-t border-border/50 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {blog.readTime}
                  </span>
                </div>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary -mr-2">
                  <Link href={blog.href}>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}