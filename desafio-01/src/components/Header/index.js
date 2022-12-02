import React from "react";
import BlogSvg from "../../assets/BlogSvg.js";
import Logo from "../../assets/Logo.js";
import SearchBar from "../SearchBar/index.js";
import { HeaderStyle, Container, LogoBox } from "./style.js";

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <LogoBox>
          <Logo className="logo" />
          <BlogSvg />
        </LogoBox>
        <SearchBar placeholder='Pesquisar no blog' />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
