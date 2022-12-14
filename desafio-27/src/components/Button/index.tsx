import React from 'react'
import * as S from './styles'

interface ButtonProps {
  local?: string;
  text: string;
} 

const Button = ({local, text}: ButtonProps) => {
  if(local === 'header') {
    return <S.HeaderButton>{text}</S.HeaderButton>
  }
  return <S.Button>{text}</S.Button>
}

export default Button