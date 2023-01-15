import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.5rem;
  background: #f3f3f3;
  border-radius: 3.2rem;

  img {
    align-self: center;
    width: auto;
    height: 29rem;
    margin-top: -14rem;
  }

  h2 {
    margin-top: 3.8rem;
    font-size: 3.2rem;
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
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;
