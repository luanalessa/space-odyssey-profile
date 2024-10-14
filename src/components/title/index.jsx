import * as S from './styles'

export default function Title({children}) {

    return (
        <S.Head>
                <S.Title><span>#</span>{children}</S.Title>
                <S.Line></S.Line>
        </S.Head>
    )
}