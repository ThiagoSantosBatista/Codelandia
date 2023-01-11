import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13rem;
  width: 100%;
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 34.6rem;
  z-index: 10;

  @media screen and (max-width: 1920px) {
    padding: 0 18.02%;
  }
  @media screen and (max-width: 1720px) {
    padding: 0 12.02%;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 9rem;
  font-size: 2.4rem;
  font-weight: 500;
`;
