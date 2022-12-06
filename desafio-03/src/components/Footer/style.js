import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: grid;
    place-items: center;
    max-width: 192rem;
    margin: 0 auto;
    padding: 8.6rem 33.9rem 8rem;
    background: #d7d4ff;

    h2 {
        font-size: 3.2rem;
        font-family: "Merriweather", serif;
        margin-bottom: 6rem;
        line-height: 1.3;
    }

    @media screen and (max-width: 1920px) {
        padding: 8.6rem 17.66% 8rem;
    }
    @media screen and (max-width: 1650px) {
        padding: 8.6rem 9.66% 8rem;
    }
`;
