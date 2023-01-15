import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../Button';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <nav>
        <S.Nav__Ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#cardapio">Cardápio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </S.Nav__Ul>
      </nav>
      <Button local="header" text="Entrar" />
    </S.Header>
  );
};

export default Header;
