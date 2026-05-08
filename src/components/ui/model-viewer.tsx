'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/chapeu_de_hacker.glb')
  
  return (
    <primitive 
      object={scene} 
      scale={1.2}
      position={[0, 0, 0]}
    />
  )
}

interface ModelViewerProps {
  className?: string
}

export function ModelViewer({ className }: ModelViewerProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Model />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/models/chapeu_de_hacker.glb')
