import React from 'react'
import { CardLi } from './style'

const CardTenis = (props) => {
  return (
    <CardLi><img src={props.imagem} alt="tenis" /></CardLi>
  )
}

export default CardTenis