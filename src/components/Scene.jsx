import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Scene({children, camera}) {
  return (
    <Canvas camera={camera}>
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  )
}
