import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <Logo />
      <S.Footer__Nav>
        <S.Nav__Ul>
          <li>Contato</li>
          <li>+55 21 9999-9999</li>
          <li>email@gmail.com</li>
        </S.Nav__Ul>
        <S.Nav__Ul>
          <li>Sobre nós</li>
          <li><a href="#home">Menu</a></li>
          <li><a href="#home">Valores</a></li>
          <li><a href="#home">Pagina principal</a></li>
        </S.Nav__Ul>
        <S.Nav__Ul>
          <li>Serviços</li>
          <li><a href="#home">Entrega</a></li>
          <li><a href="#home">Retirada</a></li>
        </S.Nav__Ul>
      </S.Footer__Nav>
    </S.Footer>
  );
};

export default Footer;
