import * as S from './Test.styled';
import { totamjungStorybookLogo } from '@images';

type TestProps = {
  message: string;
};

const Test = (props: TestProps) => {
  const { message } = props;

  return (
    <S.Container>
      <img src={totamjungStorybookLogo} role="presentation" />
      <S.Title>테스트 컴포넌트입니다.</S.Title>
      <S.Content>{message}</S.Content>
    </S.Container>
  );
};

export default Test;
