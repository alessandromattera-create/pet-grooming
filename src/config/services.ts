export interface Service {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  duration?: string
  price?: string
  category: string
}

export const services: Service[] = [
  {
    id: "full-groom",
    title: "Full Grooming",
    shortDescription: "A complete transformation from nose to tail.",
    longDescription: "Our signature service. A thorough grooming session that includes bath, blow-dry, trimming, nail care, ear cleaning, and finishing styling tailored to your pet's breed and character.",
    image: "/service-full-groom.webp",
    duration: "2 — 3 hours",
    price: "From €75",
    category: "Signature",
  },
  {
    id: "bath-dry",
    title: "Bath & Blow-Dry",
    shortDescription: "Deep cleansing with premium products.",
    longDescription: "A luxurious wash using professional-grade, pH-balanced products suited to your pet's coat type, followed by a gentle blow-dry and brush-out for a soft, clean finish.",
    image: "/service-bath.webp",
    duration: "1 hour",
    price: "From €75",
    category: "Essential",
  },
  {
    id: "scissoring",
    title: "Hand Scissoring",
    shortDescription: "Sculpted precision by expert hands.",
    longDescription: "An artistry-driven finishing technique where the coat is shaped entirely by hand with scissors, achieving a natural, flowing silhouette that clipper work alone cannot match.",
    image: "/service-scissoring.webp",
    duration: "1 — 2 hours",
    price: "From €75",
    category: "Signature",
  },
  {
    id: "brushing",
    title: "Brushing & De-shedding",
    shortDescription: "Tangle-free, healthy, glowing coats.",
    longDescription: "A meticulous brushing session that removes loose fur, prevents matting, and stimulates natural oils for a healthier, shinier coat. Especially recommended for double-coated breeds.",
    image: "/service-brushing.webp",
    duration: "45 min",
    category: "Essential",
  },
  {
    id: "nail-care",
    title: "Nail & Paw Care",
    shortDescription: "Precision trimming for comfort and health.",
    longDescription: "Careful nail trimming and filing, paw pad conditioning, and hygiene checks to ensure your pet walks comfortably and stays healthy between full grooming sessions.",
    image: "/service-nails.webp",
    duration: "30 min",
    category: "Add-on",
  },
  {
    id: "puppy-groom",
    title: "Puppy's First Groom",
    shortDescription: "A gentle introduction to the salon.",
    longDescription: "A calm, shortened session designed to familiarize puppies with the grooming environment — gentle handling, soft sounds, and positive reinforcement to build lifelong confidence.",
    image: "/process-reveal.webp",
    duration: "45 min",
    category: "Specialty",
  },
]
