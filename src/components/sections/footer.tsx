import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/icons/social-icons"
import { siteConfig, getWhatsAppUrl } from "@/config/site"

const footerNav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Full Grooming",
  "Bath & Blow-Dry",
  "Hand Scissoring",
  "Brushing & De-shedding",
  "Nail & Paw Care",
  "Puppy's First Groom",
]

export function Footer() {
  return (
    <footer className="relative w-full bg-muted/30 px-6 pt-20 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-foreground">{siteConfig.business.name}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.business.shortDescription}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                <span>{siteConfig.location.address}, {siteConfig.location.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-muted-foreground" />
                <a href={`tel:${siteConfig.contact.phone}`} className="transition-colors hover:text-foreground">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-muted-foreground" />
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              {siteConfig.openingHours.map((entry) => (
                <div key={entry.day} className="flex justify-between">
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
