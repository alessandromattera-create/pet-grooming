export const siteConfig = {
  business: {
    name: "Lume Pet Studio",
    tagline: "Grooming with patience, precision and care.",
    shortDescription: "A calm, design-led grooming studio for dogs who deserve the very best.",
    longDescription: "Lume Pet Studio is a quiet grooming space where beautiful results begin with trust. Every appointment is shaped around your dog's coat, character and comfort.",
    owner: "Elena Rossi",
    yearsOfExperience: "12",
  },

  contact: {
    phone: "+39 02 5555 0188",
    whatsapp: "+39 02 5555 0188",
    whatsappMessage: "Hello, I would like to book a grooming appointment.",
    email: "ciao@lumepetstudio.it",
  },

  location: {
    address: "Via San Vittore 18",
    city: "Milano",
    postalCode: "20123",
    country: "Italy",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+San+Vittore+18+Milano",
  },

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },

  openingHours: [
    { day: "Monday", hours: "9:00 — 18:00" },
    { day: "Tuesday", hours: "9:00 — 18:00" },
    { day: "Wednesday", hours: "9:00 — 18:00" },
    { day: "Thursday", hours: "9:00 — 18:00" },
    { day: "Friday", hours: "9:00 — 18:00" },
    { day: "Saturday", hours: "9:00 — 16:00" },
    { day: "Sunday", hours: "Closed" },
  ],

  hero: {
    eyebrow: "Calm care · Milano",
    headline: "Where every coat\nbecomes a masterpiece.",
    subheadline: "A slower, more thoughtful approach to grooming — for coats that feel as good as they look.",
  },

  brand: {
    statement: "Every coat deserves expert care.",
    body: "Lume Pet Studio combines professional grooming techniques with patience, care and attention to every individual animal.",
  },

  finalCta: {
    headline: "Because they deserve\nmore than just a grooming.",
    subheadline: "Give your dog an appointment that feels calm, considered and completely their own.",
  },

  seo: {
    title: "Lume Pet Studio — Premium Dog Grooming in Milano",
    description: "A calm, design-led dog grooming studio in Milano. Book a considered grooming appointment via WhatsApp.",
    keywords: "dog grooming Milano, pet grooming, professional grooming, grooming studio, pet care",
    url: "https://lumepetstudio.it",
  },
} as const

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage)
  return `https://wa.me/${number}?text=${text}`
}
