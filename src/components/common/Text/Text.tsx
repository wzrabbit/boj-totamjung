import type { PropsWithChildren } from 'react';
import * as S from './Text.styled';

interface TextProps {
  type: 'primary' | 'semiPrimary' | 'normal' | 'code';
  fontSize: '16px' | '14px' | '13px';
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { type, fontSize, children } = props;

  return (
    <S.Text $type={type} $fontSize={fontSize}>
      {children}
    </S.Text>
  );
};

export default Text;
