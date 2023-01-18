import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  gap: 5rem;
  margin-bottom: 10rem;
`;

export const Footer__Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16rem;
  font-size: 1.6rem;

  @media screen and (max-width: 1250px) {
    gap: 10rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: clamp(1.4rem, 1.2875rem + 0.3125vw, 1.6rem);
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
`;
