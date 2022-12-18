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
    gap: 3rem;
    min-height: 100vh;
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
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
`;

export const ContentDiv = styled.section`
    width: 68.13%;
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
`;

export const InfoDiv = styled.div`
    grid-area: info;
    display: flex;
    align-items: center;
    gap: 0 10.5rem;
    p {
        font-weight: 700;
        font-size: 2.4rem;
    }
`;

export const ButtonDiv = styled.div`
    grid-area: btn;
    display: flex;
    align-items: end;
    gap: 2rem;
`;
