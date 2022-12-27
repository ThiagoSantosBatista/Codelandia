import styled from "styled-components";
interface Props {
  local?: string;
}

export const Button = styled.button<Props>`
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
  transition: opacity .3s;
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
  @media screen and (max-width: 600px){
    width: ${props => props.local === "header" ? '10rem' : '100%'};
    height: ${props => props.local === "header" ? '2.4rem' : '3.2rem'};
  }
`;
