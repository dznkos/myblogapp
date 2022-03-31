import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

:root {
  --fondo: #000000ec;
  --black: #000;
  --white: #fff;

  --text1: rgba(0,0,0,.8);
  --text2: #ce465ff6;
  --text3: #3744b8;
  --textProfile: #3b5fd3;


  --green: #00a650;
  --blue1: #1e6dff;
  --blue2: #2968c8;
  --blue3: #3483fa;
  --yellow: #fff159;

  --border: #ddd;

  --panel: 0 1px 3px 0 rgba(0, 0, 0, .3);

  --reputacion1: #ffe7e6;
  --reputacion2: #fff4e7;
  --reputacion3: #fffde5;
  --reputacion4: #f3fee0;

  --family: 'Questrial', sans-serif;
  
  min-height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  // agregado
  
  // end agregado

  font-family: 'Architects Daughter', cursive;

}

h1, h2, h3, h4, h5, h6 {
  color: var(--text4);
  font-weight: inhert;
}

html{
  min-height: 100%;
  background-color: var(--fondo);

}

*, button, input{

  border: 0;
  background-color: none;
  font-family: var(--family);

}
`