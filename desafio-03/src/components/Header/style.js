import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    background: #d7d4ff;
`;

export const HeaderBox = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
    min-height: 56rem;
    max-width: 192rem;
    margin: 0 auto;
    padding: 0 33.9rem;

    @media screen and (max-width: 1920px) {
        padding: 0 17.66%;
    }
    @media screen and (max-width: 1650px) {
        padding: 0 9.66%;
    }
`;
 export const HeaderContent = styled.div`
     h1 {
        font-size: 3.6rem;
        font-family: "Merriweather", serif;
        line-height: 1.3;
        margin-bottom: 1.75rem;
    }

    p {
      font-size: 1.9rem;
      max-width: 35ch;
      line-height: 1.5;
      margin-bottom: 4.5rem;
      color: #555555;
    }
 `