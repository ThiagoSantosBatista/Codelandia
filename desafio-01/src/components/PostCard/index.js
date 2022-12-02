import React from "react";
import CoracaoSvg from "../../assets/CoracaoSvg";
import { PostBox, DataBox, PostData, PostTitulo, PostConteudo } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const PostCard = (props) => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <PostBox data-aos="fade-up">
      <DataBox>
        <PostData>{props.data}</PostData>
        <CoracaoSvg defaultValue="false" />
      </DataBox>
      <PostTitulo>{props.titulo}</PostTitulo>
      <PostConteudo>{props.conteudo}</PostConteudo>
    </PostBox>
  );
};

export default PostCard;
