import { useRef } from "react";
import Logo from "../Logo";
import * as S from "./styles";
import { ReactComponent as UserSvg } from "../../assets/user.svg";
import { ReactComponent as HeartSvg } from "../../assets/heart.svg";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import { ReactComponent as MenuAbrir } from "../../assets/menuMobile.svg";

const Header = () => {
  const navRef = useRef<HTMLElement>(null);

  return (
    <S.Header>
      <Logo local="header" />
      <nav className="nav" ref={navRef}>
        <S.NavUlPrincipal>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#home">Galeria</a>
          </li>
          <li>
            <a href="#home">Contato</a>
          </li>
          <S.NavUlSecundario>
            <li>
              <UserSvg />
            </li>
            <li>
              <HeartSvg />
            </li>
            <li>
              <SearchSvg />
            </li>
          </S.NavUlSecundario>
          <button className="btnHeader"></button>
        </S.NavUlPrincipal>
      </nav>
      <button className="btnHeader menuAbrir">
        <MenuAbrir />
      </button>
    </S.Header>
  );
};

export default Header;
