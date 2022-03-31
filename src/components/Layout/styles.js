
import styled from "styled-components"

export const Container = styled.div`
  
  /* border: 1px solid red; */
  /* background-color: #161616; */
  display: grid;
  gap: 10px;
  height: 100vh;
  grid-template: 
        "header" 125px  
        "sidebar" auto       
        "main" auto        
        "footer" 80px 
        ;

@media (min-width: 750px) {  
    /* grid-template-columns: 200px auto;  
    grid-template-rows:100px 50px auto 100px; */
    grid-template: 
        "header header" 125px 
        "sidebar main" auto
        "footer footer" 100px /
        300px   auto;
}

@media (min-width: 900px) {   
    grid-template: 
        "header header header" 125px             
        "sidebar main main " auto
        "footer footer footer" 100px /
        250px   auto   auto;

    max-width: 1500px;
    margin: auto;

}



  > * {
    box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
  }

  .header {
    grid-area: header;
    background-color: rgb(26, 30, 56);
  }
  .navbar {
    grid-area: navbar;
    background-color: rgb(144, 213, 164);
  }

  .sidebar {
      grid-area: sidebar;
      background-color: rgb(26, 26, 34);
  }

  .main {
      grid-area: main;
      background-color: #1f325a;
  }

  .footer {
      grid-area: footer;
      background-color: #1f1f1f;
  }

  `


// export const SideBar = styled.div`
  
//   background-color: rgb(144, 213, 164);
// `

// export const Article = styled.div`
  
//   background-color: rgb(47, 85, 184);
// `

// export const Footer = styled.div`
  
//   background-color: rgb(49, 54, 67);
// `

// export const Wrapper = styled.div`
//   max-width: 1184px;
//   margin: 0 auto;
//   border: 1px solid black;
  
//  background-color: #0f3c6d;
// `