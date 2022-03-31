import React from 'react'
import { Container, Wrapper } from './styles'

import { Hero } from '../Hero/Hero'

export const Header = () => {
  return (
   <Container >
     <Wrapper>
       <img src="https://www.pngkey.com/png/full/647-6472406_un-posible-retraso-en-salir-debian-buster-yala.png" 
       alt="logo" 
       />
       <Hero/>
     </Wrapper>
   </Container>
  )
}
