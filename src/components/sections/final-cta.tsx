import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/motion/magnetic-button"
import { WebGLAtmosphere } from "@/components/webgl/webgl-atmosphere"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig, getWhatsAppUrl } from "@/config/site"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function FinalCTA() {
  const reduced = usePrefersReducedMotion()
  const headlineLines = siteConfig.finalCta.headline.split("\n")

  return (
    <section className="relative w-full overflow-hidden bg-espresso">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/final-cta.webp"
          alt="Beautifully groomed dog in warm studio light"
          className="size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/85" />
      </div>

      {/* WebGL atmosphere */}
      <WebGLAtmosphere className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 py-32 text-center md:px-10 md:py-48">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? {} : { y: "110%" }}
                  whileInView={reduced ? {} : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-ivory/60 md:text-lg">
              {siteConfig.finalCta.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <a href="#contact">
                  <Mail className="size-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
