import styled from 'styled-components';

export const Main = styled.main`
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 34.6rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    font-family: var(--font2);
    line-height: 1.2;
  }

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const Cardapio__Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 4rem;
  margin: 6rem 0 10rem;

  h1 {
    margin-bottom: 2.4rem;
  }

  img {
    justify-self: end;
  }
`;

export const Cardapio__Content = styled.div`
  max-width: 52rem;
  font-size: 2.4rem;
  p {
    margin-bottom: 4.8rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const Sobre__Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12.4rem;
  margin-bottom: 10rem;
`;

export const Sobre__Content = styled.div`
  max-width: 52rem;
  font-size: 2.4rem;

  h1 {
    margin-bottom: 2.4rem;
  }

  p {
    margin-bottom: 4rem;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: #da2535;
    border-bottom: 0.1rem solid #da2535;
  }
`;

export const Populares__Section = styled.section`
  margin-bottom: 10rem;
  text-align: center;
`;

export const Populares__Content = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
  margin-top: 19.4rem;
`;

export const Comentarios__Section = styled.section`
  margin-bottom: 10rem;
`;

export const Comentarios__Content = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
  margin-top: 4.8rem;
`;

export const Localizacao__Section = styled.section`
  margin-bottom: 10rem;

  h1 {
    margin-bottom: 4.8rem;
  }
  img{
    margin-bottom: 5.6rem;
  }
`;
