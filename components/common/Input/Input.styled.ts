import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';
import { theme } from '@/styles/theme';
import type { CSSProperties } from 'react';

const inputBorderColors: Record<MainTheme, string> = {
  none: theme.color.GRAY_300,
  totamjung: theme.color.BROWN_500,
  bojExtendedDark: theme.bojExtendedColor.GRAY_300,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.color.GRAY_300,
  solvedAcDark: theme.color.GRAY_300,
  solvedAcBlack: theme.color.GRAY_300,
};

const inputFocusedBorderColors: Record<MainTheme, string> = {
  ...inputBorderColors,
  totamjung: theme.color.LEMON,
};

const inputBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.OFF_WHITE,
  totamjung: theme.color.BROWN_900,
  bojExtendedDark: theme.bojExtendedColor.GRAY_900,
  bojExtendedRigel: theme.bojExtendedColor.DARK_INDIGO,
  solvedAcLight: theme.color.OFF_WHITE,
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.color.BLACK,
};

const lightThemes: readonly MainTheme[] = ['none', 'solvedAcLight'];

export const Input = styled.input<{
  $width: string;
  $height: string;
  $borderWidth: number;
  $borderRadius: string;
  $horizontalPadding: string;
  $fontSize: string;
  $fontWeight: CSSProperties['fontWeight'];
  $hasError: boolean;
  $color: string | undefined;
  $totamjungTheme: MainTheme;
  $textAlign: 'left' | 'center';
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 0 ${({ $horizontalPadding }) => $horizontalPadding};

  border: ${({ $borderWidth }) => `${$borderWidth}px`} solid
    ${({ $totamjungTheme }) => inputBorderColors[$totamjungTheme]};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $totamjungTheme }) =>
    inputBackgroundColors[$totamjungTheme]};

  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};

  color: ${({ theme, $color, $totamjungTheme }) =>
    $color
      ? $color
      : lightThemes.includes($totamjungTheme)
        ? theme.color.BLACK
        : theme.color.OFF_WHITE};

  &:focus {
    border-color: ${({ theme, $totamjungTheme, $hasError }) =>
      $hasError ? theme.color.RED : inputFocusedBorderColors[$totamjungTheme]};
    outline: 3px solid
      ${({ theme, $totamjungTheme, $hasError }) =>
        getTransparentHexColor(
          $hasError
            ? theme.color.RED
            : inputFocusedBorderColors[$totamjungTheme],
          0.5,
        )};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`;
