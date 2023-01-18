import React from 'react';
import { ReactComponent as MapLocalSvg } from '../../assets/map-pin.svg';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import * as S from './styles';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <S.Div>
      <MapLocalSvg className="map" />
      <input type="text" placeholder="Localização para entrega" />
      <motion.button
        initial={{
          background: '#da2535',
        }}
        whileHover={{
          background: '#292929',
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <p>Buscar</p>
        <SearchSvg />
      </motion.button>
    </S.Div>
  );
};

export default SearchBar;
