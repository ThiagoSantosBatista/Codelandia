import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: clamp(1.2rem, 0.94vw + 1rem, 1.8rem);
  padding: 1.2rem 3.2rem;
  cursor: pointer;
  border: 0.1rem solid #272727;
  transition: all .3s;
  color: ${(props) => (props.color === "branco" ? "#272727" : "#ffffff")};
  background: ${(props) => (props.color === "branco" ? "#ffffff" : "#272727")};

  @media (hover: hover) {
    &:hover {
      color: ${(props) => (props.color === "branco" ? "#ffffff" : "#272727")};
      background: ${(props) =>
        props.color === "branco" ? "#272727" : "#ffffff"};
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 0.8rem 3.2rem;
  }
  @media screen and (max-width: 375px) {
    padding: 0.8rem 2rem;
  }
`;
