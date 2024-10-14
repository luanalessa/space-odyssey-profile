import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  width: 1000px;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  color: white;
  margin-top: 50px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: normal;
  text-align: center;
  opacity: 0.5;
  letter-spacing: 5px;
`;

export const Orbit = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 950px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Sun = styled.div`
  background-image: url(${(props) => props.img});
  background-size: 218px;
  background-position: top;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 90px;
  left: 0px;
  cursor: pointer;
  font-size: 50px;
  text-align: center;
  animation: ${float} 4.5s ease-in-out infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 6px ${(props) => props.color};
  filter: drop-shadow(0px 0px 10px ${(props) => props.color});


  &:hover {
    animation: ${float} 1.5s ease-in-out infinite;
  }
`;

export const Planet = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  cursor: pointer;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  bottom: ${(props) => props.bottom}px;
  right: ${(props) => props.right}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 6px ${(props) => props.color};
  filter: drop-shadow(0px 0px 10px ${(props) => props.color});
  animation: ${rotate} 30s linear infinite, ${float} 4.5s ease-in-out infinite;

  &:hover {
    animation: ${rotate} 20s linear infinite, ${float} 1.5s ease-in-out infinite;
    transition: transform 0.3s ease-in-out, opacity 0.3s;
  }
`;

export const Modal = styled.div`
opacity: 0.5;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #0b0c0d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 0.8; }
  }

  @keyframes fadeOut {
    from { opacity: 0.8; }
    to { opacity: 0; }
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
  
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ModalDescription = styled.p`
  font-size: 16px;
`;

export const CloseButton = styled.button`
  background-color: #C778DD;
  border: 2px solid #C778DD;
  width: 80px;
  height:40px;
  padding: 4px;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 60px;

  &:hover {
    border: 3px solid #C778DD;
    border-radius: 6px;
    background-color: #0b0c0d;
  }
`;
