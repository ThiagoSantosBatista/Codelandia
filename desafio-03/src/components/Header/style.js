import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    background: #d7d4ff;
`;

export const HeaderBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
    min-height: 56rem;
    max-width: 192rem;
    margin: 0 auto;
    padding: 0 33.9rem;

    svg {
        max-width: 100%;
        justify-self: end;
    }

    @media screen and (max-width: 1920px) {
        padding: 0 17.66%;
    }
    @media screen and (max-width: 1650px) {
        padding: 0 9.66%;
    }
    @media screen and (max-width: 1250px) {
        padding: 0 4.66%;
    }
    @media screen and (max-width: 900px) {
        justify-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        gap: 10rem;

        svg {
            margin-bottom: 5.5rem;
            justify-self: center;
        }
    }
`;
export const HeaderContent = styled.div`
    h1 {
        font-size: clamp(3.2rem, 1.88vw, 3.6rem);
        font-family: "Merriweather", serif;
        line-height: 1.3;
        margin-bottom: 1.75rem;
    }

    p {
        font-size: clamp(1.8rem, 0.94vw, 1.9rem);
        max-width: 35ch;
        line-height: 1.5;
        margin-bottom: 4.5rem;
        color: #555555;
    }

    @media screen and (max-width: 900px) {
        h1 {
            margin-top: 5.5rem;
        }
        p {
            margin-bottom: 3.2rem;
        }
    }
`;
