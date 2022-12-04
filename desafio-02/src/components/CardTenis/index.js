import React from 'react'
import { CardLi, CardImg } from './style'

const CardTenis = (props) => {
  return (
    <CardLi><CardImg src={props.imagem}/></CardLi>
  )
}

export default CardTenis