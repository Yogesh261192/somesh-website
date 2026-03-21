import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-6 py-16 sm:px-12 sm:py-20 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative">
            <h2 
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
              Book your first home physiotherapy session today and take the first step towards a pain-free life.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a
                  href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                // className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="tel:+918130171272">
                  <Phone className="h-4 w-4" />
                  Call +91 81301 71272
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
