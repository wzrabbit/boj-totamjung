import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';

export const Container = styled.div<{
  $fontSize: number;
  $height?: CSSProperties['height'];
}>`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({ $fontSize }) => $fontSize + 3};
  height: ${({ $height }) => ($height === undefined ? 'auto' : $height)};

  & > svg {
    flex-shrink: 0;

    width: ${({ $fontSize }) => $fontSize + 3};
    height: ${({ $fontSize }) => $fontSize + 3};

    color: ${({ theme }) => theme.color.LIGHT_RED};
  }
`;

export const ErrorText = styled.p<{
  $fontSize: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize};

  color: ${({ theme }) => theme.color.LIGHT_RED};
`;
