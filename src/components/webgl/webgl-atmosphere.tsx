import { lazy, Suspense } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const ParticleField = lazy(() =>
  import("@/components/webgl/particle-field").then((m) => ({ default: m.ParticleField }))
)

export function WebGLAtmosphere({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const isMobile = useIsMobile()

  if (reduced) return null

  return (
    <div className={className} aria-hidden="true">
      <Suspense fallback={null}>
        <ParticleField count={isMobile ? 600 : 1800} />
      </Suspense>
    </div>
  )
}
