import React from "react";
import {
    MainStyle,
    TituloDiv,
    ContentDiv,
    InfoDiv,
    Container,
    ButtonDiv,
} from "./style";
import ImgCard from "../../assets/cover.png";
import Time from "../Time";
import Stars from "../Stars";
import Button from "../Button";

const Main = () => {
    return (
        <MainStyle>
            <Container>
                <TituloDiv>
                    <p>está disponível agora!</p>
                    <h1>loki</h1>
                </TituloDiv>
                <ContentDiv>
                    <img src={ImgCard} alt="" />
                    <p className="infoText">
                        Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom
                        Hiddleston) retoma seu papel como o Deus do Mal em uma
                        nova série que ocorre após os eventos de “Vingadores:
                        Endgame”.{" "}
                    </p>
                    <InfoDiv>
                        <Time />
                        <Stars />
                        <p>2021</p>
                    </InfoDiv>
                    <ButtonDiv>
                        <Button type="a" href="#" text="assistir agora" />
                        <Button text="trailer" />
                    </ButtonDiv>
                    <span className="linha"></span>
                </ContentDiv>
            </Container>
        </MainStyle>
    );
};

export default Main;
