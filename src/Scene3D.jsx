import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { usePrefersReducedMotion } from './utils/motion.js'

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null)
  if (error) return null
  return (
    <React.Suspense fallback={null}>
      <group>{React.Children.map(children, child => React.cloneElement(child, { onError: setError }))}</group>
    </React.Suspense>
  )
}

function usePointerWorldPoint() {
  const { camera, pointer, viewport } = useThree()
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0,0,1), 0), [])
  const ray = useMemo(() => new THREE.Ray(), [])
  const v3 = useMemo(() => new THREE.Vector3(), [])
  return () => {
    // ray from camera through pointer, intersect z=0 plane
    ray.origin.copy(camera.position)
    ray.direction.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize()
    const t = ray.distanceToPlane(plane)
    if (t === null) return v3.set(0,0,0)
    return v3.copy(ray.origin).addScaledVector(ray.direction, t)
  }
}

function Nodefield({ palette }) {
  const group = useRef()
  const focusTorus = useRef()
  const prefersReduced = usePrefersReducedMotion()
  const getWorldPoint = usePointerWorldPoint()
  const [hoverIndex, setHoverIndex] = useState(0)

  const nodes = useMemo(() => {
    const arr = []
    const rng = new Math.seedrandom ? new Math.seedrandom('shamaiem') : Math.random
    for (let i=0;i<24;i++){
      const a = Math.random()*Math.PI*2
      const r = 1.2 + Math.random()*0.9
      const h = (Math.random()-0.5) * 1.2
      arr.push({ base: new THREE.Vector3(Math.cos(a)*r, h, Math.sin(a)*r), pos: new THREE.Vector3(), vel: new THREE.Vector3() })
    }
    return arr
  }, [])

  const edges = useMemo(() => {
    // indices of k-nearest neighbors (k=2)
    const k = 2
    return nodes.map((n, i) => {
      const dists = nodes.map((m, j) => ({ j, d: n.base.distanceTo(m.base) }))
      dists.sort((a,b)=>a.d-b.d)
      return dists.slice(1, k+1).map(d => d.j)
    })
  }, [nodes])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const rotY = prefersReduced ? 0 : 0.0008
    if (group.current) group.current.rotation.y += rotY

    const worldP = getWorldPoint()

    nodes.forEach((n, i) => {
      // low-amplitude orbit noise
      const ox = Math.sin(t*0.4 + i) * 0.05
      const oy = Math.cos(t*0.3 + i*1.3) * 0.05
      const oz = Math.sin(t*0.35 + i*0.6) * 0.05

      // target = base + noise
      const target = prefersReduced ? n.base : n.base.clone().add(new THREE.Vector3(ox, oy, oz))

      // pointer repulsion for nearest node only
      if (!prefersReduced && i === hoverIndex) {
        const dir = n.pos.clone().sub(worldP)
        const dist = Math.max(dir.length(), 0.0001)
        dir.normalize().multiplyScalar(0.22 / (1.0 + dist*14))
        target.add(dir)
      }

      // spring toward target
      const stiffness = 30
      const damping = 18
      const force = target.clone().sub(n.pos).multiplyScalar(stiffness)
      n.vel.add(force.multiplyScalar(delta))
      n.vel.multiplyScalar(1 - damping * delta)
      n.pos.add(n.vel.clone().multiplyScalar(delta))
    })

    // focus torus follow hovered node
    if (focusTorus.current) {
      const p = nodes[hoverIndex]?.pos || new THREE.Vector3()
      focusTorus.current.position.lerp(p, 0.2)
      if (!prefersReduced) {
        const s = 1 + 0.06 * (0.5 + 0.5 * Math.sin(t * (Math.PI*2)/1.2))
        focusTorus.current.scale.setScalar(s)
        focusTorus.current.material.opacity = 0.7 + 0.3 * (0.5 + 0.5 * Math.sin(t * (Math.PI*2)/1.2))
      } else {
        focusTorus.current.scale.setScalar(1)
        focusTorus.current.material.opacity = 0.8
      }
    }
  })

  const onPointerMove = () => {
    if (prefersReduced) return
    // find nearest node to world point
    const p = getWorldPoint()
    let nearest = 0
    let nd = Infinity
    nodes.forEach((n, i) => {
      const d = n.pos.distanceTo(p)
      if (d < nd) { nd = d; nearest = i }
    })
    setHoverIndex(nearest)
  }

  return (
    <group ref={group} onPointerMove={onPointerMove}>
      <Float speed={1} rotationIntensity={prefersReduced ? 0 : 0.2} floatIntensity={prefersReduced ? 0 : 0.5}>
        {/* NODES */}
        {nodes.map((n, i) => (
          <mesh key={i} position={n.pos.toArray()}>
            <sphereGeometry args={[0.16, 24, 24]} />
            <meshStandardMaterial color={palette.nodesBase} emissive={palette.nodesEmissive} emissiveIntensity={prefersReduced ? 0.6 : 0.9} metalness={0.15} roughness={0.3} />
          </mesh>
        ))}
        {/* EDGES */}
        {nodes.map((n, i) => edges[i].map((j) => {
          const a = n.pos, b = nodes[j].pos
          const mid = a.clone().add(b).multiplyScalar(0.5)
          const dir = b.clone().sub(a)
          const len = Math.max(dir.length(), 0.0001)
          const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize())
          return (
            <mesh key={i+'-'+j} position={mid.toArray()} quaternion={quat}>
              <cylinderGeometry args={[0.01, 0.01, len, 8, 1]} />
              <meshStandardMaterial color={palette.edges} metalness={0.2} roughness={0.6} />
            </mesh>
          )
        }))}
        {/* TORUS FOCUS RING */}
        <mesh ref={focusTorus} position={[0,0,0]}>
          <torusGeometry args={[0.28, 0.01, 16, 64]} />
          <meshStandardMaterial color={palette.torus} emissive={palette.torus} emissiveIntensity={1.0} transparent opacity={0.9} />
        </mesh>
      </Float>
      <ambientLight intensity={0.35} />
      <directionalLight intensity={0.6} position={[3,3,3]} />
      <ContactShadows position={[0,-1.2,0]} opacity={0.18} scale={10} blur={2} />
    </group>
  )
}

export default function Scene3D() {
  const palette = { nodesBase: '#0B0B0F', nodesEmissive: '#F7A3C5', edges: '#D6B2FF', torus: '#2DE2E6' }
  const prefersReduced = usePrefersReducedMotion()
  return (
    <div className="r3f-wrap" aria-hidden>
      <ErrorBoundary>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
          <PerspectiveCamera position={[0,0,6]} fov={45} makeDefault />
          <Environment preset="city" />
          <Nodefield palette={palette} />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
