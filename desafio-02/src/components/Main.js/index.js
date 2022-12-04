import React from "react";
import { Container } from "../../style/globalStyle";
import CardTenis from "../CardTenis";
import {
    HeroSection,
    HeroContainer,
    HeroText,
    DestaquesSection,
} from "./style";
import Tenis1 from "../../assets/1.png";
import Tenis2 from "../../assets/2.png";
import Tenis3 from "../../assets/3.png";
import Tenis4 from "../../assets/4.png";
import Tenis5 from "../../assets/5.png";
import Tenis6 from "../../assets/6.png";
import Tenis7 from "../../assets/7.png";
import Tenis8 from "../../assets/8.png";

const tenisArray = [
    Tenis1,
    Tenis2,
    Tenis3,
    Tenis4,
    Tenis5,
    Tenis6,
    Tenis7,
    Tenis8,
];

const Main = () => {
    return (
        <main>
            <HeroSection>
                <HeroContainer>
                    <HeroText>
                        <h1>A melhor loja de Jordan</h1>
                        <p>
                            O tênis Jordan é fruto de uma velha e forte parceria
                            entre a Nike e o jogador Michael Jordan.
                        </p>
                    </HeroText>
                </HeroContainer>
            </HeroSection>
            <Container>
                <DestaquesSection>
                    <h2>Destaques</h2>
                    <p>
                        Frete grátis e chinelo de brinde é aqui, aproveite por
                        tempo limitado.{" "}
                    </p>
                    <ul>
                        {tenisArray.map((src) => (
                            <CardTenis key={src} imagem={src} />
                        ))}
                    </ul>
                </DestaquesSection>
            </Container>
        </main>
    );
};

export default Main;
