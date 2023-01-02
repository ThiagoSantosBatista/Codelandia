import React from "react";
import * as S from "./styles";
import HeroImg from "../../assets/heroImg.jpg";
import Button from "../Button";

const Main = () => {
  return (
    <main>
      <S.HeroSection>
        <S.HeroBox>
        <S.HeroContentBox>
            <h1>
              Ajudar você a encontrar o melhor conforto,<br/> é nossa prioridade.
            </h1>
            <p>
              Encontre uma variedade de propriedades que combinam com você.
              Esqueça todas as dificuldades em encontrar uma residência
            </p>
            <Button text="Entre em contato" />
            <a href="#home">Mais sobre nós</a>
          </S.HeroContentBox>
          <img src={HeroImg} alt="" />
        </S.HeroBox>
      </S.HeroSection>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Main;
