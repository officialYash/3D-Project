import React from 'react'
import styled from 'styled-components'
import MapChart from './Map'
import Map from './Map'

const Container = styled.div`
width:   100%;
height: 100%;
display:flex;
justify-content: space-between;
gap: 50px;
`

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Title = styled.h1`
font-weight:200;
`
const Left = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
`
const Right = styled.div`
flex:1;

`
const Input = styled.input`
padding:20px;
background-color: #e8e6e6;
border:none;
border-radius:5px;
`
const TextArea = styled.textarea`
padding:20px;
border:none;
border-radius:5px;
background-color: #e8e6e6;

`
const Button = styled.button`
background-color:#da4ea2;
color:white;
border:none;
font-weight: bold;
cursor:pointer;
border-radius:5px;
padding:20px;
`
const Form = styled.form`
width:500px;
display:flex;
flex-direction:column;
gap:25px;
`

const handleSubmit = e =>{
  e.preventDefault()
}

const Contact = () => {
  return (
    <Section>
    <Container>
      <Left>
        <Form onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input placeholder='Name'/>
          <Input placeholder='Email'/>
          <TextArea placeholder='Write your message' rows={10}/>
          <Button type='submit'>Send</Button>
        </Form>
      </Left>
      <Right>
        <MapChart/>
      </Right>
    </Container>

    </Section>
  )
}

export default Contact