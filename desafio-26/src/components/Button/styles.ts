import styled from "styled-components";

export const Button = styled.button`
  font-size: ${(props) => props.theme.font.btn};
  font-weight: 700;
  width: 19rem;
  height: 4rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.blue};
  transition: all .3s;
  @media (hover: hover) {
    &:hover {
      opacity: 0.6;
    }
  }
  @media (hover: none) {
    &:hover {
      opacity: 1;
    }
  }
`;
