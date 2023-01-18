import { useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuOpen } from '../../assets/menuOpen.svg';
import { ReactComponent as MenuClose } from '../../assets/menuClose.svg';
import Button from '../Button';
import * as S from './styles';

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    menuRef.current?.classList.toggle('ativo');
  }

  return (
    <S.Header ref={menuRef}>
      <Logo className="logo" />
      <span className="bgMobile"></span>
      <nav>
        <button
          className="btnHeader menuFechar"
          aria-label="Fechar Menu"
          aria-expanded="true"
          onClick={toggleMenu}
        >
          <MenuClose />
        </button>
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
      <button
        className="btnHeader menuAbrir"
        aria-label="Abrir Menu"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <MenuOpen />
      </button>
      <Button local="header" text="Entrar" />
    </S.Header>
  );
};

export default Header;
