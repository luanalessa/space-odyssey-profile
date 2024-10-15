import React from 'react';
import * as S from './styles';

const Button = ({ variant = 'solid', href, children }) => {
  return (
    <S.StyledButton href={href} variant={variant}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
