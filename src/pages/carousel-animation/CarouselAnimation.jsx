
import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls } from '@react-three/drei'

import './util'
import { Rig } from './components/Rig';
import { Carousel } from './components/Carousel';
import { Banner } from './components/Banner';

const  Default = () => (
  <>
    <fog attach="fog" args={['#a79', 8.5, 12]} />
    <ScrollControls pages={4} infinite>
      <Rig rotation={[0, 0, 0.15]}>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
    <Environment preset="dawn" background blur={0.5} />
  </>
)

export default Default;
