import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebGLAtmosphere } from "@/components/webgl/webgl-atmosphere"
import { MagneticButton } from "@/components/motion/magnetic-button"
import { siteConfig, getWhatsAppUrl } from "@/config/site"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const headlineLines = siteConfig.hero.headline.split("\n")

  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden bg-espresso">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-main.webp"
          alt="Beautifully groomed dog in warm studio lighting"
          className="size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/30 to-espresso/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/20" />
      </div>

      {/* WebGL atmosphere */}
      <WebGLAtmosphere className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-ivory/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              {siteConfig.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? {} : { y: "110%" }}
                  animate={reduced ? {} : { y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-base leading-relaxed text-ivory/70 md:text-lg"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-ivory px-8 text-espresso hover:bg-ivory/90"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Book via WhatsApp
                </a>
              </Button>
            </MagneticButton>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
            >
              Explore Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Location indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 flex items-center gap-2 text-xs uppercase tracking-widest text-ivory/50"
          >
            <MapPin className="size-3" />
            {siteConfig.location.city} · {siteConfig.location.country}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-ivory/40">Scroll</span>
          <span className="h-12 w-px bg-ivory/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
