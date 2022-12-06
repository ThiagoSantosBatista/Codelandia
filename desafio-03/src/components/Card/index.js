import React from "react";
import { CardLi, CardColor, CardContent } from "./style";

const Card = ({ título, descricao, cor }) => {
    return (
        <CardLi>
            <CardColor cor={cor}></CardColor>
            <CardContent>
                <h2>{título}</h2>
                <p>{descricao}</p>
            </CardContent>
        </CardLi>
    );
};

export default Card;
