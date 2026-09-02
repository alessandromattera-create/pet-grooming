import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal"
import { galleryItems, type GalleryItem } from "@/config/gallery"
import { cn } from "@/lib/utils"

const spanClasses: Record<GalleryItem["span"], string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "aspect-square",
  regular: "",
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length))
  }, [])
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
    )
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <section id="gallery" className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Gallery
              </span>
            </Reveal>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Moments of transformation.
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A curated selection of our work — from first baths to final reveals.
            </p>
          </Reveal>
        </div>

        {/* Masonry grid */}
        <StaggerContainer
          className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4"
          stagger={0.06}
        >
          {galleryItems.map((item, index) => (
            <StaggerItem
              key={item.id}
              className={cn(spanClasses[item.span], "group relative overflow-hidden rounded-sm")}
            >
              <button
                onClick={() => setLightboxIndex(index)}
                className="size-full"
                data-cursor="view"
                aria-label={`View image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-90">
                  {item.category}
                </span>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/95 p-6"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 flex items-center justify-center rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 z-10 flex items-center justify-center rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 z-10 flex items-center justify-center rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ivory/50">
              {lightboxIndex + 1} / {galleryItems.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
