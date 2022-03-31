import React from 'react'
import { Box, Container, Header } from './styles'

import readlove from '../../assets/img/read.png';

export const GridArticulos = () => {
  return (
    <Container>
      <Header>
        <div className="row">
          <div className="column ">            
              <h2>Articulos y Notas</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias illo, ab laborum alias voluptas ut aliquam eum facilis quia, quidem recusandae dolor laboriosam placeat voluptatum asperiores veritatis corrupti qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias illo, ab laborum alias voluptas ut aliquam eum facilis quia.</p>
          </div>
          <div className="column ">
            <img src={readlove} alt="leer te da conocimiento" />
          </div>
        </div>
      
      </Header>

      <Box>
      <div className="row">
        <div className='card'>
          <div className="card-img">
            <img src="https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?fit=1500%2C1000&ssl=1" alt="" />
            <h5>Dnzkos / 0 Comments</h5>
          </div>
          <div className="card-content">            
            <b>Consume Api with fetch</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam obcaecati harum in corrupti iusto qui id cupiditate aliquam. Pariatur vero velit tempora voluptatem reiciendis ad architecto aliquam quos! Rerum, veniam?</p>
            <a href="#">Leer más </a>

          </div>
          <div className='card-date'>
            <b>16 Dec 2022</b>
          </div>
        </div>
        <div className='card'>
          <div className="card-img">
            <img src="https://www.hola.com/imagenes/decoracion/20200324163537/consejos-orden-despacho/0-800-565/orden-despacho-6t-t.jpg?filter=w600" alt="" />
            <h5>Dnzkos / 0 Comments</h5>
          </div>
          <div className="card-content">
            <b>Consume Api with fetch</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam obcaecati harum in corrupti iusto qui id cupiditate aliquam. Pariatur vero velit tempora voluptatem reiciendis ad architecto aliquam quos! Rerum, veniam?</p>
            <a href="#">Leer más </a>

          </div>
          <div className='card-date'>
            <b>16 Dec 2022</b>
          </div>
        </div>
        <div className='card'>
          <div className="card-img">
            <img src="https://buenavida.pr/wp-content/uploads/2017/04/Escritorio-1170x780.jpg" alt="" />
            <h5>Dnzkos / 0 Comments</h5>
          </div>
          <div className="card-content">
            <b>Consume Api with fetch</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam obcaecati harum in corrupti iusto qui id cupiditate aliquam. Pariatur vero velit tempora voluptatem reiciendis ad architecto aliquam quos! Rerum, veniam?</p>
            <a href="#">Leer más</a>

          </div>
          <div className='card-date'>
            <b>16 Dec 2022</b>
          </div>
        </div>


        </div>
      </Box>

    </Container>

  )
}
