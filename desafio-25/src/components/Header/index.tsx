import React from "react";
import Logo from "../Logo";
import * as S from "./styles";
import { ReactComponent as UserSvg } from '../../assets/user.svg'
import { ReactComponent as HeartSvg } from '../../assets/heart.svg'
import { ReactComponent as SearchSvg } from '../../assets/search.svg'

const Header = () => {
  return (
    <S.Header>
      <Logo local="header" />
      <nav>
        <S.NavUlPrincipal>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#home">Galeria</a></li>
          <li><a href="#home">Contato</a></li>
          <S.NavUlSecundario>
            <li><UserSvg /></li>
            <li><HeartSvg /></li>
            <li><SearchSvg /></li>
          </S.NavUlSecundario>
        </S.NavUlPrincipal>
      </nav>
    </S.Header>
  );
};

export default Header;
