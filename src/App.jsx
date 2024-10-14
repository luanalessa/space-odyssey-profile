import React from 'react';

import GlobalStyle from "./styles/GlobalStyle";

import Icons from './components/socialIcons'

import Home from './templates/home'
import Projects from './templates/projects';
import Trail from './templates/experience'
import Skills from './templates/skills';
import Footer from './templates/footer';

import * as S from './styles/styles'

import Contact from './templates/contact'
export default function App() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
            <Home />
            <Projects/>
            <Trail/>
            <Skills/>
            <Contact/>
            <Footer/>
            <Icons />
      </S.Container>
    </>
  );
}