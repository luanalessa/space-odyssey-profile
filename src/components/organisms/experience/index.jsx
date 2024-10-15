import React from 'react';
import Title from '../../../components/atoms/title';
import * as S from './styles';
import ExperienceBox from '../../../components/atoms/experienceBox';

const experienceDetails = [
  {
    icon: 'alpha',
    title: 'Alpha Edtech',
    subtitle: 'Aspiring Full Stack',
    date: 'Fev, 2021 - Jun, 2022',
    description: [
      'HTML, CSS, JavaScript',
      'React, Bootstrap',
      'Node.js',
      'PostgreSQL',
    ],
  },
  {
    icon: 'driven',
    title: 'Driven Education',
    subtitle: 'Web Development Tutor',
    date: '2021 - 2022',
    description: [
      'HTML, CSS, JavaScript',
      'React, Bootstrap',
      'Node.js',
      'PostgreSQL',
    ],
  },
  {
    icon: 'stone',
    title: 'Stone Payments',
    subtitle: 'Software Engineer',
    date: 'Nov, 2021 - present',
    description: ['C#, Python, JavaScript'],
  },
];

export default function Experience() {
  return (
    <S.Content id="ExperienceTag">
      <Title>Experience</Title>
      {experienceDetails.map((exp, index) => (
        <ExperienceBox
          key={index}
          icon={exp.icon}
          title={exp.title}
          subtitle={exp.subtitle}
          date={exp.date}
          description={exp.description}
        />
      ))}
    </S.Content>
  );
}
