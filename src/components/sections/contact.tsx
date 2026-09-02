import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, Loader2 } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { siteConfig, getWhatsAppUrl } from "@/config/site"
import { services } from "@/config/services"

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  petName: z.string().optional(),
  petType: z.string().optional(),
  petBreed: z.string().optional(),
  requestedService: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, "You must accept the privacy policy"),
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      petName: "",
      petType: "",
      petBreed: "",
      requestedService: "",
      preferredDate: "",
      message: "",
      privacy: false,
    },
  })

  const onSubmit = async (data: FormValues) => {
    setStatus("loading")
    const message = [
      `New grooming request from ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      data.petName ? `Pet: ${data.petName}` : "",
      data.petType ? `Type: ${data.petType}` : "",
      data.petBreed ? `Breed: ${data.petBreed}` : "",
      data.requestedService ? `Service: ${data.requestedService}` : "",
      data.preferredDate ? `Preferred date: ${data.preferredDate}` : "",
      data.message ? `Message: ${data.message}` : "",
    ].filter(Boolean).join("\\n")

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer")
    setStatus("success")
    form.reset()
  }

  return (
    <section id="contact" className="relative w-full bg-background px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <Reveal className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Contact & Location
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Book your visit.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Location info */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-foreground">{siteConfig.business.name}</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.business.tagline}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <p>{siteConfig.location.address}</p>
                    <p>{siteConfig.location.city}, {siteConfig.location.postalCode}</p>
                    <p>{siteConfig.location.country}</p>
                  </div>
                </div>

                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-sm transition-colors hover:text-foreground">
                  <Phone className="size-4 shrink-0 text-muted-foreground" />
                  {siteConfig.contact.phone}
                </a>

                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm transition-colors hover:text-foreground">
                  <Mail className="size-4 shrink-0 text-muted-foreground" />
                  {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>

            {/* Opening hours */}
            <Reveal delay={0.2}>
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Clock className="size-3.5" /> Opening Hours
                </div>
                <dl className="space-y-1.5 text-sm">
                  {siteConfig.openingHours.map((entry) => (
                    <div key={entry.day} className="flex justify-between">
                      <dt className="text-muted-foreground">{entry.day}</dt>
                      <dd className="text-foreground">{entry.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Directions */}
            <Reveal delay={0.3}>
              <Button asChild variant="outline" className="rounded-full">
                <a href={siteConfig.location.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </Reveal>

            {/* Map embed */}
            <Reveal delay={0.35}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Studio location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.18%2C45.46%2C9.20%2C45.48&layer=mapnik"
                  className="size-full grayscale-[40%]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <Reveal delay={0.15}>
            <div className="rounded-sm border border-border bg-card p-6 md:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="mb-4 size-12 text-sage" />
                  <h3 className="font-serif text-2xl text-foreground">Request Sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly to confirm your appointment.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>Name *</FieldLabel>
                          <Input id={field.name} placeholder="Your name" aria-invalid={fieldState.invalid} {...field} />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />

                    <Controller
                      name="phone"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>Phone *</FieldLabel>
                          <Input id={field.name} placeholder="Your phone" aria-invalid={fieldState.invalid} {...field} />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </div>

                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Email *</FieldLabel>
                        <Input id={field.name} type="email" placeholder="you@example.com" aria-invalid={fieldState.invalid} {...field} />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Controller
                      name="petName"
                      control={form.control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Pet Name</FieldLabel>
                          <Input id={field.name} placeholder="Pet's name" {...field} />
                        </Field>
                      )}
                    />

                    <Controller
                      name="petType"
                      control={form.control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Pet Type</FieldLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger id={field.name} className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dog">Dog</SelectItem>
                              <SelectItem value="cat">Cat</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>
                      )}
                    />

                    <Controller
                      name="petBreed"
                      control={form.control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Breed</FieldLabel>
                          <Input id={field.name} placeholder="Breed" {...field} />
                        </Field>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Controller
                      name="requestedService"
                      control={form.control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Requested Service</FieldLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger id={field.name} className="w-full">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      )}
                    />

                    <Controller
                      name="preferredDate"
                      control={form.control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Preferred Date</FieldLabel>
                          <Input id={field.name} type="date" {...field} />
                        </Field>
                      )}
                    />
                  </div>

                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                        <Textarea id={field.name} placeholder="Tell us about your pet's needs..." {...field} />
                      </Field>
                    )}
                  />

                  <Controller
                    name="privacy"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <label className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-invalid={fieldState.invalid}
                          />
                          <span>I agree to the privacy policy and consent to my data being used to process this request.</span>
                        </label>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />

                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/85"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Opening WhatsApp...
                      </>
                    ) : (
                      "Send Request"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
