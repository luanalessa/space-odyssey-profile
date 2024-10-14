import React from 'react';
import * as S from './styles';
import footer from '../../assets/images/footer.png';  
import { FaAnglesUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <S.FooterWrapper img={footer}>
      <S.Box>
      <S.BackToTop href="#HeaderTag">
        <S.ArrowUp><FaAnglesUp />
        </S.ArrowUp>
        <S.BackText>BACK TO TOP</S.BackText>
      </S.BackToTop>
      <S.Copyright>
        ©2024<strong>Luana Lessa</strong> All Rights Reserved.
      </S.Copyright>
      </S.Box>
    </S.FooterWrapper>
  );
};

export default Footer;
