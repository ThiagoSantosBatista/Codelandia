import styled from 'styled-components';

export const Article = styled.article`
  padding: 4rem;
  background: #f3f3f3;
  border-radius: 1.6rem;

  img {
    height: 10rem;
    width: auto;
  }

  h2 {
    margin-top: 2.4rem;
    font-size: 2.8rem;
    font-weight: 500;
    font-family: var(--font2);
    line-height: 1.2;
  }

  p {
    margin-top: 1rem;
    max-width: 30ch;
    color: #616161;
    font-size: 2rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;

    h2 {
      font-size: clamp(1.8rem, 1.2375rem + 1.5625vw, 2.8rem);
    }
    p {
      font-size: clamp(1.6rem, 1.375rem + 0.625vw, 2rem);
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
