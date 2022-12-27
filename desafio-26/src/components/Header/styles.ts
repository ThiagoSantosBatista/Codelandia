import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  max-width: 192rem;
  margin: 4rem auto 8rem;
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
  @media screen and (max-width: 800px) {
    margin: 2.4rem auto 4.8rem;

  }
`;

