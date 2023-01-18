import styled from 'styled-components';

export const Main = styled.main`
  h1 {
    font-size: 4rem;
    font-weight: 600;
    font-family: var(--font2);
    line-height: 1.2;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: clamp(2.8rem, 2.125rem + 1.875vw, 4rem);
    }
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
    height: 48rem;
    width: auto;
    object-fit: cover;
    object-position: left;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: auto;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    gap: 6rem;
    margin: 4rem 0 6rem;
  }
`;

export const Cardapio__Content = styled.div`
  max-width: 52rem;
  font-size: 2rem;
  p {
    margin-bottom: 4.8rem;
    font-weight: 400;
    line-height: 1.5;
  }
  @media screen and (max-width: 1000px) {
    max-width: 40rem;
    font-size: clamp(1.6rem, 1.375rem + 0.625vw, 2rem);
  }
  @media screen and (max-width: 850px) {
    max-width: 56rem;
    justify-self: center;
  }
  @media screen and (max-width: 600px) {
    p {
      margin-bottom: 3.2rem;
    }
  }
`;

export const Sobre__Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12.4rem;
  margin-bottom: 10rem;

  img {
    height: 46rem;
    width: auto;
    border-radius: 1.6rem;
    object-fit: cover;
  }

  @media screen and (max-width: 1250px) {
    gap: 7rem;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    text-align: center;

    img {
      justify-self: center;
    }
  }
  @media screen and (max-width: 650px) {
    img {
      height: 35rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
`;

export const Sobre__Content = styled.div`
  max-width: 52rem;
  font-size: 2rem;

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

  @media screen and (max-width: 1100px) {
    max-width: 40rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: clamp(1.6rem, 1.375rem + 0.625vw, 2rem);
  }
  @media screen and (max-width: 900px) {
    justify-self: center;
    max-width: 60rem;
  }
`;

export const Populares__Section = styled.section`
  margin-bottom: 10rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 6rem;
  }
`;

export const Populares__Content = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
  margin-top: 5.4rem;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;

export const Comentarios__Section = styled.section`
  margin-bottom: 10rem;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 6rem;
  }
`;

export const Comentarios__Content = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
  margin-top: 4.8rem;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;

export const Localizacao__Section = styled.section`
  margin-bottom: 10rem;

  h1 {
    margin-bottom: 4.8rem;
  }
  img {
    margin-bottom: 5.6rem;
    border-radius: 1.6rem;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
  @media screen and (max-width: 750px) {
    img {
      height: 24.2rem;
      width: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      margin-bottom: 3rem;
    }
    img {
      margin-bottom: 3.2rem;
    }
  }
`;
