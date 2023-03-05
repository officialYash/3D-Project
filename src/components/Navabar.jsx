import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
display:flex;
justify-content: center;
`
const Container=styled.div`
width:1400px;
display:flex;
justify-content:space-between;
`

const Links=styled.div``

const Icons=styled.div``

const Logo=styled.img``

const List=styled.ul``

const ListItem=styled.li``

const Icon=styled.img``

const Button=styled.button``






const Navabar = () => {
  return (
    <Section>
    <Container>
    <Links>
        <Logo src="./img/logo3.png"/>
    <List>
        <ListItem>Home</ListItem>
        <ListItem>Studio</ListItem>
        <ListItem>Works</ListItem>
        <ListItem>Contact</ListItem>

    </List>
    </Links>
    <Icons>
        <Icon src="./img/search.png"/>
        <Button>Hire Now</Button>
    </Icons>
    Navabar
    </Container>
    </Section>
  )
}

export default Navabar