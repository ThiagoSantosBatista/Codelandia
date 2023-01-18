import React from 'react';
import ComidaOrientalImg from '../../assets/ComidaOrientalImg.png';
import SegurandoPratoImg from '../../assets/SegurandoPratoImg.jpg';
import Populares1 from '../../assets/Populares1.png';
import Populares2 from '../../assets/Populares2.png';
import Populares3 from '../../assets/Populares3.png';
import Pessoa1 from '../../assets/pessoa1.png';
import Pessoa2 from '../../assets/pessoa2.png';
import Mapa from '../../assets/mapa.jpg';
import MapaMobile from '../../assets/mapaMobile.jpg';
import Button from '../Button';
import Product from '../Product';
import Comment from '../Comment';
import SearchBar from '../SearchBar';
import * as S from './styles';
import { motion } from 'framer-motion';

interface Produtos {
  id: number;
  img: string;
  nome: string;
  desc: string;
  valor: string;
}

interface Comentarios {
  id: number;
  img: string;
  nome: string;
  texto: string;
}

const listaProdutos: Array<Produtos> = [
  {
    id: 1,
    img: `${Populares1}`,
    nome: 'Ramen de Frango',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    valor: 'R$ 30',
  },
  {
    id: 2,
    img: `${Populares2}`,
    nome: 'Ramen Apimentado',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    valor: 'R$ 30',
  },
  {
    id: 3,
    img: `${Populares3}`,
    nome: 'Ramen Tradicional',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    valor: 'R$ 30',
  },
];

const listaComentarios: Array<Comentarios> = [
  {
    id: 1,
    img: `${Pessoa1}`,
    nome: 'Daniele Almeida',
    texto: 'Ótimo serviço! Encantada com a qualidade dos pratos.',
  },
  {
    id: 2,
    img: `${Pessoa2}`,
    nome: 'Ricardo França',
    texto:
      'Não é apenas a comida excelente, o serviço torna a experiência especial.',
  },
];

const Main = () => {
  return (
    <S.Main id="home">
      <S.Cardapio id="cardapio">
        <S.Cardapio__Content>
          <h1>Comida Oriental</h1>
          <p>
            A culinária Japonesa é bastante equilibrada, sendo muito rica em
            peixes (ômega 3), vegetais, massas e ingredientes frescos.
          </p>
          <Button text="Cardápio" />
        </S.Cardapio__Content>
        <img src={ComidaOrientalImg} alt="Comida oriental" />
      </S.Cardapio>
      <S.Sobre id="sobre">
        <img src={SegurandoPratoImg} alt="Prato de comida" />
        <S.Sobre__Content>
          <h1>Feita de forma Tradicional</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.a
            href="#home"
            initial={{
              color: '#da2535',
              borderColor: '#da2535',
            }}
            whileHover={{
              color: '#292929',
              borderColor: '#292929',
            }}
            transition={{
              duration: 0.3,
            }}
          >
            Ler mais sobre o modo de preparo{' '}
          </motion.a>
        </S.Sobre__Content>
      </S.Sobre>
      <S.Populares>
        <h1>Mais populares</h1>
        <S.Populares__Content>
          {listaProdutos.map(produto => (
            <Product
              key={produto.id}
              img={produto.img}
              nome={produto.nome}
              desc={produto.desc}
              valor={produto.valor}
            />
          ))}
        </S.Populares__Content>
      </S.Populares>
      <S.Comentarios>
        <h1>Comentários</h1>
        <S.Comentarios__Content>
          {listaComentarios.map(comentario => (
            <Comment
              key={comentario.id}
              img={comentario.img}
              nome={comentario.nome}
              texto={comentario.texto}
            />
          ))}
        </S.Comentarios__Content>
      </S.Comentarios>
      <S.Localizacao>
        <h1>Localização</h1>
        <picture>
          <source media="(max-width: 500px)" srcSet={MapaMobile} />
          <img src={Mapa} alt="Mapa" />
        </picture>
        <SearchBar />
      </S.Localizacao>
    </S.Main>
  );
};

export default Main;
