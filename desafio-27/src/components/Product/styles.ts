import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.5rem;
  background: #f3f3f3;
  border-radius: 3.2rem;
  margin-top: 14rem;

  img {
    align-self: center;
    width: auto;
    height: 22rem;
    margin-top: -14rem;
  }

  h2 {
    margin-top: 3.8rem;
    font-size: 2.8rem;
    font-weight: 500;
    font-family: var(--font2);
    line-height: 1.2;
  }

  p {
    align-self: center;
    margin-top: 1.6rem;
    max-width: 35ch;
    color: #616161;
    font-size: 1.8rem;
    line-height: 1.5;
  }

  p:last-child {
    margin-top: 3.2rem;
    color: #292929;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 1.2;
  }

  @media screen and (max-width: 1000px) {
    h2,
    p:last-child {
      font-size: clamp(2.4rem, 2.175rem + 0.625vw, 2.8rem);
    }
    p {
      font-size: clamp(1.6rem, 1.4875rem + 0.3125vw, 1.8rem);
    }
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
