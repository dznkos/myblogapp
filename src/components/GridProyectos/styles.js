import styled from "styled-components";

export const Container = styled.div`

  /* background-color: #323e64;   */
  box-sizing: border-box;
  margin-bottom: 80px;
  display: grid;  
  
  gap: 3px;
  /* padding: 15px; */

  > * {
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    /* padding: 10px; */
    
    
  }
  

  .article {
    /* background-color: #40a7f5;     */
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    

    color: white;
    
    img{
      width: 300px;
      height: 200px;
      object-fit: cover;
      width:100%;
      
      
      /* border-radius:1%; */
    }

    h1 {
      padding-left:20px;
      position: absolute;
      color: var(--text2);
      margin-bottom: 10px;   
      opacity: 0.75;   
      /* background-color: #000000; */

    }
    

  }
 
  
  @media (min-width: 750px) {
  grid-template-columns: repeat(1, 5fr);
  grid-template-rows: auto;
}

@media (min-width: 900px) {
  grid-template-columns: repeat(2, 6fr);
  grid-template-rows: auto;
}

@media (min-width: 1300px) {
  grid-template-columns: repeat(3, 4fr);
  grid-template-rows: auto;
}

@media (max-width: 750px) { 
  grid-template-columns: repeat(1, 4fr);
  grid-template-rows: auto;
}
  

`