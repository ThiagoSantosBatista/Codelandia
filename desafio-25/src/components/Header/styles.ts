import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  margin: 0 auto;
  padding: 0 34.7rem;
  max-width: 192rem;
  position: relative;

  .bgMobile {
    display: none;
    position: fixed;
    inset: 0;
    min-height: 100vh;
    width: 100%;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .btnHeader {
    cursor: pointer;
    display: none;
    border: none;
    background: none;
  }

  @media screen and (max-width: 1920px) {
    padding: 0 18%;
  }
  @media screen and (max-width: 1850px) {
    padding: 0 14%;
  }
  @media screen and (max-width: 1700px) {
    padding: 0 12%;
  }
  @media screen and (max-width: 1500px) {
    padding: 0 8%;
    height: 7.2rem;
  }
  @media screen and (max-width: 1300px) {
    padding: 0 5%;
  }
  @media screen and (max-width: 900px) {
    padding: 0 5%;
    .menuAbrir {
      display: block;
    }
    .nav {
      display: none;
      position: fixed;
      top: 0;
      left: 20%;
      width: 80%;
      height: 100vh;
      background-color: #ffffff;
      z-index: 10;
      overflow-y: auto;
    }
    &.ativo {
      .bgMobile {
        display: block;
      }
      .menuAbrir {
        display: none;
      }
      .nav {
        display: flex;
        flex-direction: column;
        .menuFechar {
          display: block;
          position: absolute;
          top: 2.5rem;
          right: 5%;
        }
      }
    }
  }
`;

export const NavUlPrincipal = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;
  font-size: 1.8rem;

  li {
    transition: all 0.3s;
  }

  @media (hover: hover) {
    li:hover {
      color: #797979;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 10rem;
  }
`;

export const NavUlSecundario = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-left: 0.8rem;
  svg {
    cursor: pointer;
    & path {
      transition: all 0.3s;
    }
  }

  @media (hover: hover) {
    svg:hover path {
      stroke: #797979;
    }
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;
