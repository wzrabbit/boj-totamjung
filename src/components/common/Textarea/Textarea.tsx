import * as S from './Textarea.styled';

interface TextareaProps {
  width: number;
  height: number;
  value: string;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  hasError: boolean;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: TextareaProps) => {
  const { width, height, hasError, ariaLabel, ...rest } = props;

  return (
    <S.Textarea
      $width={width}
      $height={height}
      $hasError={hasError}
      aria-label={ariaLabel}
      {...rest}
    />
  );
};

export default Textarea;
