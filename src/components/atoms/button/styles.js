import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  background: ${({ variant }) => (variant === 'solid' ? '#C778DD' : 'none')};
  border: 2px solid #c778dd;
  border-radius: 6px;
  color: ${({ variant }) => (variant === 'solid' ? 'white' : '#C778DD')};
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  width: 100px;
  margin: 10px;

  &:hover {
    background: ${({ variant }) =>
      variant === 'outline' ? '#C778DD' : 'none'};
    color: ${({ variant }) => (variant === 'outline' ? 'white' : '#C778DD')};
  }
`;
