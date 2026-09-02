import { Reveal, TextReveal, ImageReveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"

export function BrandIntro() {
  return (
    <section className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        {/* Text */}
        <div className="order-2 md:order-1">
          <Reveal className="mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our Philosophy
            </span>
          </Reveal>

          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <TextReveal text={siteConfig.brand.statement} />
          </h2>

          <Reveal delay={0.3} className="mt-8 max-w-md">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {siteConfig.brand.body.replace("[BUSINESS_NAME]", siteConfig.business.name)}
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-10">
            <div className="flex items-center gap-4">
              <span className="font-serif text-5xl text-foreground md:text-6xl">
                {siteConfig.business.yearsOfExperience}
              </span>
              <span className="max-w-[120px] text-sm leading-snug text-muted-foreground">
                years of devoted grooming experience
              </span>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <ImageReveal
            src="/intro-image.webp"
            alt="Close-up of a well-groomed dog with pristine fur"
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
            imgClassName="size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
