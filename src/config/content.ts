export interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Meet & Greet",
    description: "We welcome you and your dog into a calm space. Every visit begins with a moment of connection — a gentle greeting, a quiet pause — so your companion feels safe before anything begins.",
    image: "/process-meet.webp",
  },
  {
    number: "02",
    title: "Assessment",
    description: "We examine coat condition, skin health and temperament. Every animal is unique, so we tailor the grooming plan to their breed, coat type, age and individual sensitivities.",
    image: "/process-assess.webp",
  },
  {
    number: "03",
    title: "The Groom",
    description: "The transformation begins. Bath, blow-dry, scissoring and detailed finishing — performed with patience and professional precision, always reading your pet's comfort level throughout.",
    image: "/process-groom.webp",
  },
  {
    number: "04",
    title: "The Reveal",
    description: "A coat that is healthy, beautiful and touched by genuine care. We walk you through the result and share simple notes on how to maintain it at home between visits.",
    image: "/process-reveal.webp",
  },
]

export interface Testimonial {
  quote: string
  author: string
  pet: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "The level of care and attention is unlike anywhere else. My rescue came in anxious and left calm, beautiful, and genuinely happy.",
    author: "Sofia Bianchi",
    pet: "Luna · Lagotto Romagnolo",
  },
  {
    quote: "It doesn't feel like a grooming appointment — it feels like a spa visit for my dog. The difference in his coat is remarkable every single time.",
    author: "Marco Colombo",
    pet: "Bruno · Golden Retriever",
  },
  {
    quote: "I have never seen my poodle look this refined. The hand scissoring is true artistry. Worth every moment of the drive across town.",
    author: "Giulia Romano",
    pet: "Pearl · Toy Poodle",
  },
]

export interface Benefit {
  number: string
  title: string
  description: string
}

export const benefits: Benefit[] = [
  { number: "01", title: "Personalized Care", description: "No two dogs are the same. Every session is shaped around your companion's breed, coat, age and temperament — never a template." },
  { number: "02", title: "Premium Products", description: "Professional, pH-balanced shampoos and conditioners selected by coat type, for skin that stays healthy between visits." },
  { number: "03", title: "A Calm Environment", description: "A serene single-dog studio — no noisy queues, no rush. Just quiet, deliberate work that keeps anxious pets at ease." },
  { number: "04", title: "Considered Detail", description: "From scissor work to paw pads, no step is rushed. Every coat is finished with the kind of precision you can feel." },
  { number: "05", title: "Twelve Years of Trust", description: "Over a decade of professional grooming experience — and a reputation built one careful, happy client at a time." },
  { number: "06", title: "Wellbeing First", description: "Your pet's comfort and health always come before aesthetics. We slow down, read the animal, and never push past their limits." },
]
