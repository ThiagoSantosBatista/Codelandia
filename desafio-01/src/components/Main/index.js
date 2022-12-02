import React from "react";
import { Container } from "./style";
import PostCard from "../PostCard";

const postCards = [
  {
    data: "02 de jul, 2021",
    titulo: "Agora é oficial: o Windows 11 está vindo",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
  },
  {
    data: "02 de jul, 2021",
    titulo: "Tim Berners-Lee vai leiloar código-fonte da web",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
  {
    data: "02 de jul, 2021",
    titulo: "Tem Firefox novo no pedaço e você vai querer migrar",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
  },
  {
    data: "02 de jul, 2021",
    titulo: "John McAfee, criador do antivírus McAfee, morre",
    conteudo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
];

const Main = () => {
  return (
    <Container>
      <ul>
        {postCards.map(({ data, titulo, conteudo }) => (
          <PostCard key={titulo} data={data} titulo={titulo} conteudo={conteudo} />
        ))}
      </ul>
    </Container>
  );
};

export default Main;
