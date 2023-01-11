import React from "react";
import ComidaOrientalImg from "../../assets/ComidaOrientalImg.png";
import SegurandoPratoImg from "../../assets/SegurandoPratoImg.jpg";
import Populares1 from "../../assets/Populares1.png";
import Populares2 from "../../assets/Populares2.png";
import Populares3 from "../../assets/Populares3.png";
import Pessoa1 from "../../assets/pessoa1.png";
import Pessoa2 from "../../assets/pessoa2.png";
import Button from "../Button";
import Product from "../Product";
import Comment from "../Comment";
import * as S from "./styles";

interface Produtos {
  img: string;
  nome: string;
  desc: string;
  valor: string;
}

interface Comentarios {
  img: string;
  nome: string;
  texto: string;
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

const listaComentarios: Array<Comentarios> = [
  {
    img: `${Pessoa1}`,
    nome: "Daniele Almeida",
    texto: "Ótimo serviço! Encantada com a qualidade dos pratos.",
  },
  {
    img: `${Pessoa2}`,
    nome: "Ricardo França",
    texto:
      "Não é apenas a comida excelente, o serviço torna a experiência especial.",
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
          {listaProdutos.map((produto) => (
            <Product
              key={produto.nome}
              img={produto.img}
              nome={produto.nome}
              desc={produto.desc}
              valor={produto.valor}
            />
          ))}
        </S.PopularesContent>
      </S.PopularesSection>
      <S.ComentariosSection>
        <h1>Comentários</h1>
        <S.ComentariosContent>
          {listaComentarios.map((comentario) => (
            <Comment
              key={comentario.nome}
              img={comentario.img}
              nome={comentario.nome}
              texto={comentario.texto}
            />
          ))}
        </S.ComentariosContent>
      </S.ComentariosSection>
    </main>
  );
};

export default Main;
