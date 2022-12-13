import React from 'react'
import ButtonStyle from './style'
import { ReactComponent as PlaySvg} from "../../assets/play.svg"

const Button = ({bg, text}) => {
  return (
    <ButtonStyle bg={bg}>{bg && <PlaySvg />}<p>{text}</p></ButtonStyle>
  )
}

export default Button