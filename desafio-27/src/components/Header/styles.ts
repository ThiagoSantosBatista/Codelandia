import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 13rem;
  padding: 0 34.6rem;
  margin: 0 auto;
  max-width: 192rem;
  z-index: 10;

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const Nav__Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 9rem;
  font-size: 2.4rem;
  font-weight: 500;
`;
