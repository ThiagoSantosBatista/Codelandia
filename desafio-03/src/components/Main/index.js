import React from "react";
import Card from "../Card";
import { MainStyle, CardUl } from "./style";

const cardArray = [
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#FF6363",
    },
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#63ECFF",
    },
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#F363FF",
    },
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#63FF73",
    },
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#FFDD63",
    },
    {
        título: "Título do card",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
        cor: "#6663FF",
    },
];

const Main = () => {
    return (
        <MainStyle>
            <CardUl>
                {cardArray.map(({ título, descricao, cor }) => (
                    <Card título={título} descricao={descricao} cor={cor} />
                ))}
            </CardUl>
        </MainStyle>
    );
};

export default Main;
