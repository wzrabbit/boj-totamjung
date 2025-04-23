import { styled } from 'styled-components';
import { MainTheme } from '@/types/mainTheme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import { lightThemes } from './GachaProblemCountInputModal';
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`;

export const ProblemCountInput = styled.input<{
  $totamjungTheme: MainTheme;
}>`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({ $totamjungTheme }) => inputBorderColors[$totamjungTheme]};
  border-radius: 5.666px;
  background-color: ${({ $totamjungTheme }) =>
    inputBackgroundColors[$totamjungTheme]};

  color: ${({ theme, $totamjungTheme }) =>
    lightThemes.includes($totamjungTheme)
      ? theme.color.BLACK
      : theme.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({ $totamjungTheme }) =>
      inputFocusedBorderColors[$totamjungTheme]};
    outline: 3px solid
      ${({ $totamjungTheme }) =>
        getTransparentHexColor(inputFocusedBorderColors[$totamjungTheme], 0.5)};
  }

  transition: outline 0.05s;
`;

export const Text = styled.p<{
  $totamjungTheme: MainTheme;
  $fontSize: string;
  $textAlign: 'left' | 'right';
  $isTransparent?: boolean;
}>`
  font-family: Pretendard;
  font-size: ${({ $fontSize }) => $fontSize};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $totamjungTheme, $isTransparent }) => {
    const opacity = $isTransparent ? 0.6 : 1;

    return lightThemes.includes($totamjungTheme)
      ? getTransparentHexColor(theme.color.BLACK, opacity)
      : getTransparentHexColor(theme.color.WHITE, opacity);
  }};
`;
