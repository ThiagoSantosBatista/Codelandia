import React from 'react'
import * as S from "./styles"

interface Props {
  text: string;
  local?: string;
}

const Button = ({text, local}: Props) => {
  return (
    <S.Button local={local}>{text}</S.Button>
  )
}

export default Button