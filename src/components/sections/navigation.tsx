import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/motion/magnetic-button"
import { siteConfig, getWhatsAppUrl } from "@/config/site"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="#top"
            className={cn(
              "font-serif text-lg tracking-tight transition-colors md:text-xl",
              scrolled ? "text-foreground" : "text-ivory"
            )}
            data-cursor="link"
          >
            {siteConfig.business.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-300 hover:text-ivory",
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-ivory/75"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/85"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </MagneticButton>
          </div>

          <button
            className="flex items-center justify-center p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6 text-foreground" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-serif text-lg">{siteConfig.business.name}</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center p-2"
              >
                <X className="size-6" />
              </button>
            </div>

            <motion.nav
              className="flex flex-col gap-2 px-6 pt-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border py-5 font-serif text-3xl text-foreground"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                className="pt-10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-foreground text-background hover:bg-foreground/85"
                >
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="size-4" />
                    Book via WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
