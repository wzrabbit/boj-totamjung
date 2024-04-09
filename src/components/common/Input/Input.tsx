import * as S from './Input.styled';

interface InputProps {
  type: 'text' | 'number';
  width: number;
  value: string;
  minLength?: number;
  maxLength?: number;
  textAlign: 'left' | 'center';
  placeholder: string;
  hasError: boolean;
  ariaLabel: string;

  onChange: () => void;
}

const Input = (props: InputProps) => {
  const { width, hasError, textAlign, ...rest } = props;

  return (
    <S.Input
      $width={width}
      $hasError={hasError}
      $textAlign={textAlign}
      {...rest}
    />
  );
};

export default Input;
