import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0 16.5rem;

    @media screen and (max-width: 1440px) {
        padding: 0 11.46vw;
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
    }
    p:nth-child(3) {
        font-size: 1.6rem;
        line-height: 1.5;
        margin-bottom: 4.6rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    gap: 1.6rem;
`;

export const DiretorP = styled.p`
    line-height: 1.5;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
`;
