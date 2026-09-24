import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, OrbitControls, Sparkles, Text } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'

function CoreMesh() {
  const meshRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)
  const ringRef = useRef<Mesh>(null)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (!meshRef.current || !groupRef.current || !ringRef.current) return

    meshRef.current.rotation.x += delta * 0.12
    meshRef.current.rotation.y += delta * 0.22
    groupRef.current.rotation.x += (state.pointer.y * 0.18 - groupRef.current.rotation.x) * delta * 2.4
    groupRef.current.rotation.y += (state.pointer.x * 0.28 - groupRef.current.rotation.y) * delta * 2.4
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.18 + state.pointer.y * 0.2
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.28 + state.pointer.x * 0.2
    const targetScale = active ? 1.12 : 1
    const nextScale = meshRef.current.scale.x + (targetScale - meshRef.current.scale.x) * delta * 5
    meshRef.current.scale.setScalar(nextScale)
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.4}>
        <mesh ref={meshRef} castShadow onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)} onClick={() => setActive((value) => !value)}>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color={active ? '#d5ffed' : '#91ffd4'}
            emissive="#256b59"
            emissiveIntensity={0.55}
            metalness={0.72}
            roughness={0.2}
            wireframe
          />
        </mesh>
        <mesh ref={ringRef} rotation={[Math.PI / 2.6, 0, 0]}>
          <torusGeometry args={[2.05, 0.012, 8, 96]} />
          <meshBasicMaterial color="#68dcae" transparent opacity={active ? 0.82 : 0.4} />
        </mesh>
        <mesh scale={0.78}>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color="#12241f"
            emissive="#173c32"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
      <Text
        position={[0, -2.3, 0]}
        fontSize={0.16}
        letterSpacing={0.16}
        color="#91ffd4"
        anchorX="center"
      >
        {active ? 'INTERACTIVE NODE' : 'LIVE SECURITY CORE'}
      </Text>
    </group>
  )
}

function StageFallback() {
  return <div className="stage-fallback">INITIALIZING STAGE...</div>
}

function InteractiveStage() {
  return (
    <div className="interactive-stage" aria-label="Interactive 3D security visualization">
      <Canvas
        shadows
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.5, 6.5], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 4]} intensity={2.2} color="#d4fff0" castShadow />
          <pointLight position={[-3, -2, 2]} intensity={16} distance={8} color="#2cbd91" />
          <Sparkles count={70} scale={[6, 5, 4]} size={1.8} speed={0.22} color="#79e7bd" />
          <CoreMesh />
          <ContactShadows position={[0, -2.2, 0]} opacity={0.35} scale={5} blur={2.6} far={4} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.7} />
        </Suspense>
      </Canvas>
      <Suspense fallback={<StageFallback />}>
        <span className="stage-chip stage-chip-top">01 / MONITORING</span>
        <span className="stage-chip stage-chip-bottom">DRAG TO INSPECT</span>
      </Suspense>
    </div>
  )
}

export default InteractiveStage