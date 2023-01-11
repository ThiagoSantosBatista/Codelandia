import React from "react";
import Button from "../Button";
import ComidaOrientalImg from "../../assets/ComidaOrientalImg.png";
import * as S from './styles'

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
    </main>
  );
};

export default Main;
