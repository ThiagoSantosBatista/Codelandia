import React from "react";
import * as S from "./styles";
import Logo from "../Logo";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterBox>
        <Logo />
        <S.FooterNav>
          <S.FooterUl>
            <li>Produtos</li>
            <li>
              <a href="#home">Mobilia</a>
            </li>
            <li>
              <a href="#home">Segurança</a>
            </li>
            <li>
              <a href="#home">Design Interior</a>
            </li>
          </S.FooterUl>
          <S.FooterUl>
            <li>Mais Informações</li>
            <li>
              <a href="#home">Contrato</a>
            </li>
            <li>
              <a href="#home">Sobre nós</a>
            </li>
            <li>
              <a href="#home">Termos e Condições</a>
            </li>
          </S.FooterUl>
          <S.FooterUl>
            <li>Redes Sociais</li>
            <li>
              <a href="#home">Pinterest</a>
            </li>
            <li>
              <a href="#home">Facebook</a>
            </li>
            <li>
              <a href="#home">Instagram</a>
            </li>
          </S.FooterUl>
        </S.FooterNav>
      </S.FooterBox>
    </S.Footer>
  );
};

export default Footer;
