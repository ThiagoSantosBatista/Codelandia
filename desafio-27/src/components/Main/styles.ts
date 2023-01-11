import styled from "styled-components";

export const CardapioSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 4rem;
  max-width: 192rem;
  margin: 6rem auto 10rem;
  padding: 0 34.6rem;

  img {
    justify-self: end;
  }

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const CardapioContent = styled.div`
  max-width: 52rem;
  font-size: 2.4rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 1.2;
    font-family: var(--font2);
    margin-bottom: 2.4rem;
  }
  p {
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 4.8rem;
  }
`;

export const SobreSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12.4rem;
  max-width: 192rem;
  margin: 0 auto 10rem;
  padding: 0 34.6rem;

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const SobreContent = styled.div`
  max-width: 52rem;
  font-size: 2.4rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    font-family: var(--font2);
    line-height: 1.2;
    margin-bottom: 2.4rem;
  }
  p {
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 4rem;
  }

  a {
    color: #da2535;
    border-bottom: 0.1rem solid #da2535;
  }
`;

export const PopularesSection = styled.section`
  text-align: center;
  max-width: 192rem;
  margin: 0 auto 10rem;
  padding: 0 34.6rem;

  h1{
    font-size: 4.8rem;
    font-weight: 600;
    font-family: var(--font2);
  }

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const PopularesContent = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
  margin-top: 19.4rem;
`;

export const ComentariosSection = styled.section`
  max-width: 192rem;
  margin: 0 auto 10rem;
  padding: 0 34.6rem;

  h1{
    font-size: 4.8rem;
    font-weight: 600;
    font-family: var(--font2);
  }

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const ComentariosContent = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
  margin-top: 4.8rem;
`;
