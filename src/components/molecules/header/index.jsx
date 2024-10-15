import React from 'react';
import * as S from './styles';
import { FaHashtag } from "react-icons/fa6";

export default function Header() {
  return (
    <S.Head id="HeaderTag">
      <S.Menu>
        <a href="#HomeTag">
          <S.Item>
            <p><FaHashtag />
            </p>Home
          </S.Item>
        </a>
        <a href="#AboutTag">
          <S.Item>
            <p><FaHashtag />
            </p>About
          </S.Item>
        </a>
        <a href="#ExperienceTag">
          <S.Item>
            <p><FaHashtag />
            </p>Experience
          </S.Item>
        </a>
        <a href="#ProjectsTag">
          <S.Item>
            <p><FaHashtag />
            </p>Projects
          </S.Item>
        </a>
        <a href="#ContactTag">
          <S.Item>
            <p><FaHashtag />
            </p>Contact
          </S.Item>
        </a>
      </S.Menu>
    </S.Head>
  );
}
