import styled from 'styled-components';
import folder from '../../../assets/icons/folder.svg';

export const Container = styled.a`
  margin: 10px;
  width: 180px;
  height: 180px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: #301b37;
  border-radius: 10px;
  color: white;
  padding: 10px;

  position: relative;

  cursor: pointer;

  &:hover {
    background: none;
    transition: 0.2s;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${folder});
  background-size: cover;
  position: relative;
  top: 50px;
  right: 65px;
`;

export const Title = styled.div`
  font-weight: bold;
  width: 170px;
  height: 50px;
  margin-top: 60px;
  text-align: left;
`;

export const Description = styled.div`
  width: 160px;
  height: 30px;
  text-align: justify;
  font-size: 10px;
  opacity: 0.5;

  margin-bottom: 10px;
`;

export const Tecnologies = styled.div`
  width: 160px;
  height: 30px;

  display: flex;
  align-items: flex-end;
  font-size: 12px;
  opacity: 0.2;
  position: relative;
  margin-bottom: 50px;
`;
