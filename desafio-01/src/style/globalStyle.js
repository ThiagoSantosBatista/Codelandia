import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
    html{
        font-size: 62.5%;
    }
    body{
        min-height: 100vh;
        background: #F3F5F7;
    }
    li{
        list-style: none;
    }
`;

export default globalStyle;
