import styled from 'styled-components';

export const Head = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column; /* Changed to column to stack title and line */
  align-items: flex-start; /* Aligns the title and line to the left */
  text-align: left;

  margin-top: 60px;
  margin-bottom: 50px;

  span {
    color: #C778DD;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  width: auto;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  position: relative; /* Allows positioning of the line */
`;

export const Line = styled.div`
  width: calc(100% - 20px); /* Adjust width to fit within the parent */
  height: 2px;
  background: #C778DD;
  margin-top: 5px; /* Adjust spacing from title */
  position: relative;
`;
