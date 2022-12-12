import React from "react";
import { MainStyle, ImgDiv } from "./style";
import IllustrationSvg from "../../assets/illustration.svg";
import Form from "../Form";

const Main = () => {
    return (
        <MainStyle>
            <ImgDiv>
                <img src={IllustrationSvg} alt="ilustração" />
            </ImgDiv>
            <Form />
        </MainStyle>
    );
};

export default Main;
