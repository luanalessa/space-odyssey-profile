import React from 'react';
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

export default Input;
