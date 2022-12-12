import React from 'react'
import { LabelStyle, InputStyle } from './style'

const InputForm = ({label, type, placeholder, id}) => {
  return (
   <>
    <LabelStyle htmlFor={id}>{label}</LabelStyle>
    <InputStyle type={type} placeholder={placeholder} name={id} id={id} />
   </>
  )
}

export default InputForm