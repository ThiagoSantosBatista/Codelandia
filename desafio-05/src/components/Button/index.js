import React from "react";
import { ButtonStyle } from "./style";
import { ReactComponent as PlaySvg } from "../../assets/play.svg";
import { GlobalContext } from "../GlobalContext";

const Button = ({ type, href, bg, text, target }) => {
    const modal = React.useContext(GlobalContext);
    function handleClick() {
        modal.setModal(true);
    }

    if (type === "a") {
        return (
            <ButtonStyle as="a" href={href} target={target} bg={bg}>
                {bg && <PlaySvg />}
                <p>{text}</p>
            </ButtonStyle>
        );
    } else {
        return (
            <ButtonStyle bg={bg} onClick={handleClick}>
                {bg && <PlaySvg />}
                <p>{text}</p>
            </ButtonStyle>
        );
    }
};

export default Button;
