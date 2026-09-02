import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/config/site"
import { useIsMobile } from "@/hooks/use-mobile"

export function FloatingWhatsApp() {
  const isMobile = useIsMobile()

  if (!isMobile) return null

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", damping: 15, stiffness: 200 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="size-7 text-white" />
    </motion.a>
  )
}
