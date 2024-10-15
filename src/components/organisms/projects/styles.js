import styled from 'styled-components';

export const Content = styled.div`
  width: 1000px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  color: white;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;

  margin-top: 100px;
`;
export const Box = styled.span`
  width: 1000px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const More = styled.a`
  width: auto;
  height: 25px;

  margin-top: 30px;
  margin-bottom: 30px;

  font-size: 14px;
  text-align: center;

  cursor: pointer;
  color: #c778dd;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
