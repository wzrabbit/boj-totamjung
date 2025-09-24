import { forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import type { CSSProperties } from 'styled-components';
import * as S from './Input.styled';
import type { MainTheme } from '@/types/mainTheme';

interface InputProps {
  type: 'text' | 'number';
  width: CSSProperties['width'];
  name?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  theme?: MainTheme;
  textAlign: 'left' | 'center';
  placeholder: string;
  hasError: boolean;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    width,
    hasError,
    theme = 'totamjung',
    textAlign,
    ariaLabel,
    ...rest
  } = props;

  return (
    <S.Input
      $width={width}
      $hasError={hasError}
      $totamjungTheme={theme}
      $textAlign={textAlign}
      aria-label={ariaLabel}
      spellCheck={false}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
