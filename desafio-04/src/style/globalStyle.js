import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
   }
   html{
      font-size: 62.5%;
   }
   body{
      min-height: 100vh;
      color: #1A202C;
   }
   a{
      text-decoration: none;
   }
`

export default GlobalStyle