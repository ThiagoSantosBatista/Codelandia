import React from "react";
import { Container } from "../../style/globalStyle";
import { HeroSection, HeroContainer, HeroText, Heroh1, HeroP } from "./style";

const Main = () => {
    return (
        <main>
            <HeroSection>
                <HeroContainer>
                    <HeroText>
                        <Heroh1>A melhor loja de Jordan</Heroh1>
                        <HeroP>
                            O tênis Jordan é fruto de uma velha e forte parceria
                            entre a Nike e o jogador Michael Jordan.
                        </HeroP>
                    </HeroText>
                </HeroContainer>
            </HeroSection>
            <Container>
                <section>
                    <h2>Destaques</h2>
                    <p>
                        Frete grátis e chinelo de brinde é aqui, aproveite por
                        tempo limitado.{" "}
                    </p>
                    <img src="" />
                </section>
            </Container>
        </main>
    );
};

export default Main;
