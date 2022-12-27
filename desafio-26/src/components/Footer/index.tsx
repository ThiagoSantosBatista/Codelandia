import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import * as S from "./styles"

const Footer = () => {
  return (
    <S.Footer>
      <Logo />
      <S.FooterNav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#home">Buscar</a></li>
          <li><a href="#home">Explorar</a></li>
          <li><a href="#home">Sobre nós</a></li>
        </ul>
      </S.FooterNav>
    </S.Footer>
  )
}

export default Footer