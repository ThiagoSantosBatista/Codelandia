import React from "react";
import * as S from "./styles";
import ImgTopRight from "../../assets/imagemTopRight.jpg";
import ImgTopLeft1 from "../../assets/imgTopLeft1.jpg";
import ImgTopLeft2 from "../../assets/imgTopLeft2.jpg";
import ImgTopLeft3 from "../../assets/imgTopLeft3.jpg";
import Button from "../Button";

const Main = () => {
  return (
    <S.Main>
      <S.TPrincipalDiv>
        <h1>Descubra novos artistas e suas obras</h1>
        <p>Uma nova geração de jovens artistas surgem</p>
        <Button text="Explorar" />
        <div className="estatisticas">
          <p>
            +2 mil
            <br />
            <span>Artistas</span>
          </p>
          <p>
            +7 mil
            <br />
            <span>Vendas</span>
          </p>
          <p>
            +16 mil
            <br />
            <span>Avaliações</span>
          </p>
        </div>
      </S.TPrincipalDiv>
      <img className="ImgRight" src={ImgTopRight} alt="Obra de arte" />
      <S.ImgLeftDiv>
        <img src={ImgTopLeft1} alt="Obra de arte" />
        <img src={ImgTopLeft2} alt="Obra de arte" />
        <img src={ImgTopLeft3} alt="Obra de arte" />
      </S.ImgLeftDiv>
      <S.TSecundarioDiv>
        <h2>Confira as últimas coleções</h2>
        <Button text="Ver mais" />
      </S.TSecundarioDiv>
    </S.Main>
  );
};

export default Main;
