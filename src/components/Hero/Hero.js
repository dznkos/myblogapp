import React from 'react'

import { Container, Row} from './styles';

export const Hero = () => {
  return (
    <Container>
      <Row>
        <a href="#">Inicio</a>
        <a href="#">Blog</a>
        <a href="#">Proyectos</a>
        <a href="#">Articulos</a>
        <a href="#">News</a>
      </Row>
      <Row>
        <a href="#">Contacto</a>
        <a href="#">Github</a>
      </Row>
    </Container>
  )
}
