import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 192rem;
  margin: 8rem auto;
  padding: 0 34.6rem;
  @media screen and (max-width: 1920px) {
    padding: 0 18%;
  }
  @media screen and (max-width: 1800px) {
    padding: 0 14%;
  }
  @media screen and (max-width: 1600px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 1450px) {
    padding: 0 5%;
  }
`;

export const FooterNav = styled.nav`
  font-size: ${(props) => props.theme.font.nav};
  text-transform: uppercase;
  ul {
    display: flex;
    gap: 3.7rem;
    font-weight: 500;
  }
  a {
    padding: 1rem;
    transition: all 0.3s;
    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.color.black400};
      }
    }
    @media (hover: none) {
      &:hover {
        color: ${(props) => props.theme.color.black600};
      }
    }
  }
`;
