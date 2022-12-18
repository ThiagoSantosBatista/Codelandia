import React from "react";
import { ButtonStyle } from "./style";

const Button = ({ type, text, href }) => {
    if (type === "a") {
        return <ButtonStyle as="a" href={href} type={type}>{text}</ButtonStyle>;
    } else {
        return <ButtonStyle>{text}</ButtonStyle>;
    }
};

export default Button;
