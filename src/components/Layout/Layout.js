import React from 'react'
import { AsideProfile } from '../AsideProfile/AsideProfile'

import { Header } from '../Header/Header'
// import { Hero } from '../Hero/Hero'
import { Main } from '../Main/Main'

import { Container} from './styles'

export const Layout = () => {
  return (
    <Container> 

      {/* <Hero/> */}

      <header className='header'> 
        <Header/>
      </header>        
      <aside className='sidebar'>
        <AsideProfile/>
      </aside>
      <article className='main'>
              
          <Main/>
        
      </article>
      <footer className='footer'>FOOTER</footer>

      {/*
      <SideBar></SideBar>
      <Article></Article>
      <Footer></Footer>  

       */}

      

    </Container>
  )
}
