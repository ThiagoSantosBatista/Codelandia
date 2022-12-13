import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }
   html{
      font-size: 62.5%;
   }
   body{
      max-width: 144rem;
      margin: 0 auto;
      min-height: 100vh;
      color: #F9F9F9;
      background: linear-gradient(135deg, #628E75, #1A4855);
      position: relative;
   }
   img{
      display: block;
      max-width: 100%;
   }
   li{
      list-style: none;
   }
   a{
      text-decoration: none;
   }
`;

export default GlobalStyle;
