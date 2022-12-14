import styled from "styled-components";

export const MainStyle = styled.main`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.color.blackBg};
    position: relative;
`;

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    min-height: 100vh;
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        align-items: end;
    }
`;

export const TituloDiv = styled.section`
    padding-top: 4.5rem;
    font-size: clamp(1.8rem, 1.25vw, 2rem);
    text-align: center;
    text-transform: uppercase;
    h1,
    p {
        font-weight: 700;
    }
    h1 {
        margin-top: 3.5rem;
        font-size: clamp(6.4rem, 6.67vw, 9.6rem);
    }
    @media screen and (max-width: 600px) {
        margin: 3.5rem 0 6rem;
    }
`;

export const ContentDiv = styled.section`
    max-width: 68.13%;
    width: 100%;
    display: grid;
    justify-self: center;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "img p"
        "img info"
        "img btn";
    gap: 2.5rem 7.5rem;
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 3rem;
    img {
        grid-area: img;
        width: 18.4rem;
        height: auto;
    }
    .infoText {
        grid-area: p;
    }
    .linha {
        display: none;
        width: 100%;
        height: 0.1rem;
        background: ${(props) => props.theme.color.linhaMobile};
    }

    @media screen and (max-width: 1300px) {
        max-width: 80.13%;
    }
    @media screen and (max-width: 1100px) {
        max-width: 88.13%;
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: auto;
        grid-template-areas:
            "p"
            "info"
            "btn";
        gap: 3.5rem;
        img {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        font-size: 1.4rem;
        grid-template-areas:
            "btn"
            "linha"
            "p";
        gap: 2rem;
        margin-bottom: 0;
        max-width: 100%;
        padding: 3rem 2.4rem;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        background: ${(props) => props.theme.color.blackMobile};
        position: relative;
        .linha {
            grid-area: linha;
            display: block;
        }
    }
`;

export const InfoDiv = styled.div`
    grid-area: info;
    display: flex;
    align-items: center;
    gap: 0 10.5rem;
    p {
        line-height: 1;
        font-weight: 700;
        font-size: clamp(1.6rem, 1.67vw, 2.4rem);
    }

    @media screen and (max-width: 1300px) {
        gap: 0 7.5rem;
    }
    @media screen and (max-width: 600px) {
        position: absolute;
        top: -5rem;
        left: 50%;
        transform: translateX(-50%);
        gap: 0 4rem;
    }
    @media screen and (max-width: 420px) {
        gap: 3rem;
        align-items: center;
    }
    @media screen and (max-width: 340px) {
        gap: 1.5rem;
    }
`;

export const ButtonDiv = styled.div`
    grid-area: btn;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 2rem;

    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem 1rem;
    }
`;

export const Modal = styled.div`
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${(props) => props.theme.color.blackBg};
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
            width: 4rem;
            aspect-ratio: 1;
            border-radius: 50%;
            background: ${(props) => props.theme.color.dark};
        }
    }

    @media screen and (max-width: 650px) {
        iframe {
            width: 80%;
        }
    }
`;
