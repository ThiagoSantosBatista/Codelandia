import React from 'react'
import { ReactComponent as GoogleSvg} from "../../assets/iconGoogle.svg"
import {ButtonStyle} from "./style"

const ButtonForm = ({from, name}) => {
  return (
    <ButtonStyle from={from}>{from === "google" && <GoogleSvg/>}{name}</ButtonStyle>
    
  )
}

export default ButtonForm