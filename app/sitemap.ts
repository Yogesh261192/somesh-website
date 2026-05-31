import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.delhiphysioathome.com'

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/faqs',
    '/partner-with-us',
    '/virtual-consultation',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const blogs = [
    'desk-job-back-neck-pain',
    'frozen-shoulder-treatment-at-home-delhi',
    'heel-pain-treatment-at-home-delhi',
    'knee-surgery-recovery-delhi-ncr',
    'multiple-sclerosis-physiotherapy',
    'online-physiotherapy-delhi',
    'parkinsons-disease',
    'physiotherapist-near-me-at-home-delhi',
    'post-workout-pain-gym-delhi',
    'slip-disc-treatment-at-home-delhi',
    'stroke-rehabilitation-delhi-ncr',
  ].map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const locations = [
    'delhi',
    'ghaziabad',
    'gurgaon',
    'indirapuram',
    'noida',
    'raj-nagar',
  ].map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const services = [
    'back-pain-treatment',
    'elderly-mobility-physiotherapy',
    'neck-pain-therapy',
    'post-surgery-rehabilitation',
    'sports-injury-recovery',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...blogs, ...locations, ...services]
}