import styled from "styled-components";

export const MainStyle = styled.main`
    max-width: 192rem;
    margin: 0 auto;
    padding: 15rem 33.9rem;

    @media screen and (max-width: 1920px) {
        padding: 15rem 17.66%;
    }
    @media screen and (max-width: 1650px) {
        padding: 15rem 9.66%;
    }
`;

export const CardUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    gap: 6.8rem 5.78%;
`;
