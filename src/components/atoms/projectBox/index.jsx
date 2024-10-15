import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function ProjectBox({ href, title, description, tecnologies }) {
  return (
    <S.Container href={href} rel="noreferrer" target="_blank" key={title}>
      <S.Icon />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Tecnologies>{tecnologies}</S.Tecnologies>
    </S.Container>
  );
}

ProjectBox.propTypes = {
  href: PropTypes.string.isRequired,              
  title: PropTypes.string.isRequired,            
  description: PropTypes.string.isRequired,     
  tecnologies: PropTypes.oneOfType([             
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

ProjectBox.defaultProps = {
  tecnologies: '',
};