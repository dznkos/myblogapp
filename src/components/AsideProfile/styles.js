import styled from "styled-components";

export const Avatar = styled.div`
  
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
  
  > img {
    width: 220px;
    height: 220px;
    border-radius:50%;
    border: 3px solid black;
    object-fit: cover;
  }

  

`

export const TitleAvatar = styled.div`
  
  color: var(--textProfile);

`


export const Information = styled.div`

  align-items: center;
  justify-content: center;
  /* border: 1px solid orange; */
  border-radius: 10px;
  padding: 5px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  color: var(--textProfile);

  > li {
    text-decoration: none;
    list-style: none;
    justify-content: left;
    display: flex;    
    font-size: 14px;
  }

  > li i{
    margin-left: 15px;
  }


  > .desc_profile {
    margin-top: 30px;
    text-align: start;


    > b{
      font-size: 15px;
      
    }
    > p {

      font-size: 14px;
    }
  }


`

export const SocialNetworks = styled.div`

  align-items: center;
  justify-content: center;
  margin-top: 40px; 
  margin: auto;
  /* border: 1px solid blue; */
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 55px;
  background-color: #1e4557;

  > ul li {
    display: inline;
    
  }

  > ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    
  }


`