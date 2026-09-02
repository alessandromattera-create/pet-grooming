export interface GalleryItem {
  id: string
  src: string
  alt: string
  span: "tall" | "wide" | "square" | "regular"
  category: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/gallery-1.webp",
    alt: "Beautifully groomed white poodle portrait",
    span: "tall",
    category: "Groomed Dogs",
  },
  {
    id: "g2",
    src: "/gallery-2.webp",
    alt: "Close-up of groomed spaniel with silky ears",
    span: "regular",
    category: "Details",
  },
  {
    id: "g3",
    src: "/gallery-3.webp",
    alt: "Freshly groomed terrier standing proudly",
    span: "regular",
    category: "Groomed Dogs",
  },
  {
    id: "g4",
    src: "/gallery-4.webp",
    alt: "Detail of perfectly groomed fur texture",
    span: "tall",
    category: "Details",
  },
  {
    id: "g5",
    src: "/gallery-5.webp",
    alt: "Calm cat being groomed",
    span: "regular",
    category: "Happy Pets",
  },
  {
    id: "g6",
    src: "/gallery-6.webp",
    alt: "Interior of premium pet grooming studio",
    span: "wide",
    category: "Salon",
  },
  {
    id: "g7",
    src: "/gallery-7.webp",
    alt: "Small groomed dog with a bow",
    span: "regular",
    category: "Happy Pets",
  },
  {
    id: "g8",
    src: "/gallery-8.webp",
    alt: "Close-up of a happy dog face after grooming",
    span: "regular",
    category: "Happy Pets",
  },
]

export const beforeAfter = {
  before: "/before-after-before.webp",
  after: "/before-after-after.webp",
  beforeAlt: "Dog before grooming — messy, ungroomed coat",
  afterAlt: "Dog after grooming — pristine, clean, beautifully styled",
}
