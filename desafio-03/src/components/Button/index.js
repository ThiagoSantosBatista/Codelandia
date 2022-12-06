import React from 'react'
import ButtonStyle from './style'

const Button = ({text, px, mgTop}) => {
  return (
   <ButtonStyle px={px} mgTop={mgTop}>{text}</ButtonStyle>
  )
}

export default Button