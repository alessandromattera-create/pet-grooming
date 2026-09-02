import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { testimonials } from "@/config/content"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function Testimonials() {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, reduced])

  return (
    <section className="relative w-full overflow-hidden bg-espresso px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal className="mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">
            Testimonials
          </span>
        </Reveal>

        <Quote className="mx-auto mb-8 size-8 text-ivory/30" />

        <div className="relative min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <p className="font-serif text-2xl leading-relaxed text-ivory md:text-3xl lg:text-4xl">
                "{testimonials[index].quote}"
              </p>
              <footer className="mt-8">
                <p className="text-sm font-medium text-ivory">{testimonials[index].author}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ivory/50">
                  {testimonials[index].pet}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-ivory" : "w-1.5 bg-ivory/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
