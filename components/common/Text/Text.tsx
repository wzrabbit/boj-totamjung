import type { CSSProperties, PropsWithChildren } from 'react';
import * as S from './Text.styled';
import { toPx } from '@/utils/toPx';

type NormalTextProps = {
  type: 'primary' | 'semiPrimary' | 'normal' | 'gray' | 'black' | 'code';
};

type CustomTextProps = {
  type: 'custom';
  color: string;
  fontFamily?: string;
  fontWeight?: CSSProperties['fontWeight'];
  opacity?: number;
};

type TextProps = (NormalTextProps | CustomTextProps) & {
  fontSize: number;
  textAlign?: 'left' | 'center' | 'right';
  width?: number | string;
  as?: string;
};

const Text = (props: PropsWithChildren<TextProps>) => {
  const {
    type,
    fontSize,
    textAlign = 'left',
    width = '100%',
    as = 'p',
    children,
  } = props;

  return (
    <S.Text
      as={as}
      $type={type}
      $fontSize={fontSize}
      $textAlign={textAlign}
      $width={toPx(width)}
      $color={'color' in props ? props.color : undefined}
      $fontFamily={'fontFamily' in props ? props.fontFamily : undefined}
      $fontWeight={'fontWeight' in props ? props.fontWeight : undefined}
      $opacity={'opacity' in props ? props.opacity : 1}
    >
      {children}
    </S.Text>
  );
};

export default Text;
