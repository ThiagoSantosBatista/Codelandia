import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  gap: 5rem;
  padding: 0 34.6rem;
  margin: 0 auto 10rem;
  max-width: 192rem;

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const Footer__Nav = styled.nav`
  display: flex;
  gap: 16rem;
  font-size: 1.6rem;
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
`;
