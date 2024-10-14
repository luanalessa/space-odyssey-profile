import styled from 'styled-components'

export const Content = styled.div`
  width: 1000px;
  height: 520px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  color: white;
  
  background-position:bottom;
  .ovni{
    width: 400px;
    height: 500px;
    position: relative;

    z-index:1;
    bottom: 0px;
    left: 30px;
    /* transform: rotate(5deg); */
  }

  .person{
    width: 40px;
    height: 80px;
    position: relative;
    cursor: pointer;

    z-index:2;
    /* transform: rotate(20deg); */

    top: 250px;
    right: 185px;
  
    animation: float 6s ease-in-out infinite;

  }

  .up{
    &:hover .person{
      animation: abduction 3s ;
    }
  }

    @keyframes float {
    0% {
      transform: translatey(0px);
      
    }
    50% {
      transform: translatey(-40px);
    }
    100% {
      transform: translatey(0px);
    }
  }

    @keyframes abduction {
      from{
        transform: translateY(0) rotate(0);
        opacity: 1;
      }
      to{
        transform: translateY(-200px) rotate(0);
        opacity: 0;
      }
   

}
`

export const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index:3;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #8a2be2; 
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: #131517;
  border: none;
  border-bottom: 2px solid #C778DD; /* Purple color from image */
  color: white;
  font-size: 16px;
  border-radius: 3px;
  
  &::placeholder {
    color: #C778DD;  /* Adjusted to purple */
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background: #131517;
  border: none;
  border-bottom: 2px solid #C778DD; /* Purple color from image */
  color: white;
  font-size: 16px;
  border-radius: 3px;
  
  &::placeholder {
    color: #C778DD; 
    font-size: 14px;
  }
`;