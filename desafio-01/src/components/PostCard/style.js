import styled from "styled-components";

export const PostBox = styled.li`
  min-width: 29rem;
  padding: 2.5rem 3rem;
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
`;

export const DataBox = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    svg {
        width: 1.9rem;
        height: 1.6rem;
    }
  }
`;

export const PostData = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.2rem;
  color: #717171;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const PostTitulo = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 0.6rem;
  color: #1a202c;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
export const PostConteudo = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: #717171;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
