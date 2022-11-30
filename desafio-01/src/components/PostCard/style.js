import styled from "styled-components";

export const PostBox = styled.li `
  min-width: 35rem;
  padding: 2.5rem 3rem;
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05); 
`;

export const DataBox = styled.div `
  display: flex;
  justify-content: space-between;
  svg{
    cursor: pointer;
  }
`;

export const PostData = styled.p `
    font-size: 1.6rem;
    margin-bottom: 2.2rem;
    color: #717171;
`

export const PostTitulo = styled.h1 `
    font-size: 2.6rem;
    margin-bottom: 0.6rem;
    color: #1A202C;
`
export const PostConteudo = styled.p `
    font-size: 1.8rem;
    line-height: 1.5;
    color: #717171;
`