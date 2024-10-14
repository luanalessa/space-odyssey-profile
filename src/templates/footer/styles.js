import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 130vw;
  height: 170px;
  padding: 0px;
  margin-bottom: 0;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;

  display: flex;
  justify-content: space-around;


  overflow: hidden;
`;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  left: 100px;
  left: 220px;
  top: 60px;

  opacity: 0.8;
`;
export const BackToTop = styled.a`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ArrowUp = styled.div`
  font-size: 18px;
`;

export const BackText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
`;

export const Copyright = styled.div`
  width: 300px;
  height: 250px;
  font-size: 10px;
  color: white;
  display: flex;
  flex: wrap;
  justify-content: center;
  strong {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
