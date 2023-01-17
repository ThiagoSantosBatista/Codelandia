import styled from 'styled-components';

export const Article = styled.article`
  padding: 4rem;
  background: #f3f3f3;
  border-radius: 1.6rem;

  img{
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
`;
