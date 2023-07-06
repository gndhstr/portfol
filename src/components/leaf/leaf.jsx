import React from 'react'
import './leaf.css'
import leaf1 from '../../assets/leaf1.png'
import leaf2 from '../../assets/leaf2.png'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

const leaf = () => {
  return (
    <Parallax pages={1} className="leaf">
      <ParallaxLayer offset={0} speed={0.3}>
        <img src={leaf1} className='leaf1' alt='leaf' />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <img src={leaf2} className='leaf2' alt='leaf' />
      </ParallaxLayer>
    </Parallax>
  )
}

export default leaf