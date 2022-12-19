import React from "react";
import {
    MainStyle,
    TituloDiv,
    ContentDiv,
    InfoDiv,
    Container,
    ButtonDiv,
    Modal,
} from "./style";
import ImgCard from "../../assets/cover.png";
import Time from "../Time";
import Stars from "../Stars";
import Button from "../Button";
import { GlobalContext } from "../GlobalContext";

const Main = () => {
    const modal = React.useContext(GlobalContext);
    function removeModal() {
        modal.setModal(false);
    }

    return (
        <>
            <MainStyle>
                <Container>
                    <TituloDiv>
                        <p>está disponível agora!</p>
                        <h1>loki</h1>
                    </TituloDiv>
                    <ContentDiv>
                        <img src={ImgCard} alt="" />
                        <p className="infoText">
                            Em “Loki” da Marvel Studios, o vilão mercurial Loki
                            (Tom Hiddleston) retoma seu papel como o Deus do Mal
                            em uma nova série que ocorre após os eventos de
                            “Vingadores: Endgame”.{" "}
                        </p>
                        <InfoDiv>
                            <Time />
                            <Stars />
                            <p>2021</p>
                        </InfoDiv>
                        <ButtonDiv>
                            <Button
                                type="a"
                                href="https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF"
                                text="assistir agora"
                            />
                            <Button text="trailer" />
                        </ButtonDiv>
                        <span className="linha"></span>
                    </ContentDiv>
                </Container>
            </MainStyle>
            {modal.modal === true && (
                <Modal>
                    <div>
                        <button onClick={removeModal}>X</button>
                        <iframe
                            width="60%"
                            height="60%"
                            src="https://www.youtube.com/embed/nW948Va-l10"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Main;
