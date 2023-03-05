import React from 'react'
import styled from 'styled-components'
import Navabar from './Navabar'


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

`

const Right= styled.div`
`


const Hero = () => {
  return (
    <Section>
    <Navabar/>
    <Container>
    <Left>
      <Title>
        Think , Make .Solve
        <WhatWeDo>
        <Line src="./img/line.png"/>
          <Subtitle>
            What We do
          </Subtitle>
        </WhatWeDo>
        <Desc>we enjoy creating delightful , Human-centered digital experiences</Desc>
      <Button>Learn More</Button>
      </Title>
    </Left>
    <Right>
    {/* 3D Model  */}
    <Img src="./img/moon.png"/>
    </Right>
    </Container>

    </Section>
  )
}

export default Hero