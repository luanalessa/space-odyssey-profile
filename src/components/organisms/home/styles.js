import styled, { keyframes } from 'styled-components';

const movePlanets = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(10px) translateY(5px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

export const Container = styled.div`
  width: 1000px;
  height: 85vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
`;

export const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  margin-top: 120px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  justify-content: left;
  color: white;
  margin-top: 22vh;
`;

export const MainTitle = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 10px;

  span {
    color: #c778dd;
  }
`;

export const RoleDescription = styled.span`
  font-size: 17px;
  opacity: 0.5;

  span {
    color: #c778dd;
    margin-right: 5px;
    font-size: inherit;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 30px;
  clip-path: path('M56 -216 C180 84, 220 124, 58 180 S331 910, 1000 150');
`;

export const Image = styled.img`
  width: 150%;
  height: auto;
  object-fit: cover;

  animation: ${movePlanets} 8s ease-in-out infinite;
`;
