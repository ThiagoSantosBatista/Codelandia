import React from 'react';
import * as S from './styles';
import { motion } from 'framer-motion';

interface ProductProps {
  img: string;
  nome: string;
  desc: string;
  valor: string;
}

const Product = ({ img, nome, desc, valor }: ProductProps) => {
  return (
    <S.Article>
      <motion.img
        src={img}
        alt={nome}
        whileHover={{
          rotate: 45,
        }}
        transition={{
          duration: 0.5,
        }}
      />
      <h2>{nome}</h2>
      <p>{desc}</p>
      <p>{valor}</p>
    </S.Article>
  );
};

export default Product;
