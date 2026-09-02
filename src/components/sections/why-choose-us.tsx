import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal"
import { benefits } from "@/config/content"

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-muted/30 px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              The difference is in the details.
            </h2>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <StaggerContainer className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.number}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-foreground hover:text-ivory md:p-10">
                <span className="font-serif text-sm text-muted-foreground transition-colors group-hover:text-ivory/60">
                  {benefit.number}
                </span>
                <h3 className="mt-6 font-serif text-xl text-foreground transition-colors group-hover:text-ivory md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ivory/70">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
