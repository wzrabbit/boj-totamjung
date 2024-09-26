import { forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import type { CSSProperties } from 'styled-components';
import * as S from './Textarea.styled';

interface TextareaProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  name?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  hasError: boolean;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef((props: TextareaProps, ref) => {
  const { width, height, hasError, ariaLabel, ...rest } = props;

  return (
    <S.Textarea
      $width={width}
      $height={height}
      $hasError={hasError}
      spellCheck={false}
      aria-label={ariaLabel}
      ref={ref}
      {...rest}
    />
  );
});

export default Textarea;
