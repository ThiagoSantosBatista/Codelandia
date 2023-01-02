import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.8rem;
  padding: 1.2rem 3.2rem;
  border: none;
  cursor: pointer;
  color: ${props => props.color === "branco" ? "#272727" : "#ffffff"};
  background: ${props => props.color === "branco" ? "#ffffff" : "#272727"};
` 