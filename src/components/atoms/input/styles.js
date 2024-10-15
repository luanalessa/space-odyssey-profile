import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: #131517;
  border: none;
  border-bottom: 2px solid #c778dd;
  color: white;
  font-size: 16px;
  border-radius: 3px;

  &::placeholder {
    color: #c778dd;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background: #131517;
  border: none;
  border-bottom: 2px solid #c778dd;
  color: white;
  font-size: 16px;
  border-radius: 3px;

  &::placeholder {
    color: #c778dd;
    font-size: 14px;
  }
`;
