import { Reveal, ImageReveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"

export function About() {
  return (
    <section id="about" className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
        {/* Portrait */}
        <div className="relative">
          <ImageReveal
            src="/about-groomer.webp"
            alt="Portrait of the professional pet groomer"
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
            imgClassName="size-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <Reveal className="mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About the Groomer
            </span>
          </Reveal>

          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            {siteConfig.business.owner}
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
              {siteConfig.business.yearsOfExperience} years of experience
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {siteConfig.business.longDescription !== "[LONG BUSINESS DESCRIPTION]"
                ? siteConfig.business.longDescription
                : "Every animal that walks through our door is met with patience, understanding, and genuine affection. I believe grooming is not just about aesthetics — it is about trust, comfort, and the quiet bond between groomer and pet. That philosophy shapes every session, every scissor stroke, every gentle word."}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              My approach is simple: slow down, read the animal, and never rush. A calm pet is a beautiful pet.
            </p>
          </Reveal>

          {/* Signature */}
          <Reveal delay={0.45}>
            <div className="mt-10 border-t border-border pt-6">
              <p className="font-serif text-lg italic text-foreground">
                — {siteConfig.business.owner}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
