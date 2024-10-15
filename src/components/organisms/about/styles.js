import styled, { keyframes } from 'styled-components';

import pic from '../../../assets/images/me.png';
import hover from '../../../assets/images/me-hover.png';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const flicker = keyframes`
  0%, 20%, 100% {
    opacity: 1;
  }
  10%, 30% {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

export const Description = styled.div`
  width: 500px;
  height: 400px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 43px;

  .highlight {
    color: #c778dd;
    font-weight: bold;
  }
`;

export const Hologram = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .hologram {
    width: 215px;
    position: relative;
    right: 23%;
    bottom: 46px;
    z-index: 0;
    animation:
      ${rotate} 30s linear infinite,
      ${float} 4.5s ease-in-out infinite,
      ${flicker} 1s infinite;
    filter: blur(0.5px);
  }
  .holographic-machine {
    width: 160px;
    position: relative;
    right: 25%;
    bottom: 77px;
    z-index: 0;
  }
`;

export const Legend = styled.div`
  width: 95%;
  font-size: 16px;
  text-align: justify;
  margin-bottom: 40px;
  p {
    margin-top: 10px;
  }
`;

export const Picture = styled.img`
  width: 324px;
  height: 321px;
  background-image: url(${hover});
  background-size: cover;
  border-radius: 5px;
  margin-top: 70px;
  transition: 0.4s;

  &:hover {
    background-image: url(${pic});
  }
`;
