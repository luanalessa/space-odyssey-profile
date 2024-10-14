import React, { useState } from 'react';
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import Title from '../../components/title';
import Orbit from '../../assets/images/orbit.png';
import * as S from './styles';
import CSS from '../../assets/images/planet-css.png';
import JavaScript from '../../assets/images/planet-js.png';
import Python from '../../assets/images/planet-python.png';
import TypeScript from '../../assets/images/planet-typescript.png';
import ReactJS from '../../assets/images/planet-react.png';
import NodeJS from '../../assets/images/planet-nodejs.png';
import Sun from '../../assets/images/sun.png';
import CSharp from '../../assets/images/planet-csharp.png';

const SKILLS_DATA = [
  { name: 'ReactJs', icon: <FaReact /> , img: ReactJS, size: 80, position: { top: 90, left: 100 }, color: '#fb6161', description: 'React is a JavaScript library for building user interfaces.' },
  { name: 'JavaScript', icon: <RiJavascriptFill />, img: JavaScript, size: 100, position: { bottom: 110, right: 330 }, color: '#249fd4', description: 'JavaScript is a programming language used for web development.' },
  { name: 'TypeScript', icon: <SiTypescript />    , img: TypeScript, size: 50, position: { bottom: 250, left: 150 }, color: '#007acc', description: 'TypeScript is a strongly typed superset of JavaScript.' },
  { name: 'CSS', icon: <MdOutlineCss />, img: CSS, size: 60, position: { top: 40, left: 650 }, color: '#2965f1', description: 'CSS is used to style web pages.' },
  { name: 'NodeJS', icon: <TbBrandNodejs />, img: NodeJS, size: 70, position: { top: 130, left: 750 }, color: '#a92679', description: 'Node.js is a runtime environment for JavaScript.' },
  { name: 'Python', img: Python, size: 60, position: { bottom: 160, right: 540 }, color: '#3776ab', description: 'Python is a versatile programming language used for web development, data science, and more.' },
  { name: 'Sql', icon: <PiFileSql /> , img: CSharp, size: 40, position: { bottom: 250, right: 320 }, color: '#141f9b', description: 'C# is a programming language developed by Microsoft.' },
];

const Skills = () => {
  const [sunData, setSunData] = useState({
    name: '',
    img: Sun,
    icon: null,
  });

  const [planetData, setPlanetData] = useState({
    name: '',
    img: '',
    icon: null,
    color: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ name: '', description: '' });

  const handlePlanetClick = (planet) => {
    setPlanetData({
      name: sunData.name,
      img: sunData.img,
      icon: sunData.icon,
      color: sunData.color
    });

    setSunData({
      name: planet.name,
      img: planet.img,
      icon: planet.icon,
      color: planet.color
    });

    setModalContent({
      name: planet.name,
      description: planet.description,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(planetData);
  };

  return (
    <S.Content>
      <Title>Skills</Title>
      <S.Orbit img={Orbit}>
        <S.Sun img={sunData.img} color={sunData.color}>{sunData.icon}</S.Sun>
        {SKILLS_DATA.map((planet, index) => (
          <S.Planet
            color={planet.color} 
            key={index}
            onClick={() => handlePlanetClick(planet)}
            img={planet.img}
            size={planet.size}
            {...planet.position}
          >
          </S.Planet>
        ))}
      </S.Orbit>
      {isModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalTitle>{modalContent.name}</S.ModalTitle>
            <S.ModalDescription>{modalContent.description}</S.ModalDescription>
            <S.CloseButton onClick={closeModal}>Close</S.CloseButton>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Content>
  );
};

export default Skills;
