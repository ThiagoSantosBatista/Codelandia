import React from 'react';
import { ReactComponent as MapLocalSvg } from '../../assets/map-pin.svg';
import * as S from './styles';

const SearchBar = () => {
  return (
    <S.Div>
      <MapLocalSvg />
      <input type="text" placeholder="Localização para entrega" />
      <button>Buscar</button>
    </S.Div>
  );
};

export default SearchBar;
