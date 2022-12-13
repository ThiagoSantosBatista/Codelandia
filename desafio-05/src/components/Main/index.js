import React from "react";
import Imagem from "../../assets/image.png";
import { MainContainer, ContentBox, ButtonBox, DiretorP, Modal } from "./style";
import Button from "../Button";
import {GlobalContext} from "../GlobalContext";

const Main = () => {
   const modal = React.useContext(GlobalContext);
   function removeModal() {
      modal.setModal(false);
  }
    return (
        <>
            <MainContainer>
                <ContentBox>
                    <DiretorP>HAYAO MIYAZAKI</DiretorP>
                    <h1>A VIAGEM DE CHIHIRO</h1>
                    <p>
                        Chihiro chega a um mundo mágico dominado por uma bruxa.
                        Aqueles que a desobedecem são transformados em animais.
                    </p>
                    <ButtonBox>
                        <Button
                            type="a"
                            href="https://www.netflix.com/br/title/60023642"
                            bg="#658E76"
                            text="Assistir agora"
                            target="_blank"
                        />
                        <Button text="assista o trailer" />
                    </ButtonBox>
                </ContentBox>
                <img src={Imagem} alt="" />
            </MainContainer>
            
            {modal.modal === true && <Modal>
                <div>
                    <button onClick={removeModal}>X</button>
                    <iframe
                        width="60%"
                        height="60%"
                        src="https://www.youtube.com/embed/ByXuk9QqQkk?start=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>}
        </>
    );
};

export default Main;
