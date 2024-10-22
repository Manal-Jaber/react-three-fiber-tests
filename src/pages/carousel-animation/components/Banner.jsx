import { useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'


function Banner(props) {
    const ref = useRef()
    const texture = useTexture('/images/vml.png')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    const scroll = useScroll()
    useFrame((state, delta) => {
      ref.current.material.time.value += Math.abs(scroll.delta) * 4
      ref.current.material.map.offset.x += delta / 2
    })
    return (
      <mesh ref={ref} {...props}>
        <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
        <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
    )
  }
export {Banner}