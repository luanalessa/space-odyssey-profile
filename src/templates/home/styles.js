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

  margin-top: 80px;


`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  justify-content: left;
  color: white;
  margin-top: 20vh;

`;

export const MainTitle = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 10px;

  span {
    color: #C778DD;
  }
`;

export const RoleDescription = styled.span`
  font-size: 17px;
  opacity: 0.5;

  span {
    color: #C778DD;
    margin-right: 5px;
    font-size: inherit;
  }
`;

export const ImageWrapper = styled.div`
 width: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  margin-top: 30px;
  clip-path: path('M56 0 C180 65, 255 163, 54 135 S333 910, 746 0');
`;

export const Image = styled.img`
width: 150%;
  height: auto;  
  object-fit: cover; 

  /* Animação de movimento lento */
  animation: ${movePlanets} 8s ease-in-out infinite;
`;

