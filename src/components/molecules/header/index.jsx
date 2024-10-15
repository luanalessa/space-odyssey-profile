import React from 'react';
import * as S from './styles';

export default function Header() {
  return (
    <S.Head id="HeaderTag">
      <S.Menu>
        <a href="#HomeTag">
          <S.Item>
            <p>#</p>Home
          </S.Item>
        </a>
        <a href="#AboutTag">
          <S.Item>
            <p>#</p>About
          </S.Item>
        </a>
        <a href="#ExperienceTag">
          <S.Item>
            <p>#</p>Experience
          </S.Item>
        </a>
        <a href="#ProjectsTag">
          <S.Item>
            <p>#</p>Projects
          </S.Item>
        </a>
        <a href="#ContactTag">
          <S.Item>
            <p>#</p>Contact
          </S.Item>
        </a>
      </S.Menu>
    </S.Head>
  );
}
