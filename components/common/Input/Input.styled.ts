import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';

export const Input = styled.input<{
  $width: CSSProperties['width'];
  $hasError: boolean;
  $textAlign: 'left' | 'center';
}>`
  width: ${({ $width }) => $width};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  color: ${({ theme }) => theme.color.WHITE};
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: 13px;

  &:focus,
  &:active {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.color.RED : theme.color.LEMON};
    outline: 3px solid
      ${({ theme, $hasError }) =>
        $hasError ? theme.color.RED : theme.color.LEMON}70;
  }

  transition: outline 0.05s;
`;
