import styled from "styled-components";

export const CardapioSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  max-width: 192rem;
  margin: 6rem auto 0;
  padding: 0 34.6rem;

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
`;

export const CardapioContent = styled.div`
    max-width: 52rem;

    h1{
        font-size: 4.8rem;
        font-weight: 600;
        margin-bottom: 2.4rem;
    }
    p{
        font-size: 2.4rem;
        font-weight: 400;
        margin-bottom: 4.8rem;
    }
`
