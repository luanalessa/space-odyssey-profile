import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ variant = 'solid', href, children }) => {
  return (
    <S.StyledButton href={href} variant={variant}>
      {children}
    </S.StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,  
  href: PropTypes.string,     
  children: PropTypes.node   
};

Button.defaultProps = {
  variant: 'solid',  
  href: null         
};

export default Button;
