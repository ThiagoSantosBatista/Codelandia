import styled from "styled-components";

export const Main = styled.main`
  @media screen and (max-width: 1920px) {
    .padding {
      padding-left: 18%;
      padding-right: 18%;
    }
  }
  @media screen and (max-width: 1850px) {
    .padding {
      padding-left: 14%;
      padding-right: 14%;
    }
  }
  @media screen and (max-width: 1700px) {
    .padding {
      padding-left: 12%;
      padding-right: 12%;
    }
  }
  @media screen and (max-width: 1500px) {
    .padding {
      padding-left: 8%;
      padding-right: 8%;
    }
  }
  @media screen and (max-width: 1300px) {
    .padding {
      padding-left: 5%;
      padding-right: 5%;
    }
  }
`;

export const HeroSection = styled.section`
  background: #f9f9f9;
`;

export const HeroBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  margin: 0 auto;
  padding: 0 34.7rem;
  max-width: 192rem;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    padding-top: 6rem;
    padding-bottom: 4rem;
    gap: 0;
    img {
      display: none;
      &::after {
        display: none;
      }
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: start;
  }
`;

export const HeroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 49.8rem;
  header {
    h1 {
      font-size: clamp(2.4rem, 2.1vw + 1rem, 4rem);
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 1.6rem;
    }
  }
  .btnBox {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  p {
    font-size: clamp(1.4rem, 0.94vw + 1rem, 1.8rem);
    line-height: 1.5;
    margin-bottom: 3.2rem;
    color: #797979;
  }
  a {
    font-size: clamp(1.2rem, 0.94vw + 1rem, 1.8rem);
    border-bottom: 0.1rem solid #272727;
    transition: all 0.3s;
  }
  @media (hover: hover) {
    a:hover {
      color: #797979;
      border-bottom: 0.1rem solid #797979;
    }
  }
  @media screen and (max-width: 1300px) {
    max-width: 84rem;
    text-align: center;
    .btnBox {
      align-self: center;
    }
    @media screen and (max-width: 600px) {
      max-width: 84rem;
      text-align: start;
      .btnBox {
        gap: 2rem;
        align-self: start;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    max-width: 74rem;
  }
`;

export const DesignSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  margin: 0 auto;
  padding: 13rem 34.7rem 8.2rem;
  max-width: 192rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-top: 8rem;
    padding-bottom: 6rem;
    gap: 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const DesignContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 58.5rem;
  div {
    padding: 2rem 3.2rem 3rem;
    margin-bottom: 2.4rem;
    color: #ffffff;
    background: #272727;
    h2 {
      font-size: clamp(2.4rem, 1.46vw + 1rem, 2.8rem);
      font-weight: 600;
      margin-bottom: 2rem;
    }
    p {
      font-size: clamp(1.4rem, 0.83vw + 1rem, 1.6rem);
      line-height: 1.5;
    }
  }
  a {
    font-size: clamp(1.2rem, 0.94vw + 1rem, 1.8rem);
    border-bottom: 0.1rem solid #272727;
    align-self: flex-start;
    transition: all 0.3s;
  }

  @media (hover: hover) {
    a:hover {
      color: #797979;
      border-bottom: 0.1rem solid #797979;
    }
  }
  @media screen and (max-width: 1300px) {
    max-width: 52rem;
  }
  @media screen and (max-width: 1100px) {
    max-width: 44rem;
  }
  @media screen and (max-width: 1000px) {
    max-width: 56rem;
    a {
      align-self: center;
    }
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
  @media screen and (max-width: 1000px) {
    display: none;
    &::after {
      display: none;
    }
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
    font-size: clamp(2.4rem, 1.67vw + 1rem, 3.2rem);
    font-weight: 600;
    margin-bottom: 1.8rem;
  }
  p {
    align-self: center;
    font-size: clamp(1.4rem, 0.94vw + 1rem, 1.8rem);
    line-height: 1.5;
    max-width: 77.1rem;
    margin-bottom: 3.2rem;
    color: #797979;
  }
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const GaleriaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29.2rem, 1fr));
  gap: 2rem;
  img {
    width: 100%;
    height: auto;
    max-height: 55rem;
    object-fit: cover;
  }
  li{
    transition: all .3s;
  }

  @media (hover: hover) {
    &:has(li:hover) li:not(:hover) {
      opacity: 0.4;
      transform: scale(0.98);
    }
  }
  @media screen and (max-width: 1000px) {
    img {
      max-height: 45rem;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      max-height: 35rem;
    }
  }
`;

export const OrcamentoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 7.8rem 34.7rem;
  max-width: 192rem;

  h2 {
    font-size: clamp(2.4rem, 1.67vw + 1rem, 3.2rem);
    font-weight: 600;
    margin-bottom: 1.6rem;
  }
  p {
    font-size: clamp(1.4rem, 0.94vw + 1rem, 1.8rem);
    margin-bottom: 3.6rem;
    color: #797979;
  }
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
