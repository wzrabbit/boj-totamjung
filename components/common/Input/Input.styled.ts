import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';
import { theme } from '@/styles/theme';
import type { CSSProperties } from 'react';

const inputBorderColors: Record<MainTheme, string> = {
  none: theme.colors.GRAY_300,
  totamjung: theme.colors.BROWN_500,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.bojExtendedColors.SKY_BLUE,
  solvedAcLight: theme.colors.GRAY_300,
  solvedAcDark: theme.colors.GRAY_300,
  solvedAcBlack: theme.colors.GRAY_300,
};

const inputFocusedBorderColors: Record<MainTheme, string> = {
  ...inputBorderColors,
  totamjung: theme.colors.LEMON,
};

const inputBackgroundColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BROWN_900,
  bojExtendedDark: theme.bojExtendedColors.GRAY_900,
  bojExtendedRigel: theme.bojExtendedColors.DARK_INDIGO,
  solvedAcLight: theme.colors.OFF_WHITE,
  solvedAcDark: theme.solvedAcColors.DARK_INDIGO,
  solvedAcBlack: theme.colors.BLACK,
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
        ? theme.colors.BLACK
        : theme.colors.OFF_WHITE};

  &:focus {
    border-color: ${({ theme, $totamjungTheme, $hasError }) =>
      $hasError ? theme.colors.RED : inputFocusedBorderColors[$totamjungTheme]};
    outline: 3px solid
      ${({ theme, $totamjungTheme, $hasError }) =>
        getTransparentHexColor(
          $hasError
            ? theme.colors.RED
            : inputFocusedBorderColors[$totamjungTheme],
          0.5,
        )};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`;
