import type { PropsWithChildren } from 'react';
import * as S from './Text.styled';

interface TextProps {
  type: 'primary' | 'semiPrimary' | 'normal' | 'code';
  fontSize: '16px' | '14px' | '13px';
  textAlign?: 'left' | 'center' | 'right';
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { type, fontSize, textAlign = 'left', children } = props;

  return (
    <S.Text $type={type} $fontSize={fontSize} $textAlign={textAlign}>
      {children}
    </S.Text>
  );
};

export default Text;
