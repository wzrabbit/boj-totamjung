import { styled } from 'styled-components';

export const Textarea = styled.textarea<{
  $width: number;
  $height: number;
  $hasError: boolean;
}>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  padding: 6px;

  border: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 13px;

  resize: none;

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
