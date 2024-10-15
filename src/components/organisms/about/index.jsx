import React from 'react';
import Title from '../../../components/atoms/title';
import HolographicMachine from '../../../assets/images/holographic-machine.png';
import Hologram from '../../../assets/images/hologram.png';
import * as S from './styles';

export default function About() {
  return (
    <S.Content id="AboutTag">
      <Title>About Me</Title>
      <S.Hologram>
        <img src={Hologram} className="hologram" />
        <img src={HolographicMachine} className="holographic-machine" />
      </S.Hologram>
      <S.Description>
        <S.Legend>
          <p>
            I am an enthusiast of the{' '}
            <span className="highlight">programming</span> field and strive to{' '}
            <span className="highlight">foment female protagonists</span>,
            helping and encouraging women to gain space in{' '}
            <span className="highlight">technology</span> through study cells
            and experience sharing.
          </p>
          <p>
            I work well in <span className="highlight">groups</span>, relate
            easily to others, and possess a strong sense of{' '}
            <span className="highlight">responsibility</span> and{' '}
            <span className="highlight">leadership</span>. I am passionate about{' '}
            <span className="highlight">languages</span>,{' '}
            <span className="highlight">arts</span>, and new experiences in{' '}
            <span className="highlight">volunteerism</span>.
          </p>
          <p>
            I enjoy <span className="highlight">movement</span>, managing{' '}
            <span className="highlight">changes</span>, and inspiring{' '}
            <span className="highlight">interactions</span>.
          </p>
        </S.Legend>
      </S.Description>
    </S.Content>
  );
}
