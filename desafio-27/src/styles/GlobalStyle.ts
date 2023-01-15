import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root{
    --font2: 'Montserrat', sans-serif; 
   }
   *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
   }
   html{
      font-size: 62.5%;
   }
   body{
      min-height: 100vh;
      color: #292929;
      background-color: #FBFBFB;
      font-size: 1.6rem;
   }
   img{
      display: block;
      max-width: 100%;
   }
   a, li, button{
      color: inherit;
      list-style: none;
      text-decoration: none;
      font-weight: inherit;
      font-size: inherit;
   }
`;

export default GlobalStyle;
