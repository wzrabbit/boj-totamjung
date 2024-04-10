import type { PropsWithChildren } from 'react';
import * as S from './Text.styled';

interface TextProps {
  type: 'primary' | 'normal';
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { type, children } = props;

  return <S.Text $type={type}>{children}</S.Text>;
};

export default Text;
