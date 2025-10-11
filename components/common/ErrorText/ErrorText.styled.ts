import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';

export const Container = styled.div<{
  $fontSize: number;
  $height?: CSSProperties['height'];
}>`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({ $fontSize }) => $fontSize + 3}px;
  height: ${({ $height }) => ($height === undefined ? 'auto' : $height)}px;

  & > svg {
    flex-shrink: 0;

    width: ${({ $fontSize }) => $fontSize + 3}px;
    height: ${({ $fontSize }) => $fontSize + 3}px;

    color: ${({ theme }) => theme.color.LIGHT_RED};
  }
`;

export const ErrorText = styled.p<{
  $fontSize: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;

  color: ${({ theme }) => theme.color.LIGHT_RED};
`;
