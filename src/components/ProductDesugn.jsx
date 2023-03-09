import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Shoe from './Shoe'
import styled from 'styled-components'
const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px; 
  `;


const ProductDesugn = () => {
  return (
   <>
   <Canvas>
    <Stage environment="city" intensity={0.6}>
    <Shoe/>
    </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
          We design products with a strong focus on both world class design and
    ensuring your product is a market success.
    </Desc>

   </>
  )
}

export default ProductDesugn