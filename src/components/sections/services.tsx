import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Tag } from "lucide-react"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal"
import { services } from "@/config/services"


export function Services() {
  const [activeId, setActiveId] = useState<string | null>(services[0]?.id ?? null)
  const activeService = services.find((s) => s.id === activeId)

  return (
    <section id="services" className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                What We Offer
              </span>
            </Reveal>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Services crafted<br />with intention.
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Each service is tailored to your pet's breed, temperament, and individual needs — never a one-size-fits-all approach.
            </p>
          </Reveal>
        </div>

        {/* Service list + preview */}
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* List */}
          <StaggerContainer className="flex flex-col">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div
                  className="group cursor-pointer border-t border-border py-6 transition-colors hover:border-foreground/30"
                  onMouseEnter={() => setActiveId(service.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(service.id === activeId ? null : service.id)}
                  data-cursor="view"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs text-muted-foreground">{service.category}</span>
                      <h3 className="font-serif text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                    <span className="hidden text-sm text-muted-foreground sm:block">
                      {service.shortDescription}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-border" />
          </StaggerContainer>

          {/* Preview panel */}
          <div className="relative hidden md:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {activeService ? (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-sm border border-border"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={activeService.image}
                        alt={activeService.title}
                        className="size-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl text-foreground">{activeService.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {activeService.longDescription}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-4">
                        {activeService.duration && (
                          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="size-3.5" /> {activeService.duration}
                          </span>
                        )}
                        {activeService.price && (
                          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                            <Tag className="size-3.5" /> {activeService.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-muted/30"
                  >
                    <p className="max-w-[200px] text-center text-sm text-muted-foreground">
                      Hover or tap a service to discover more.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile expanded details */}
        <div className="mt-8 md:hidden">
          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-sm border border-border p-4">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="aspect-[4/3] w-full rounded-sm object-cover"
                  />
                  <h3 className="mt-4 font-serif text-xl text-foreground">{activeService.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activeService.longDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {activeService.duration && (
                      <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="size-3.5" /> {activeService.duration}
                      </span>
                    )}
                    {activeService.price && (
                      <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Tag className="size-3.5" /> {activeService.price}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
