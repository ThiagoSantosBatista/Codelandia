import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    min-height: calc(100vh - 16.5rem);
    gap: 6rem;
    padding: 0 16.5rem 4.1rem;

    img {
        width: 50rem;
    }

    @media screen and (max-width: 1440px) {
        padding: 0 11.46vw 4.1rem;
    }
    @media screen and (max-width: 1100px) {
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
        justify-content: center;
        gap: 2rem;

        img {
            width: 40rem;
            order: -1;
        }
    }
`;

export const ContentBox = styled.div`
    max-width: 44.5rem;
    h1 {
        max-width: 44rem;
        font-size: 6.8rem;
        font-weight: 900;
        line-height: 1.2;
        margin-bottom: 2.5rem;
        @media screen and (max-width: 600px) {
            font-size: clamp(5.2rem, 4.72vw, 6.8rem);
        }
        @media screen and (max-width: 400px) {
            font-size: clamp(4.2rem, 4.72vw, 6.8rem);
        }
    }
    p:nth-child(3) {
        font-size: 1.6rem;
        line-height: 1.5;
        margin-bottom: 4.6rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    margin-left: 1.2rem;
    gap: 1.6rem;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const DiretorP = styled.p`
    line-height: 1.5;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
`;

export const Modal = styled.div`
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    div {
        display: grid;
        place-items: center;
        position: relative;
        width: 100%;
        height: 100%;

        button {
            position: absolute;
            top: 2rem;
            right: 2rem;
            font-size: 2rem;
            color: red;
            border: 0.15rem solid red;
            cursor: pointer;
            background: #f9f9f9;
            width: 4rem;
            aspect-ratio: 1;
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 650px) {
        iframe {
            width: 80%;
        }
    }
`;
