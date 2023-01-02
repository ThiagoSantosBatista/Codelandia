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
  header {
    grid-area: h1;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 1.6rem;
    }
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

export const DesignSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 13rem 34.7rem 8.2rem;
  max-width: 192rem;

  @media screen and (max-width: 1920px) {
    padding: 13rem 18% 8.2rem;
  }
  @media screen and (max-width: 1850px) {
    padding: 13rem 14% 8.2rem;
  }
  @media screen and (max-width: 1650px) {
    padding: 13rem 10% 8.2rem;
  }
  @media screen and (max-width: 1500px) {
    padding: 13rem 5% 8.2rem;
  }
`;

export const DesignContentBox = styled.div`
  max-width: 58.5rem;
  div {
    padding: 2rem 3.2rem 3rem;
    margin-bottom: 2.4rem;
    color: #ffffff;
    background: #272727;
    h2 {
      font-size: 2.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }
  a {
    font-size: 1.8rem;
    border-bottom: 0.1rem solid #272727;
  }
`;

export const DesignImgBox = styled.div`
  position: relative;
  margin: 5rem 0 0 5rem;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    bottom: 5rem;
    right: 5rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #272727;
  }
`;

export const GaleriaSection = styled.section`
  background: #f9f9f9;
`;
export const GaleriaSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding: 5.5rem 34.7rem;
  max-width: 192rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 1.8rem;
  }
  p {
    align-self: center;
    font-size: 1.8rem;
    line-height: 1.5;
    max-width: 77.1rem;
    margin-bottom: 3.2rem;
    color: #797979;
  }

  @media screen and (max-width: 1920px) {
    padding: 5.5rem 18%;
  }
  @media screen and (max-width: 1850px) {
    padding: 5.5rem 14%;
  }
  @media screen and (max-width: 1650px) {
    padding: 5.5rem 10%;
  }
  @media screen and (max-width: 1500px) {
    padding: 5.5rem 5%;
  }
`;

export const GaleriaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31.2rem, 1fr));
  gap: 2rem;
  img {
    width: 100%;
  }
`;
