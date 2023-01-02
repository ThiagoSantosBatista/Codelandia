import styled from "styled-components";

export const HeroSection = styled.section`
  background: #f9f9f9;
`;

export const HeroBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
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

export const HeroContentBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "h1  h1"
    "p   p"
    "btn link";
  gap: 0 4rem;
  max-width: 49.8rem;
  h1 {
    grid-area: h1;
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.6rem;
  }
  p {
    grid-area: p;
    font-size: 1.8rem;
    line-height: 1.5;
    margin-bottom: 3.2rem;
    color: #797979;
  }
  button {
    grid-area: btn;
    justify-self: start;
  }
  a {
    grid-area: link;
    align-self: center;
    justify-self: start;
    font-size: 1.8rem;
    border-bottom: 0.1rem solid #272727;
  }
`;
