import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'

function ContainerModel() {
  const gltf = useLoader(GLTFLoader, '/container20.glb')

  return (
    <primitive
      object={gltf.scene}
      scale={0.8}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    />
  )
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 50 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <ContainerModel />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
    </Canvas>
  )
}