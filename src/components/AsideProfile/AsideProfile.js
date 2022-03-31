import React from 'react'
import { Avatar, Information, SocialNetworks, TitleAvatar } from './styles'

export const AsideProfile = () => {
  return (
    <>
      <Avatar>
            {/* <img src="https://wallpapercave.com/wp/wp8886895.jpg" alt="" />   */}
            <img src="https://www.sibuts.com/wp-content/uploads/2020/10/Gorra-Negra-Death-Note-S.jpg" alt="" />
          
      </Avatar> 
      <TitleAvatar>
        <p>Luis VT</p> 
        <b>Developer</b>
      </TitleAvatar>

      <Information>
        

        <li><b>Name:</b> <i>Luis Enrique</i> </li>
        <li><b>Years:</b><i>28</i></li>
        <li><b>Skills:</b><i>React js - Flutter - Node js</i></li>

      

        <div className='desc_profile'>
          <b>Acerca de mi:</b>
          <p>Soy desarrollador web/moviles, tengo experiencia en desarrollo con la libreria React Js tambien con el framework Flutter.
            Por otro lado en backend utilizo node js. me gusta aprender sobre nuevas tecnologias y compartir mis experiencias con otras personas.</p>
        </div>
      </Information>

      <SocialNetworks>
        <ul>
          
          <li><a href="/"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="" width={ 25 } height={ 25 }/></a></li>
          <li><a href="https://github.com/dznkos"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png" 
          alt="" width={ 25 } height={ 25 }/></a></li>
          {/* <li><a href="/"> <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          alt="" width={ 25 } height={ 25 }/></a></li> */}
          <li><a href="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" 
          alt="" width={ 32 } height={ 25 }/></a></li>
          <li><a href="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" 
          alt="" width={ 25 } height={ 25 }/></a></li>
          
        </ul>
      </SocialNetworks>



    </>
  )
}
