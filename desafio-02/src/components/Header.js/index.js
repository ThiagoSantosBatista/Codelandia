import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { HeaderStyle, DescontoP, DivDesconto, DivLogo } from "./style";

const Header = () => {
    return (
        <HeaderStyle>
            <DivDesconto>
                <DescontoP>Ganhe R$ 10,00 de desconto no frete</DescontoP>
            </DivDesconto>
            <DivLogo>
                <Logo />
            </DivLogo>
        </HeaderStyle>
    );
};

export default Header;
