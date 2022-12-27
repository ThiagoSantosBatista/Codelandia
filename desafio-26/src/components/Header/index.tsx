import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../Button'
import SearchBar from '../SearchBar'
import * as S from "./styles"

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <SearchBar />
      <Button local="header" text="Entrar" />
    </S.Header>
  )
}

export default Header