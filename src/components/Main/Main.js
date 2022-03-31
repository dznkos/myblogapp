import React from 'react'
import { GridArticulos } from '../GridAticulos/GridArticulos'
import { GridProyectos } from '../GridProyectos/GridProyectos'

import { Container, Header, Panel } from './styles'

export const Main = () => {
  return (
    <Container>
      <Header>
            <h3>Proyectos / Articulos</h3>
      </Header>  
      <Panel>
                 
        <GridProyectos/>
        
        <GridArticulos/>

      </Panel>
    </Container>
  )
}
