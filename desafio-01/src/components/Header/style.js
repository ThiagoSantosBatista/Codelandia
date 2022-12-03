import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  background: linear-gradient(to right, #574ae8, #3ea1db);
`;

export const Container = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 4rem 26rem;

  @media screen and (max-width: 1440px) {
    padding: 4rem 18%;
  }
  @media screen and (max-width: 1200px) {
    padding: 4rem 12%;
  }
  @media screen and (max-width: 600px) {
    padding: 4rem 5%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 4rem;
    .logo {
      width: 10rem;
    }
  }
`;
