import { useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuOpen } from '../../assets/menuOpen.svg';
import { ReactComponent as MenuClose } from '../../assets/menuClose.svg';
import Button from '../Button';
import * as S from './styles';
import { motion } from 'framer-motion';

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    menuRef.current?.classList.toggle('ativo');
  }
  function toggleMenuA() {
    if (menuRef.current?.classList.contains('ativo')) {
      menuRef.current?.classList.remove('ativo');
    }
  }

  const variants = {
    initial: {
      color: '#292929',
    },
    whileHover: {
      color: '#da2535',
    },
  };

  return (
    <S.Header>
      <S.HeaderBox ref={menuRef}>
        <Logo className="logo" />
        <span className="bgMobile"></span>
        <nav>
          <button
            className="btnHeader menuFechar"
            aria-label="Fechar Menu"
            aria-expanded="true"
            onClick={toggleMenuA}
          >
            <MenuClose />
          </button>
          <S.Nav__Ul>
            <li>
              <motion.a
                href="#home"
                variants={variants}
                initial="initial"
                whileHover="whileHover"
                transition={{ duration: 0.3 }}
                onClick={toggleMenuA}
              >
                Inicio
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#cardapio"
                variants={variants}
                initial="initial"
                whileHover="whileHover"
                transition={{ duration: 0.3 }}
                onClick={toggleMenuA}
              >
                Cardápio
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#sobre"
                variants={variants}
                initial="initial"
                whileHover="whileHover"
                transition={{ duration: 0.3 }}
                onClick={toggleMenu}
              >
                Sobre
              </motion.a>
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
      </S.HeaderBox>
    </S.Header>
  );
};

export default Header;
