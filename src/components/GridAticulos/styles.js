import styled from "styled-components";


export const Container = styled.div`
  
  padding-top:25px;
  padding-bottom: 25px;

`

export const Header = styled.div`


/* background-color: aquamarine; */
color: white;

.row {
  display: flex;
}

.column {
  flex: 50%;
  margin: 15px;
  text-align: justify;
  text-justify: inter-word;
  
}

img {
  width: 200px;
  height: 200px;
  display: block;
  margin: auto;

}
  
`
export const Box = styled.div`

/* background-color: #4c59cc; */

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.card { 
  flex: 31%;
  max-width: 450px;
  margin: 5px;
  
  background-color: #062946;
  /* padding: 15px; */

  @media (max-width: 1130px) {
    max-width: 100%;
  }

}

.card-img {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
    

  h5 {  
    position: absolute;
    
    
  }
}

.card-content {
  text-align: justify;
  padding: 12px;
  color: var(--textProfile);
}

.card-date {
  text-align: end;
  padding: 12px;
  background-color: #3e7092ee;
  color: black;
}

.card-img {
  
  background-color: #181818;
  

  img {
    width: auto;
    height: 250px;
    object-fit: cover;
  }
}
  
`

