import React from "react";
import { ReactComponent as BlogSvg } from "../../assets/blog.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SearchBar from "../SearchBar/index.js";
import { HeaderStyle, Container, LogoBox } from "./style.js";

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <LogoBox>
          <Logo />
          <BlogSvg />
        </LogoBox>
        <SearchBar placeholder='Pesquisar no blog' />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
