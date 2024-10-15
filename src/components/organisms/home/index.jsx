import React from 'react';
import Header from '../../../components/molecules/header';
import Button from '../../../components/atoms/button';
import Planets from '../../../assets/images/planets.png';
import * as S from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <S.Container id="HomeTag">
        <S.TitleWrapper>
          <S.MainTitle>Hi, I'm</S.MainTitle>
          <S.MainTitle>
            <span>Luana Lessa</span>
          </S.MainTitle>
          <S.RoleDescription>
            <span>&gt;</span> FullStack Developer
          </S.RoleDescription>
          <S.RoleDescription>
            Building creative things for the web.
          </S.RoleDescription>
          <S.ButtonWrapper>
            <Button href="/resume">Resume</Button>
            <Button href="https://linkedin.com" variant="outline">
              LinkedIn
            </Button>
          </S.ButtonWrapper>
        </S.TitleWrapper>
        <S.ImageWrapper>
          <S.Image src={Planets} alt="Planets" />
        </S.ImageWrapper>
      </S.Container>
    </>
  );
}
