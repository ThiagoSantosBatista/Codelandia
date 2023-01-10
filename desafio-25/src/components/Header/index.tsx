import { useRef } from "react";
import Logo from "../Logo";
import * as S from "./styles";
import { ReactComponent as UserSvg } from "../../assets/user.svg";
import { ReactComponent as HeartSvg } from "../../assets/heart.svg";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import { ReactComponent as MenuAbrir } from "../../assets/menuMobile.svg";
import { ReactComponent as MenuFechar } from "../../assets/menuClose.svg";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    menuRef.current?.classList.toggle("ativo");
  }

  return (
    <S.Header>
      <S.HeaderBox ref={menuRef}>
        <Logo local="header" />
        <span className="bgMobile"></span>
        <nav className="nav">
          <button
            className="btnHeader menuFechar"
            aria-label="Fechar Menu"
            aria-expanded="true"
            onClick={toggleMenu}
          >
            <MenuFechar />
          </button>
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
          </S.NavUlPrincipal>
        </nav>
        <button
          className="btnHeader menuAbrir"
          aria-label="Abrir Menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <MenuAbrir />
        </button>
      </S.HeaderBox>
    </S.Header>
  );
};

export default Header;
