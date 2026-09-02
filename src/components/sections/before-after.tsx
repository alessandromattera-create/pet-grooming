import { useRef, useCallback, useState } from "react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"
import { beforeAfter } from "@/config/gallery"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function BeforeAfter() {
  const reduced = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => setDragging(false)

  return (
    <section className="relative w-full bg-muted/30 px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Before / After
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              The transformation speaks for itself.
            </h2>
          </Reveal>
        </div>

        {/* Comparison slider */}
        <Reveal delay={0.2}>
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={containerRef}
              className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-sm md:aspect-[16/9]"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onTouchStart={(e) => e.preventDefault()}
            >
              {/* After image (base) */}
              <img
                src={beforeAfter.after}
                alt={beforeAfter.afterAlt}
                className="absolute inset-0 size-full object-cover"
                draggable={false}
              />
              <span className="absolute bottom-4 right-4 rounded-full bg-espresso/70 px-3 py-1 text-xs uppercase tracking-widest text-ivory">
                After
              </span>

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
              >
                <img
                  src={beforeAfter.before}
                  alt={beforeAfter.beforeAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
                  draggable={false}
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-espresso/70 px-3 py-1 text-xs uppercase tracking-widest text-ivory">
                  Before
                </span>
              </div>

              {/* Divider handle */}
              <div
                className="absolute inset-y-0 z-10 w-0.5 bg-ivory"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-espresso">
                    <path d="M9 7L4 12L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7L20 12L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Drag to reveal the difference
          </p>
        </Reveal>
      </div>
    </section>
  )
}
