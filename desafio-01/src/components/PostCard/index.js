import React from "react";
import CoracaoSvg from "../../assets/CoracaoSvg";
import { PostBox, DataBox, PostData, PostTitulo, PostConteudo } from "./style";

const PostCard = (props) => {
  return (
    <PostBox>
      <DataBox>
        <PostData>{props.data}</PostData>
        <CoracaoSvg />
      </DataBox>
      <PostTitulo>{props.titulo}</PostTitulo>
      <PostConteudo>{props.conteudo}</PostConteudo>
    </PostBox>
  );
};

export default PostCard;
