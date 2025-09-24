import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';
import type { CSSProperties } from 'styled-components';
import { theme } from '@/styles/theme';

const inputBorderColors: Record<MainTheme, string> = {
  none: theme.color.LIGHT_GRAY,
  totamjung: theme.color.LIGHTER_BROWN,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.color.LIGHT_GRAY,
  solvedAcDark: theme.color.LIGHT_GRAY,
  solvedAcBlack: theme.color.LIGHT_GRAY,
};

const inputFocusedBorderColors: Record<MainTheme, string> = {
  ...inputBorderColors,
  totamjung: theme.color.LEMON,
};

const inputBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.DARK_BROWN,
  bojExtendedDark: theme.bojExtendedColor.DARKEST_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.DARK_INDIGO,
  solvedAcLight: theme.color.WHITE,
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.color.BLACK,
};

const lightThemes: readonly MainTheme[] = ['none', 'solvedAcLight'];

export const Input = styled.input<{
  $width: CSSProperties['width'];
  $hasError: boolean;
  $totamjungTheme: MainTheme;
  $textAlign: 'left' | 'center';
}>`
  width: ${({ $width }) => $width};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid
    ${({ $totamjungTheme }) => inputBorderColors[$totamjungTheme]};
  border-radius: 4px;
  background-color: ${({ $totamjungTheme }) =>
    inputBackgroundColors[$totamjungTheme]};

  color: ${({ theme, $totamjungTheme }) =>
    lightThemes.includes($totamjungTheme)
      ? theme.color.BLACK
      : theme.color.WHITE};
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: 13px;

  &:focus,
  &:active {
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

  transition: outline 0.05s;
`;
