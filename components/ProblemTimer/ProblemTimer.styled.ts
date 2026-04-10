import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';

const timerBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.BROWN_700,
  bojExtendedDark: theme.bojExtendedColor.GRAY_900,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.solvedAcColor.OFF_WHITE,
  solvedAcDark: theme.solvedAcColor.INDIGO,
  solvedAcBlack: theme.solvedAcColor.DARK_INDIGO,
};

const timerBorderColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.BROWN_500,
  bojExtendedDark: theme.bojExtendedColor.GRAY_600,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.solvedAcColor.GRAY_200,
  solvedAcDark: theme.solvedAcColor.GRAY_400,
  solvedAcBlack: theme.solvedAcColor.GRAY_400,
};

export const timerTextColors: Record<MainTheme, string> = {
  none: theme.color.OFF_WHITE,
  totamjung: theme.color.BEIGE,
  bojExtendedDark: theme.bojExtendedColor.GRAY_300,
  bojExtendedRigel: theme.color.OFF_WHITE,
  solvedAcLight: theme.color.BLACK,
  solvedAcDark: theme.solvedAcColor.OFF_WHITE,
  solvedAcBlack: theme.solvedAcColor.OFF_WHITE,
};

export const circleProgressBarColors: Record<MainTheme, string> = {
  none: theme.color.OFF_WHITE,
  totamjung: theme.color.BROWN_300,
  bojExtendedDark: theme.bojExtendedColor.GRAY_300,
  bojExtendedRigel: theme.color.OFF_WHITE,
  solvedAcLight: theme.solvedAcColor.GRAY_400,
  solvedAcDark: theme.solvedAcColor.GRAY_200,
  solvedAcBlack: theme.solvedAcColor.GRAY_200,
};

export const circleProgressBarTrackColors: Record<MainTheme, string> = {
  none: getTransparentHexColor(theme.color.OFF_WHITE, 0.3),
  totamjung: theme.color.BROWN_900,
  bojExtendedDark: theme.color.BLACK,
  bojExtendedRigel: getTransparentHexColor(theme.color.OFF_WHITE, 0.3),
  solvedAcLight: getTransparentHexColor(theme.solvedAcColor.GRAY_400, 0.3),
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.color.BLACK,
};

export const Container = styled.div<{ $timerTheme: MainTheme }>`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  height: 40px;

  border: 2px solid ${({ $timerTheme }) => timerBorderColors[$timerTheme]};
  background-color: ${({ $timerTheme }) => timerBackgroundColors[$timerTheme]};
  border-radius: 20px;

  user-select: none;
`;
