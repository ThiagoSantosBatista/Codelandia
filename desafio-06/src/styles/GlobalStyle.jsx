import { createGlobalStyle } from "styled-components";
import ImgBg from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 400;
      font-family: 'B612', sans-serif;
   }
   html{
      font-size: 62.5%;
   }
   body{
      min-height: 100vh;
      color: ${(props) => props.theme.color.white};
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      background-image: url(${ImgBg});

      @media screen and (max-width: 600px){
         background-size: auto 65rem;
      }
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
