import React from "react";
import Button from "../Button";
import ComidaOrientalImg from "../../assets/ComidaOrientalImg.png";
import SegurandoPratoImg from "../../assets/SegurandoPratoImg.jpg";
import * as S from "./styles";

const Main = () => {
  return (
    <main>
      <S.CardapioSection>
        <S.CardapioContent>
          <h1>Comida Oriental</h1>
          <p>
            A culinária Japonesa é bastante equilibrada, sendo muito rica em
            peixes (ômega 3), vegetais, massas e ingredientes frescos.
          </p>
          <Button text="Cardápio" />
        </S.CardapioContent>
        <img src={ComidaOrientalImg} alt="" />
      </S.CardapioSection>
      <S.SobreSection>
        <img src={SegurandoPratoImg} alt="" />
        <S.SobreContent>
          <h1>Feita de forma Tradicional</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#home">Ler mais sobre o modo de preparo </a>
        </S.SobreContent>
      </S.SobreSection>
    </main>
  );
};

export default Main;
