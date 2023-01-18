import React from 'react';
import { ReactComponent as MapLocalSvg } from '../../assets/map-pin.svg';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import * as S from './styles';

const SearchBar = () => {
  return (
    <S.Div>
      <MapLocalSvg className="map" />
      <input type="text" placeholder="Localização para entrega" />
      <button>
        <p>Buscar</p>
        <SearchSvg />
      </button>
    </S.Div>
  );
};

export default SearchBar;
