import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"
import { processSteps } from "@/config/content"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function Process() {
  const isMobile = useIsMobile()
  const reduced = usePrefersReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  if (isMobile || reduced) {
    return (
      <section id="process" className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our Process
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-16 font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              A journey of care.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-12">
            {processSteps.map((step) => (
              <Reveal key={step.number} delay={0.1}>
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
                  <div className="sm:w-1/2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[4/3] w-full rounded-sm object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <span className="font-serif text-5xl text-muted-foreground/30">{step.number}</span>
                    <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">{step.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="process" ref={containerRef} className="relative h-[400vh] w-full bg-background">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        {/* Header */}
        <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-10">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our Process
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              A journey<br />of care.
            </h2>
          </Reveal>
        </div>

        {/* Horizontal scrolling panels */}
        <motion.div style={{ x }} className="flex gap-6 pl-[45vw] pr-10">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative flex h-[70vh] w-[80vw] shrink-0 flex-col justify-end overflow-hidden rounded-sm md:w-[60vw] lg:w-[50vw]"
            >
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
              <div className="relative z-10 p-8 md:p-12">
                <span className="font-serif text-6xl text-ivory/50 md:text-7xl">{step.number}</span>
                <h3 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70 md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
