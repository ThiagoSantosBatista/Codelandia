import React from "react";
import { ButtonStyle } from "./style";
import { GlobalContext } from "../GlobalContext";

const Button = ({ type, text, href }) => {
   const modal = React.useContext(GlobalContext);
   function handleClick() {
       modal.setModal(true);
   }

    if (type === "a") {
        return <ButtonStyle as="a" href={href} type={type} target="_blank">{text}</ButtonStyle>;
    } else {
        return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
    }
};

export default Button;
