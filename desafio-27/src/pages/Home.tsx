import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Main />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
