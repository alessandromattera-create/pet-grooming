import { InstagramIcon } from "@/components/icons/social-icons"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const instagramImages = [
  "/gallery-1.webp",
  "/gallery-2.webp",
  "/gallery-3.webp",
  "/gallery-7.webp",
  "/gallery-5.webp",
  "/gallery-8.webp",
  "/gallery-4.webp",
  "/gallery-6.webp",
]

export function InstagramSection() {
  return (
    <section className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Instagram
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Follow the transformations.
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.05}>
          {instagramImages.map((src, i) => (
            <StaggerItem key={i}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm"
                data-cursor="view"
                aria-label="View on Instagram"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 opacity-0 transition-all duration-500 group-hover:bg-espresso/40 group-hover:opacity-100">
                  <InstagramIcon className="size-6 text-ivory" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="size-4" /> Follow on Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
