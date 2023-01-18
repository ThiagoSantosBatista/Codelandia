import React from 'react';
import * as S from './styles';
import { motion } from 'framer-motion';
import { withTheme } from 'styled-components';

interface ButtonProps {
  local?: string;
  text: string;
}

const Button = ({ local, text }: ButtonProps) => {
  if (local === 'header') {
    return (
      <S.Header__Button
        as={motion.button}
        className="btnEntrar"
        initial={{
          color: '#292929',
          background: '#fbfbfb',
        }}
        whileHover={{
          background: '#292929',
          color: '#fbfbfb',
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {text}
      </S.Header__Button>
    );
  }
  return (
    <S.Button
      as={motion.button}
      initial={{
        color: '#fbfbfb',
        background: '#da2535',
      }}
      whileHover={{
        background: '#292929',
        color: '#fbfbfb',
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {text}
    </S.Button>
  );
};

export default Button;
