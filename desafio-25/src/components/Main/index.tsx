import React from "react";
import * as S from "./styles";
import HeroImg from "../../assets/heroImg.jpg";
import DesignImg from "../../assets/designImg.jpg";
import GaleriaImg from "../../assets/galeriaImg.jpg";
import GaleriaImg2 from "../../assets/galeriaImg2.jpg";
import GaleriaImg3 from "../../assets/galeriaImg3.jpg";
import Button from "../Button";

const Main = () => {
  return (
    <main>
      <S.HeroSection>
        <S.HeroBox>
          <S.HeroContentBox>
            <header>
              <h1>
                Ajudar você a encontrar o melhor conforto,
                <br /> é nossa prioridade.
              </h1>
            </header>
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
            <header>
              <h2>Design Minimalista</h2>
            </header>
            <p>
              Móveis apenas essenciais e com design moderno, além de
              revestimentos bonitos e em cores neutras para manter a casa sempre
              com um estilo clean e suave.
            </p>
          </div>
          <a href="#home">Quero saber mais sobre os designs</a>
        </S.DesignContentBox>
      </S.DesignSection>
      <S.GaleriaSection>
        <S.GaleriaSectionBox>
          <header>
            <h2>Galeria</h2>
          </header>
          <p>
            Se você está entediado com a aparência da decoração de interiores da
            casa comuns, trabalhamos com designs diferentes e inovadores.
          </p>
          <S.GaleriaUl>
            <li>
              <img src={GaleriaImg} alt="" />
            </li>
            <li>
              <img src={GaleriaImg2} alt="" />
            </li>
            <li>
              <img src={GaleriaImg3} alt="" />
            </li>
          </S.GaleriaUl>
        </S.GaleriaSectionBox>
      </S.GaleriaSection>
      <S.OrcamentoSection>
          <h2>Orçamento</h2>
          <p>Interessado em entrar em contato com um de nossos profissionais?</p>
          <Button color="branco" text="Entre em contato" />
      </S.OrcamentoSection>
    </main>
  );
};

export default Main;
