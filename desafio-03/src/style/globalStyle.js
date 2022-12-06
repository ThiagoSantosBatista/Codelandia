import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
   }
   html{
      font-size: 62.5%;
   }
   body{
      min-height: 100vh;
      background: #F9F9F9;
      color: #2B2B2B;
   }
   li{
      list-style: none;
   }
`;

export default GlobalStyle
