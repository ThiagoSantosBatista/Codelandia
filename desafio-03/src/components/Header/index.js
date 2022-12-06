import React from "react";
import { HeaderStyle, HeaderBox, HeaderContent } from "./style";
import ImagemSvg from "../../assets/ImagemSvg";
import Button from "../Button";

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderBox>
                <HeaderContent>
                    <h1>
                        Lorem ipsum dolor
                        <br /> sit amet
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas eu massa sit amet augue consectetur ullamcorper
                        non ac massa.
                    </p>
                    <Button text="Botão" />
                </HeaderContent>
                <ImagemSvg />
            </HeaderBox>
        </HeaderStyle>
    );
};

export default Header;
