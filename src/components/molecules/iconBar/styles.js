import styled from 'styled-components';

import linkedin from '../../../assets/icons/linkedin.svg';
import instagram from '../../../assets/icons/instagram.svg';
import github from '../../../assets/icons/github.svg';

export const Container = styled.div`
  width: 40px;
  position: fixed;
  left: 10px;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`;

export const Social = styled.div`
  width: 20px;
  height: 20px;
  background-size: cover;

  margin-bottom: 20px;
  opacity: 0.5;
  cursor: pointer;

  &.linkedin {
    background-image: url(${linkedin});
  }

  &.instagram {
    background-image: url(${instagram});
  }

  &.github {
    background-image: url(${github});
  }

  &:hover {
    opacity: 1;
  }
`;
export const LineRight = styled.div`
  width: 1px;
  height: 60px;

  display: inline;

  background: white;
  margin: 0 auto;
  margin-bottom: 20px;
`;
