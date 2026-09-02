import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

export function CustomCursor() {
  const isMobile = useIsMobile()
  const [variant, setVariant] = useState<"default" | "view" | "link">("default")
  const [visible, setVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 30, stiffness: 400, mass: 0.3 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) return

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-cursor='view']")) {
        setVariant("view")
      } else if (target.closest("a, button, [role='button'], [data-cursor='link']")) {
        setVariant("link")
      } else {
        setVariant("default")
      }
    }

    const leaveHandler = () => setVisible(false)
    const enterHandler = () => setVisible(true)

    window.addEventListener("mousemove", moveHandler, { passive: true })
    window.addEventListener("mouseover", overHandler, { passive: true })
    document.addEventListener("mouseleave", leaveHandler)
    document.addEventListener("mouseenter", enterHandler)

    return () => {
      window.removeEventListener("mousemove", moveHandler)
      window.removeEventListener("mouseover", overHandler)
      document.removeEventListener("mouseleave", leaveHandler)
      document.removeEventListener("mouseenter", enterHandler)
    }
  }, [isMobile, cursorX, cursorY, visible])

  if (isMobile) return null

  const size = variant === "view" ? 72 : variant === "link" ? 44 : 12

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: size,
          height: size,
          backgroundColor: variant === "default" ? "rgba(26,22,18,0.6)" : "rgba(26,22,18,0.9)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
      >
        {variant === "view" && (
          <span className="text-[10px] font-sans uppercase tracking-widest text-ivory">View</span>
        )}
      </motion.div>
    </motion.div>
  )
}
