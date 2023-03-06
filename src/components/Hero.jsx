import React from 'react'
import styled from 'styled-components'
import Navabar from './Navabar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
align-items: center;
flex-direction:column;
justify-content:space-between;
`
const Container= styled.div`
height:100vh;
scroll-snap-align:center;
width: 1400px;
display:flex;
justify-content:space-between;
`
const Left= styled.div`
flex:2;
display:flex;
flex-direction:column;
gap:20px;
justify-content:center;
`
const Title=styled.h1`
font-size:74px;
`;
const WhatWeDo=styled.div`display:flex;
align-items:center;
gap:10px;`;

const Line=styled.img`
 height:5px;`;

const Subtitle=styled.h2`
color:#da4ea2;  
`;
const Desc=styled.p`
font-size:24px;
color: lightgray;
`;
const Button= styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width: 100px;
padding: 10px;
border:none;
border-radius:5px;
cursor:pointer;
`;
const Img=styled.img`
width:800px;
height:600px;
object-fill: contain;
position: absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
to {
transform: translateY(20px);
}
}
`;





const Right= styled.div`
flex:3;
position:relative;
`


const Hero = () => {
  return (
    <Section>
    <Navabar/>
    <Container>
    <Left>
      <Title>
        Think. Make. Solve.</Title>
        <WhatWeDo>
        <Line src="./img/line.png"/>
          <Subtitle>
            What We do
          </Subtitle>
        </WhatWeDo>
        <Desc>we enjoy creating delightful , Human-centered digital experiences</Desc>
      <Button>Learn More</Button>
    </Left>
    <Right>
    <Canvas camera={{fov:25 ,position:[5,5,5]}}>
    <OrbitControls enableZoom={false} autoRotate/>
    <ambientLight intensity={1} />
    <directionalLight position={[3,2,1]} />
    <Sphere args={[1,100,200]} scale={1.9}>
    <MeshDistortMaterial
    color="#3d1c56"
    attach="material" 
    distort={0.5}
    speed={2}/>
    </Sphere>   
    </Canvas>    
    <Img src="./img/moon.png"/>
    </Right>
    </Container>

    </Section>
  )
}

export default Hero