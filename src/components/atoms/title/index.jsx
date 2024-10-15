import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Title = ({ children }) => {
  return (
    <S.Head>
      <S.Title>
        <span>#</span>
        {children}
      </S.Title>
      <S.Line></S.Line>
    </S.Head>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Title;
