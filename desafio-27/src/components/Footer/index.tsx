import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import * as S from './styles';
import { motion } from 'framer-motion';

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
          <li>
            <motion.a
              href="#home"
              whileHover={{
                textDecoration: 'underline',
              }}
            >
              Menu
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#home"
              whileHover={{
                textDecoration: 'underline',
              }}
            >
              Valores
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#home"
              whileHover={{
                textDecoration: 'underline',
              }}
            >
              Pagina principal
            </motion.a>
          </li>
        </S.Nav__Ul>
        <S.Nav__Ul>
          <li>Serviços</li>
          <li>
            <motion.a
              href="#home"
              whileHover={{
                textDecoration: 'underline',
              }}
            >
              Entrega
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#home"
              whileHover={{
                textDecoration: 'underline',
              }}
            >
              Retirada
            </motion.a>
          </li>
        </S.Nav__Ul>
      </S.Footer__Nav>
    </S.Footer>
  );
};

export default Footer;
