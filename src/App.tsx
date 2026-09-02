import { useLenis } from "@/hooks/use-lenis"
import { CustomCursor } from "@/components/motion/custom-cursor"
import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { BrandIntro } from "@/components/sections/brand-intro"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { Gallery } from "@/components/sections/gallery"
import { BeforeAfter } from "@/components/sections/before-after"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { InstagramSection } from "@/components/sections/instagram"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp"
import { siteConfig } from "@/config/site"

export function App() {
  useLenis()

  return (
    <>
      <SEOHead />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <BrandIntro />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <BeforeAfter />
        <About />
        <Testimonials />
        <Contact />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function SEOHead() {
  if (typeof document === "undefined") return null

  const seo = siteConfig.seo
  const business = siteConfig.business
  const location = siteConfig.location

  document.title = seo.title

  const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement("meta")
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute("content", content)
  }

  setMeta("description", seo.description)
  setMeta("keywords", seo.keywords)
  setMeta("og:title", seo.title, "property")
  setMeta("og:description", seo.description, "property")
  setMeta("og:type", "website", "property")
  setMeta("twitter:card", "summary_large_image")
  setMeta("twitter:title", seo.title)

  // LocalBusiness structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": seo.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": location.city,
      "postalCode": location.postalCode,
      "addressCountry": location.country,
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "url": seo.url,
  }

  let scriptEl = document.getElementById("ld-json")
  if (!scriptEl) {
    scriptEl = document.createElement("script")
    scriptEl.id = "ld-json"
    scriptEl.setAttribute("type", "application/ld+json")
    document.head.appendChild(scriptEl)
  }
  scriptEl.textContent = JSON.stringify(structuredData)

  return null
}

export default App
