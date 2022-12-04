import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    min-height: 100vh;
}
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
        color: #F9F9F9;
        position: relative;
    }
    li{
        list-style: none;
    }
    img{
        display: block;
        max-width: 100%;
    }
`;
export const Container = styled.div`
    max-width: 199.2rem;
    margin: 0 auto;
    padding: 0 5%;
`;