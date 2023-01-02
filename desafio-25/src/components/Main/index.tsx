import React from "react";
import * as S from "./styles";
import HeroImg from "../../assets/heroImg.jpg";
import DesignImg from "../../assets/designImg.jpg";
import Button from "../Button";

const Main = () => {
  return (
    <main>
      <S.HeroSection>
        <S.HeroBox>
          <S.HeroContentBox>
            <h1>
              Ajudar você a encontrar o melhor conforto,
              <br /> é nossa prioridade.
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
      <S.DesignSection>
        <S.DesignImgBox>
          <img src={DesignImg} alt="" />
        </S.DesignImgBox>
        <S.DesignContentBox>
          <div>
            <h2>Design Minimalista</h2>
            <p>
              Móveis apenas essenciais e com design moderno, além de
              revestimentos bonitos e em cores neutras para manter a casa sempre
              com um estilo clean e suave.
            </p>
          </div>
          <a href="#home">Quero saber mais sobre os designs</a>
        </S.DesignContentBox>
      </S.DesignSection>
      <section></section>
      <section></section>
    </main>
  );
};

export default Main;
