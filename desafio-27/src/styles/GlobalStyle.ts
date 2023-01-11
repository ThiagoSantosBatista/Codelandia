import { createGlobalStyle } from "styled-components";

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
      font-size: 1.6rem;
      min-height: 100vh;
      color: #292929;
      background-color: #FBFBFB;
   }
   img{
      display: block;
      max-width: 100%;
   }
   a, li, button{
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      text-decoration: none;
      list-style: none;
   }
`;

export default GlobalStyle;
