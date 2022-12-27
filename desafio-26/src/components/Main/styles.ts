import styled from "styled-components";

export const Main = styled.main`
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 34.6rem;
  h2 {
    font-size: ${(props) => props.theme.font.h2};
    font-weight: 500;
  }
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

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 39.6rem;
  align-items: center;
  gap: 12.4rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 31rem;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 0;
    margin-bottom: 6rem;
    .ImgRight {
      display: none;
    }
  }
`;

export const TPrincipalDiv = styled.div`
  h1 {
    font-size: ${(props) => props.theme.font.h1};
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 1.6rem;
    max-width: 57.6rem;
  }
  p {
    font-size: ${(props) => props.theme.font.p3};
    line-height: 1.5;
    margin-bottom: 3.2rem;
    color: ${(props) => props.theme.color.black400};
  }
  button {
    margin-bottom: 4.8rem;
  }
  .estatisticas {
    display: flex;
    gap: 4.8rem;
    text-align: center;
    p {
      font-size: ${(props) => props.theme.font.p4};
      font-weight: 600;
      line-height: 1;
      margin: 0;
      color: ${(props) => props.theme.color.black600};
      span {
        font-size: ${(props) => props.theme.font.p2};
        font-weight: 500;
        color: ${(props) => props.theme.color.black400};
      }
    }
  }
  @media screen and (max-width: 800px) {
    h1 {
      margin-bottom: 0.8rem;
    }
    p {
      margin-bottom: 2.4rem;
    }
    button {
      margin-bottom: 4rem;
    }
  }
  @media screen and (max-width: 400px) {
    .estatisticas {
      justify-content: space-between;
      gap: 1rem;
    }
  }
`;

export const ImgLeftDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.6rem;
  @media screen and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    img {
      width: 100%;
      height: 20rem;
    }
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 4rem;
  }
`;

export const TSecundario = styled.header`
  h2 {
    max-width: 32.1rem;
    margin-bottom: 3.2rem;
  }
  @media screen and (max-width: 800px) {
    h2 {
      margin-bottom: 1.6rem;
    }
  }
`;

export const ArtistasSection = styled.section`
  margin-bottom: 8rem;
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    gap: 2rem;
    color: ${(props) => props.theme.color.white};
    @media (hover: hover) {
      &:has(li:hover) li:not(:hover) {
        opacity: 0.6;
        scale: 0.97;
      }
    }
    @media (hover: none) {
      &:has(li:hover) li:not(:hover) {
        opacity: 1;
        scale: 1;
      }
    }
  }
  li {
    position: relative;
    transition: all 0.3s;
    img {
      height: 48.4rem;
      width: 100%;
    }
    h3,
    p {
      font-size: ${(props) => props.theme.font.h3};
      font-weight: 600;
      position: absolute;
      top: 2.4rem;
      left: 2.4rem;
    }
    p {
      top: 6.1rem;
      font-weight: 500;
      font-size: ${(props) => props.theme.font.p1};
    }
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 4rem;
  }
`;
