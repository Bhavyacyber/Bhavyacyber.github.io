import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, OrbitControls, Sparkles } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

const nodes = [
  { name: 'USER', position: [-2.35, 0.25, 0] as [number, number, number], color: '#8bd7f7', shape: 'sphere' },
  { name: 'WEB APP', position: [-1.4, 1.05, 0] as [number, number, number], color: '#73c8ef', shape: 'box' },
  { name: 'AI GATEWAY', position: [-0.35, 0.05, 0] as [number, number, number], color: '#d9f3ff', shape: 'torus' },
  { name: 'LLM', position: [0.75, 1.05, 0] as [number, number, number], color: '#8bd7f7', shape: 'icosahedron' },
  { name: 'TOOLS / RAG', position: [1.75, 0.2, 0] as [number, number, number], color: '#73c8ef', shape: 'octahedron' },
  { name: 'DATA', position: [0.3, -1.15, 0] as [number, number, number], color: '#d9f3ff', shape: 'cylinder' },
]

const nodeDetails: Record<string, string> = {
  USER: 'Treat user input as untrusted; establish identity and intent before it reaches application logic.',
  'WEB APP': 'Enforce authorization and validate requests at the application boundary.',
  'AI GATEWAY': 'Apply policy, model routing, and safety checks at a dedicated AI boundary.',
  LLM: 'Treat model output as untrusted data, not as authorization or executable instructions.',
  'TOOLS / RAG': 'Constrain tool permissions and retrieval scope to the minimum needed.',
  DATA: 'Protect sensitive data with access controls, isolation, and auditable access.',
}

function ArchitectureNode({ name, position, color, shape, onSelect }: {
  name: string
  position: [number, number, number]
  color: string
  shape: string
  onSelect: (name: string) => void
}) {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!mesh.current) return
    const target = hovered ? 1.22 : 1
    const nextScale = mesh.current.scale.x + (target - mesh.current.scale.x) * Math.min(delta * 8, 1)
    mesh.current.scale.setScalar(nextScale)
  })

  return (
    <Float speed={1.1} rotationIntensity={0.16} floatIntensity={0.22}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={(event) => {
          event.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(event) => {
          event.stopPropagation()
          onSelect(name)
        }}
      >
        {shape === 'sphere' && <sphereGeometry args={[0.23, 24, 24]} />}
        {shape === 'box' && <boxGeometry args={[0.38, 0.38, 0.38]} />}
        {shape === 'torus' && <torusGeometry args={[0.28, 0.07, 12, 32]} />}
        {shape === 'icosahedron' && <icosahedronGeometry args={[0.28, 1]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.3, 0]} />}
        {shape === 'cylinder' && <cylinderGeometry args={[0.19, 0.19, 0.34, 24]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.7 : 0.28}
          metalness={0.68}
          roughness={0.24}
          wireframe={shape === 'icosahedron' || shape === 'octahedron'}
        />
      </mesh>
    </Float>
  )
}

function SecurityArchitecture() {
  const [selectedNode, setSelectedNode] = useState('AI GATEWAY')
  const connections = [
    [nodes[0].position, nodes[1].position],
    [nodes[1].position, nodes[2].position],
    [nodes[2].position, nodes[3].position],
    [nodes[3].position, nodes[4].position],
    [nodes[2].position, nodes[5].position],
  ]

  return (
    <div className="architecture-visual">
      <div className="architecture-canvas" aria-label="Interactive 3D AI application architecture. Drag to rotate and select a node to inspect its security boundary.">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.4], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
          <ambientLight intensity={0.75} />
          <pointLight position={[2, 3, 4]} intensity={22} color="#73c8ef" />
          <pointLight position={[-3, -2, 2]} intensity={10} color="#278ab5" />
          <Sparkles count={35} scale={[6, 4, 2]} size={1.2} speed={0.18} color="#73c8ef" />
          {connections.map(([start, end]) => <Line key={`${start.join(',')}-${end.join(',')}`} points={[start, end]} color="#5dbce4" transparent opacity={0.38} lineWidth={1} />)}
          {nodes.map((node) => <ArchitectureNode key={node.name} {...node} onSelect={setSelectedNode} />)}
          <OrbitControls enableZoom={false} enablePan={false} minDistance={6} maxDistance={8} />
        </Canvas>
      </div>
      <div className="architecture-node-list" aria-label="Select a system boundary">
        {nodes.map((node) => <button className={selectedNode === node.name ? 'active' : ''} key={node.name} type="button" onClick={() => setSelectedNode(node.name)}>{node.name}</button>)}
      </div>
      <p className="architecture-detail"><span>{selectedNode}</span>{nodeDetails[selectedNode]}</p>
      <span className="architecture-hint">DRAG TO ROTATE · SELECT A NODE</span>
    </div>
  )
}

export default SecurityArchitecture
