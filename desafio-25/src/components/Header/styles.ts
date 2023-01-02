import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  margin: 0 auto;
  padding: 0 34.7rem;
  max-width: 192rem;
  @media screen and (max-width: 1920px) {
    padding: 0 18%;
  }
  @media screen and (max-width: 1850px) {
    padding: 0 14%;
  }
  @media screen and (max-width: 1650px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 1500px) {
    padding: 0 5%;
  }
`;

export const NavUlPrincipal = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;
  font-size: 1.8rem;
`;

export const NavUlSecundario = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-left: 0.8rem;
  svg {
    cursor: pointer;
  }
`;
