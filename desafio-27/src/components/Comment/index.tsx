import React from 'react'
import Stars from './stars';
import * as S from './styles'

interface CommentProps {
    img: string;
    nome: string;
    texto: string;
  }

const Comment = ({img, nome, texto}: CommentProps) => {
  return (
    <S.Article>
        <img src={img} alt="" />
        <h2>{nome}</h2>
        <p>{texto}</p>
        <Stars />
    </S.Article>
  )
}

export default Comment