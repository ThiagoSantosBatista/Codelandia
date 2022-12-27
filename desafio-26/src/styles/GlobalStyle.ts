import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
   }
   html{
      font-size: 62.5%;
      scroll-behavior: smooth;
   }
   body{
      min-height: 100vh;
      color: ${(props) => props.theme.color.black600};
      background: ${(props) => props.theme.color.white};
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
