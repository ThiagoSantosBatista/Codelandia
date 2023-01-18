import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  gap: 5rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 6rem;
    svg {
      width: 12rem;
      height: auto;
    }
  }
  @media screen and (max-width: 500px) {
    gap: 3.2rem;
    svg {
      width: 9rem;
    }
  }
`;

export const Footer__Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16rem;
  font-size: 1.6rem;

  @media screen and (max-width: 1250px) {
    gap: 5rem 10rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: clamp(1.4rem, 1.2875rem + 0.3125vw, 1.6rem);
  }
  @media screen and (max-width: 450px) {
    gap: 4rem 5rem;
  }
`;

export const Nav__Ul = styled.ul`
  li {
    margin-bottom: 0.8rem;
    color: #616161;
    line-height: 1.5;
  }

  li:first-child {
    margin-bottom: 2.4rem;
    color: #292929;
    font-size: 2.8rem;
    font-weight: 500;
    font-family: var(--font2);
    line-height: 1.3;
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1000px) {
    li:first-child {
      font-size: clamp(1.6rem, 0.925rem + 1.875vw, 2.8rem);
    }
  }
  @media screen and (max-width: 700px) {
    li:first-child {
      margin-bottom: 1.6rem;
    }
  }
`;
