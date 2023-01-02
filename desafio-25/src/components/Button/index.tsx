import React from 'react'
import * as S from "./styles"

interface ButtonProps {
  color?: string;
  text: string;
}

const Button = ({color, text}: ButtonProps) => {
  return (
    <S.Button color={color}>{text}</S.Button>
  )
}

export default Button