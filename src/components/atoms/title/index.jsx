import * as S from './styles';

const Title = ({ children }) => {
  return (
    <S.Head>
      <S.Title>
        <span>#</span>
        {children}
      </S.Title>
      <S.Line></S.Line>
    </S.Head>
  );
};

export default Title;
