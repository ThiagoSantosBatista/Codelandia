import React from "react";
import * as S from "./styles";
import ImgTopRight from "../../assets/imagemTopRight.jpg";
import ImgTopLeft1 from "../../assets/imgTopLeft1.jpg";
import ImgTopLeft2 from "../../assets/imgTopLeft2.jpg";
import ImgTopLeft3 from "../../assets/imgTopLeft3.jpg";
import ImgBottom1 from "../../assets/imgBottom1.jpg";
import ImgBottom2 from "../../assets/imgBottom2.jpg";
import ImgBottom3 from "../../assets/imgBottom3.jpg";
import Button from "../Button";

const Main = () => {
  return (
    <S.Main id="home">
      <S.TopSection>
        <S.TPrincipalDiv>
          <header>
            <h1>Descubra novos artistas e suas obras</h1>
            <p>Uma nova geração de jovens artistas surgem</p>
          </header>
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
      </S.TopSection>
      <S.TopSection>
        <S.ImgLeftDiv>
          <img src={ImgTopLeft1} alt="Obra de arte" />
          <img src={ImgTopLeft2} alt="Obra de arte" />
          <img src={ImgTopLeft3} alt="Obra de arte" />
        </S.ImgLeftDiv>
        <S.TSecundario>
          <h2>Confira as últimas coleções</h2>
          <Button text="Ver mais" />
        </S.TSecundario>
      </S.TopSection>
      <S.ArtistasSection>
        <header>
          <h2>Artistas</h2>
          <ul>
            <li>
              <h3>Sabine Lowe</h3>
              <p>Design e Fotógrafa</p>
              <img src={ImgBottom1} alt="Artista" />
            </li>
            <li>
              <h3>Eleanor Pena</h3>
              <p>Escritora e Design</p>
              <img src={ImgBottom2} alt="Artista" />
            </li>
            <li>
              <h3>Leslie Alexander</h3>
              <p>Diretora de arte</p>
              <img src={ImgBottom3} alt="Artista" />
            </li>
          </ul>
        </header>
      </S.ArtistasSection>
    </S.Main>
  );
};

export default Main;
