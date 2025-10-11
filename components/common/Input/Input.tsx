import { forwardRef } from 'react';
import type { ComponentProps, CSSProperties } from 'react';
import { toPx } from '@/utils/toPx';
import * as S from './Input.styled';
import type { MainTheme } from '@/types/mainTheme';

interface InputProps
  extends Omit<ComponentProps<'input'>, 'type' | 'color' | 'width' | 'height'> {
  type: 'text' | 'number';
  width: string | number;
  height: string | number;
  borderWidth?: number;
  borderRadius?: string | number;
  horizontalPadding?: number;
  fontSize?: string | number;
  fontWeight?: CSSProperties['fontWeight'];
  value: string | number;
  theme?: MainTheme;
  color?: string;
  textAlign?: 'left' | 'center';
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    width,
    height,
    borderWidth = 1.5,
    borderRadius = '4px',
    horizontalPadding = '6px',
    fontSize = '13px',
    fontWeight = 400,
    hasError = false,
    theme = 'totamjung',
    color,
    textAlign = 'left',
    ...rest
  } = props;

  return (
    <S.Input
      $width={toPx(width)}
      $height={toPx(height)}
      $borderWidth={borderWidth}
      $borderRadius={toPx(borderRadius)}
      $horizontalPadding={toPx(horizontalPadding)}
      $fontSize={toPx(fontSize)}
      $fontWeight={fontWeight}
      $hasError={hasError}
      $color={color}
      $totamjungTheme={theme}
      $textAlign={textAlign}
      spellCheck={false}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
