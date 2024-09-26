import { forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import type { CSSProperties } from 'styled-components';
import * as S from './Input.styled';

interface InputProps {
  type: 'text' | 'number';
  width: CSSProperties['width'];
  name?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  textAlign: 'left' | 'center';
  placeholder: string;
  hasError: boolean;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef((props: InputProps, ref) => {
  const { width, hasError, textAlign, ariaLabel, ...rest } = props;

  return (
    <S.Input
      $width={width}
      $hasError={hasError}
      $textAlign={textAlign}
      aria-label={ariaLabel}
      spellCheck={false}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
