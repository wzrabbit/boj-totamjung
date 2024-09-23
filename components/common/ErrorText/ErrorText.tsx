import * as S from './ErrorText.styled';
import { WarningIcon } from '@/assets/svg';
import type { CSSProperties } from 'styled-components';

interface ErrorTextProps {
  fontSize: '16px' | '14px' | '13px';
  errorMessage: string;
  height?: CSSProperties['height'];
}

const ErrorText = (props: ErrorTextProps) => {
  const { fontSize, errorMessage, height } = props;

  return (
    <S.Container $fontSize={fontSize} $height={height}>
      {errorMessage !== '' && (
        <>
          <WarningIcon />
          <S.ErrorText $fontSize={fontSize} role="alert">
            {errorMessage}
          </S.ErrorText>
        </>
      )}
    </S.Container>
  );
};

export default ErrorText;
