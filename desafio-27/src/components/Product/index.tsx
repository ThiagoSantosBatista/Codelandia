import React from 'react'
import * as S from './styles'

interface ProductProps {
    img: string;
    nome: string;
    desc: string;
    valor: string;
}

const Product = ({img, nome, desc, valor}: ProductProps) => {
  return (
    <S.Article>
        <img src={img} alt={nome} />
        <h2>{nome}</h2>
        <p>{desc}</p>
        <p>{valor}</p>
    </S.Article>
  )
}

export default Product