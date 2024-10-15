import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import IconBar from './components/molecules/iconBar';

import Home from './components/organisms/home';
import About from './components/organisms/about';
import Projects from './components/organisms/projects';
import Trail from './components/organisms/experience';
import Footer from './components/molecules/footer';
import Contact from './components/organisms/contact';

import * as S from './styles/styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <Home />
        <About />
        <Trail />
        <Projects />
        <Contact />
        <Footer />
        <IconBar />
      </S.Container>
    </>
  );
}
