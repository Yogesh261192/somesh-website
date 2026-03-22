"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Ankit Gupta",
    location: "Delhi",
    rating: 5,
    text: "After my knee surgery, I was worried about recovery. Dr.Sarita's home visits made everything so convenient. Within 3 months, I was walking normally again. Highly recommended!",
  },
  {
    name: "Meera Singh",
    location: "Ghaziabad",
    rating: 5,
    text: "I suffered from chronic back pain for years. The personalized treatment plan and regular home sessions have made a huge difference. My pain has reduced by 80%!",
  },
  {
    name: "Rajesh Kumar",
    location: "Noida",
    rating: 5,
    text: "My father is 75 years old and had mobility issues. The elderly care program by Dr. Somesh has improved his balance and confidence significantly. Excellent service!",
  },
  {
    name: "Priya Malhotra",
    location: "Gurgaon",
    rating: 4,
    text: "As a sports enthusiast, I needed quick recovery from my ankle sprain. The sports injury treatment was effective and I was back on the field in 6 weeks.",
  },
  {
    name: "Vikram Sharma",
    location: "Indirapuram",
    rating: 5,
    text: "Neck pain and constant headaches were affecting my work. After 2 months of physiotherapy, I'm completely pain-free. Thank you delhiphysioathome team!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from patients who have experienced our care.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>
                      <div>
                        <p className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="pointer-events-auto -translate-x-4 rounded-full bg-background shadow-md"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="pointer-events-auto translate-x-4 rounded-full bg-background shadow-md"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* google reviews button */}
          <div classname="mt-8 flex justify-center">
            
              href="your_google_review_link_here"
              target="_blank"
              rel="noopener noreferrer"
              classname="inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="google"
                width={18}
                height={18}
              />
              ⭐ see our google reviews {'>'}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
