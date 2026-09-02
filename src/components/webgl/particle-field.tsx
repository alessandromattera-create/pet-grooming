import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3] = (Math.random() - 0.5) * 14
      arr[i3 + 1] = (Math.random() - 0.5) * 8
      arr[i3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [count])

  const speeds = useMemo(() => {
    const arr = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      arr[i] = 0.001 + Math.random() * 0.003
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const geometry = pointsRef.current.geometry
    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array

    const targetX = (state.mouse?.x ?? 0) * 1.5
    const targetY = (state.mouse?.y ?? 0) * 1.0
    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.02
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.02

    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3 + 1] += speeds[i]
      arr[i3] += Math.sin(time * 0.3 + i * 0.5) * 0.0008

      if (arr[i3 + 1] > 4) {
        arr[i3 + 1] = -4
      }
    }

    posAttr.needsUpdate = true
    pointsRef.current.rotation.y = mouseRef.current.x * 0.15
    pointsRef.current.rotation.x = -mouseRef.current.y * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#e3d7c4"
        transparent
        opacity={0.22}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function ParticleField({ count = 1500 }: { count?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <Particles count={count} />
    </Canvas>
  )
}
