import styled from "styled-components";

export const Footer = styled.footer`
  background: #f9f9f9;
`;

export const FooterBox = styled.div`
  display: flex;
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
  @media screen and (max-width: 1650px) {
    padding: 9rem 10%;
  }
  @media screen and (max-width: 1500px) {
    padding: 9rem 5%;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 11.6rem;
`;


export const FooterUl = styled.ul`
  font-size: 1.8rem;
  font-weight: 400;
  li:first-child{
    font-weight: 600;
    margin-bottom: 2rem;
  }
  li{
    margin-bottom: 1.6rem;
  }
`