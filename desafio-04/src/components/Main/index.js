import React from 'react'
import { MainStyle } from './style'
import { ReactComponent as IllustrationSvg } from "../../assets/illustration.svg"
import Form from '../Form'

const Main = () => {
  return (
    <MainStyle>
      <IllustrationSvg />
      <Form />
    </MainStyle>
  )
}

export default Main