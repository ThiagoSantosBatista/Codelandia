import React from "react";
import Imagem from "../../assets/image.png";
import { MainContainer, ContentBox, ButtonBox, DiretorP } from "./style";
import Button from "../Button";

const Main = () => {
    return (
        <MainContainer>
            <ContentBox>
                <DiretorP>HAYAO MIYAZAKI</DiretorP>
                <h1>A VIAGEM DE CHIHIRO</h1>
                <p>
                    Chihiro chega a um mundo mágico dominado por uma bruxa.
                    Aqueles que a desobedecem são transformados em animais.
                </p>
                <ButtonBox>
                    <Button bg="#658E76" text="Assistir agora" />
                    <Button text="assista o trailer" />
                </ButtonBox>
            </ContentBox>
            <img src={Imagem} alt="" />
        </MainContainer>
    );
};

export default Main;
