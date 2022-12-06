import React from 'react'
import ButtonStyle from './style'

const Button = ({btnType, text, px, mgTop}) => {
  return (
   <ButtonStyle type={btnType || "submit"} px={px} mgTop={mgTop}>{text}</ButtonStyle>
  )
}

export default Button