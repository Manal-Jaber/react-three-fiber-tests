import Scene from "../../components/Scene"
import React from 'react'
import Default from "./HorizontalVerticalCarousel"
import PreventScrollNavigation from '../../components/PreventScrollNavigation';


const HorizontalVerticalCarousel  = () => {
    return <>
    <PreventScrollNavigation/>
    <Scene  camera={{ position: [0, 0, -5], fov: 15 }}>
    <Default/>
    </Scene>
    </>
}
export default HorizontalVerticalCarousel