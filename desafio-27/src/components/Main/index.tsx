import React from "react";
import Button from "../Button";
import ComidaOrientalImg from "../../assets/ComidaOrientalImg.png";
import SegurandoPratoImg from "../../assets/SegurandoPratoImg.jpg";
import Populares1 from "../../assets/Populares1.png";
import Populares2 from "../../assets/Populares2.png";
import Populares3 from "../../assets/Populares3.png";
import * as S from "./styles";
import Product from "../Product";

interface Produtos {
  img: string;
  nome: string;
  desc: string;
  valor: string;
}

const listaProdutos: Array<Produtos> = [
  {
    img: `${Populares1}`,
    nome: "Ramen de Frango",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    valor: "R$ 30",
  },
  {
    img: `${Populares2}`,
    nome: "Ramen Apimentado",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    valor: "R$ 30",
  },
  {
    img: `${Populares3}`,
    nome: "Ramen Tradicional",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    valor: "R$ 30",
  },
];

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
      <S.PopularesSection>
        <h1>Mais populares</h1>
        <S.PopularesContent>
          {listaProdutos.map((produto) => <Product img={produto.img} nome={produto.nome} desc={produto.desc} valor={produto.valor} />)}
        </S.PopularesContent>
      </S.PopularesSection>
    </main>
  );
};

export default Main;
