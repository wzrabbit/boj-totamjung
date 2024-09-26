import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';

const getContainerSizeByFontSize = (fontSize: '16px' | '14px' | '13px') => {
  return `${Number(fontSize.slice(0, 2)) + 3}px`;
};

export const Container = styled.div<{
  $fontSize: '16px' | '14px' | '13px';
  $height?: CSSProperties['height'];
}>`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({ $fontSize }) => getContainerSizeByFontSize($fontSize)};
  height: ${({ $height }) => ($height === undefined ? 'auto' : $height)};

  & > svg {
    flex-shrink: 0;

    width: ${({ $fontSize }) => getContainerSizeByFontSize($fontSize)};
    height: ${({ $fontSize }) => getContainerSizeByFontSize($fontSize)};

    color: ${({ theme }) => theme.color.LIGHT_RED};
  }
`;

export const ErrorText = styled.p<{
  $fontSize: '16px' | '14px' | '13px';
}>`
  font-size: ${({ $fontSize }) => $fontSize};

  color: ${({ theme }) => theme.color.LIGHT_RED};
`;
