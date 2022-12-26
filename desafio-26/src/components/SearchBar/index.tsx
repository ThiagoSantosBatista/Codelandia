import React from "react";
import * as S from "./styles";
import { ReactComponent as Search } from "../../assets/search.svg";

const SearchBar = () => {
  return (
    <S.SearchBar>
      <input type="text" name="buscar" placeholder="Buscar" />
      <Search />
    </S.SearchBar>
  );
};

export default SearchBar;
