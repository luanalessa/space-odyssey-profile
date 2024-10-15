import styled from 'styled-components';

export const Head = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  margin-top: 60px;
  margin-bottom: 50px;

  span {
    color: #c778dd;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  width: auto;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  position: relative;
`;

export const Line = styled.div`
  width: calc(100% - 20px);
  height: 3px;
  background: #c778dd;
  margin-top: 5px;
  position: relative;
`;
