import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  grid-template-areas:
    "TPrincipal ImgRight"
    "ImgLeft    TSecundario";
  gap: 9rem 12.4rem;
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 18%;
  .ImgRight {
    grid-area: ImgRight;
  }
`;

export const TPrincipalDiv = styled.div`
  grid-area: TPrincipal;
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
`;

export const ImgLeftDiv = styled.div`
  grid-area: ImgLeft;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const TSecundarioDiv = styled.div`
  grid-area: TSecundario;
  h2 {
    font-size: ${(props) => props.theme.font.h2};
    font-weight: 500;
    max-width: 32.1rem;
    margin-bottom: 3.2rem;
  }
`;
