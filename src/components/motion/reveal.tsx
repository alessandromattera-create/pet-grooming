import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, y = 30, once = true }: RevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(" ")

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span style={{ display: "inline-block" }} variants={wordVariants}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  delay?: number
}

export function ImageReveal({ src, alt, className, imgClassName, delay = 0 }: ImageRevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return (
      <div className={className}>
        <img src={src} alt={alt} className={imgClassName} loading="lazy" />
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imgClassName}
        loading="lazy"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  once = true,
}: StaggerContainerProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  y?: number
}

export function StaggerItem({ children, className, y = 24 }: StaggerItemProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
