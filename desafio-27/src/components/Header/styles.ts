import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  z-index: 10;

  @media screen and (max-width: 1050px) {
    height: 7.2rem;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 100%;
  margin: 0 auto;
  max-width: 122.8rem;
  background-color: #fbfbfb;

  .bgMobile {
    display: none;
    position: fixed;
    inset: 0;
    min-height: 100vh;
    width: 100%;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .btnHeader {
    cursor: pointer;
    display: none;
    border: none;
    background: none;
    svg {
      height: 2.4rem;
      width: auto;
    }
  }
  @media screen and (max-width: 1450px) {
    width: 80%;
  }
  @media screen and (max-width: 1250px) {
    width: 85%;
  }

  @media screen and (max-width: 1050px) {
    .logo {
      width: 12rem;
      height: auto;
    }
    .menuAbrir {
      display: block;
    }
    .btnEntrar {
      display: none;
      position: absolute;
      top: 28rem;
      left: 60%;
      transform: translateX(-50%);
      z-index: 10;
    }
    nav {
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
      .menuAbrir,
      .bgMobile,
      .btnEntrar {
        display: block;
      }
      nav {
        display: block;
        .menuFechar {
          display: block;
          position: absolute;
          top: 2.1rem;
          right: 8%;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .logo {
      width: 9rem;
    }
  }
`;

export const Nav__Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 9rem;
  font-size: 1.8rem;
  font-weight: 500;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin-top: 10rem;
    gap: 4rem;
  }
`;
