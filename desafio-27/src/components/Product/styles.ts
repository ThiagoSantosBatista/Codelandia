import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.5rem;
  border-radius: 3.2rem;
  background: #f3f3f3;
  
  img {
    margin-top: -14rem;
    width: auto;
    height: 29rem;
    align-self: center;
  }
  
  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 3.8rem;
  }

  p {
    align-self: center;
    font-size: 1.8rem;
    line-height: 1.5;
    max-width: 35ch;
    margin-top: 1.6rem;
  }

  p:last-child {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 3.2rem;
  }
`;
