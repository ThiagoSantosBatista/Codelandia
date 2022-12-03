import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    html{
        font-size: 62.5%;
    }
    body{
        min-height: 100vh;
        background: #F9F9F9;
    }
    li{
        list-style: none;
    }
`;
export const Container = styled.div`
  max-width: 199.2rem;
  margin: 0 auto;
`;
