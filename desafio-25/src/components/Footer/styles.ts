import styled from "styled-components";

export const Footer = styled.footer`
  background: #f9f9f9;
`;

export const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  margin: 0 auto;
  padding: 9rem 34.7rem;
  max-width: 192rem;
  @media screen and (max-width: 1920px) {
    padding: 9rem 18%;
  }
  @media screen and (max-width: 1850px) {
    padding: 9rem 14%;
  }
  @media screen and (max-width: 1700px) {
    padding: 9rem 12%;
  }
  @media screen and (max-width: 1500px) {
    padding: 9rem 8%;
  }
  @media screen and (max-width: 1300px) {
    padding: 9rem 5%;
  }
  @media screen and (max-width: 1000px) {
    .logo {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 11.6rem;
  @media screen and (max-width: 1000px) {
    gap: 7.8rem;
  }
`;

export const FooterUl = styled.ul`
  font-size: clamp(1.2rem, 0.94vw + 1rem, 1.8rem);
  font-weight: 400;
  li:first-child {
    font-size: clamp(1.4rem, 0.94vw + 1rem, 1.8rem);
    font-weight: 600;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1.6rem;
  }
  li:last-child {
    margin: 0;
  }
`;
