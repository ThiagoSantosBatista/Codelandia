import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { HeaderStyle, DescontoP, DivDesconto, DivLogo } from "./style";
import { Container } from "../../style/globalStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <DivDesconto>
        <Container>
          <DescontoP>Ganhe R$ 10,00 de desconto no frete</DescontoP>
        </Container>
      </DivDesconto>
      <DivLogo>
        <Logo />
      </DivLogo>
    </HeaderStyle>
  );
};

export default Header;
