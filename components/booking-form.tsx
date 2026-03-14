"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

const cities = [
  "Delhi",
  "Ghaziabad",
  "Noida",
  "Gurgaon",
  "Indirapuram",
  "Raj Nagar",
  "Other",
]

const problems = [
  "Back Pain",
  "Neck Pain",
  "Post Surgery Rehabilitation",
  "Sports Injury",
  "Elderly Mobility",
  "Joint Pain",
  "Stroke Recovery",
  "Other",
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    problem: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="border-border/50 bg-card">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 
            className="text-xl font-semibold text-foreground mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Appointment Request Received!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City / Area</Label>
            <Select
              value={formData.city}
              onValueChange={(value) => handleChange("city", value)}
              required
            >
              <SelectTrigger id="city">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Type of Problem</Label>
            <Select
              value={formData.problem}
              onValueChange={(value) => handleChange("problem", value)}
              required
            >
              <SelectTrigger id="problem">
                <SelectValue placeholder="Select your problem" />
              </SelectTrigger>
              <SelectContent>
                {problems.map((problem) => (
                  <SelectItem key={problem} value={problem}>
                    {problem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Problem Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell us more about your condition..."
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By submitting this form, you agree to our privacy policy and consent to be contacted regarding your appointment.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
