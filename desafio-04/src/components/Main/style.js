import styled from "styled-components";

export const MainStyle = styled.main`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    max-width: 192rem;
    margin: 0 auto;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

export const ImgDiv = styled.div`
    display: grid;
    place-items: center;
    background: #f7fafc;
    width: 100%;
    height: 100%;
    img {
        max-width: 100%;
        height: 33rem;
        width: auto;
        padding: 0 5%;
    }

    @media screen and (max-width: 850px) {
        display: none;
    }
`;
