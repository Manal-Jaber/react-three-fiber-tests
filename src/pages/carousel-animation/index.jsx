import Scene from "../../components/Scene"
import React from 'react'
import Default from "./CarouselAnimation"

const CarouselAnimation  = () => {
    return <Scene  camera={{ position: [0, 0, 100], fov: 15 }}>
    <Default/>
    </Scene>
}
export default CarouselAnimation