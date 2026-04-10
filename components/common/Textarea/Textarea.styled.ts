import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

export const Textarea = styled.textarea<{
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
  $hasError: boolean;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 6px;

  border: 1.5px solid ${({ theme }) => theme.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.BROWN_900};

  color: ${({ theme }) => theme.colors.OFF_WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.RED : theme.colors.LEMON};
    outline: 3px solid
      ${({ theme, $hasError }) =>
        getTransparentHexColor(
          $hasError ? theme.colors.RED : theme.colors.LEMON,
          0.44,
        )};
  }

  transition: outline 0.05s;
`;
