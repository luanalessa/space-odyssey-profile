import styled from 'styled-components';

export const Head = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 60px;

  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: flex-end;
`;

export const Menu = styled.ul`
  list-style: none;
  width: 500px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
`;

export const Item = styled.ul`
  cursor: pointer;
  color: white;
  display: flex;
  p {
    color: #c778dd;
    margin-right: 5px;
  }

  &.button {
    padding: 5px 20px;
    color: #f3367e;
    border: 2px solid #f3367e;
    border-radius: 5px;
    font-weight: bold;
  }

  &:hover {
    color: #f3367e;
    transition: 0.2s;
  }
`;
