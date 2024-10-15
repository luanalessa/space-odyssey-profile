import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Input = ({ type = 'input', placeholder, value, onChange }) => {
  return type === 'textarea' ? (
    <S.TextArea placeholder={placeholder} value={value} onChange={onChange} />
  ) : (
    <S.Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['input', 'textarea']), 
  placeholder: PropTypes.string,                
  value: PropTypes.oneOfType([                  
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,                                
  onChange: PropTypes.func.isRequired,       
};

Input.defaultProps = {
  type: 'input',
  placeholder: '',
};

export default Input;
