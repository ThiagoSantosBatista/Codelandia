import styled from "styled-components";

export const Container = styled.main`
  max-width: 144rem;
  margin: 10rem auto;
  padding: 0 26rem;

  @media screen and (max-width: 1440px){
    padding: 0 18%;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 12%;
  }
  @media screen and (max-width: 600px) {
    margin: 5rem auto;
    padding: 0 5%;
  }
`;
