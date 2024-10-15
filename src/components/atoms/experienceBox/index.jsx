import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function ExperienceBox({
  icon,
  title,
  subtitle,
  date,
  description,
}) {
  return (
    <S.Container>
      <S.Icon icon={icon} />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Date>{date}</S.Date>
      <S.Description>
        {description.map((experiense) => (
          <ul>{experiense}</ul>
        ))}
      </S.Description>
    </S.Container>
  );
}

ExperienceBox.propTypes = {
  icon: PropTypes.string.isRequired,      
  title: PropTypes.string.isRequired,       
  subtitle: PropTypes.string.isRequired,    
  date: PropTypes.string.isRequired,        
  description: PropTypes.arrayOf(         
    PropTypes.string
  ).isRequired,
};