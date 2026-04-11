import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';

const timerBackgroundColors: Record<MainTheme, string> = {
  none: theme.colors.BOJ_BLUE,
  totamjung: theme.colors.BROWN_700,
  bojExtendedDark: theme.bojExtendedColors.GRAY_900,
  bojExtendedRigel: theme.bojExtendedColors.SKY_BLUE,
  solvedAcLight: theme.solvedAcColors.OFF_WHITE,
  solvedAcDark: theme.solvedAcColors.INDIGO,
  solvedAcBlack: theme.solvedAcColors.DARK_INDIGO,
};

const timerBorderColors: Record<MainTheme, string> = {
  none: theme.colors.BOJ_BLUE,
  totamjung: theme.colors.BROWN_500,
  bojExtendedDark: theme.bojExtendedColors.GRAY_600,
  bojExtendedRigel: theme.bojExtendedColors.SKY_BLUE,
  solvedAcLight: theme.solvedAcColors.GRAY_200,
  solvedAcDark: theme.solvedAcColors.GRAY_400,
  solvedAcBlack: theme.solvedAcColors.GRAY_400,
};

export const timerTextColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BEIGE,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.colors.OFF_WHITE,
  solvedAcLight: theme.colors.BLACK,
  solvedAcDark: theme.solvedAcColors.OFF_WHITE,
  solvedAcBlack: theme.solvedAcColors.OFF_WHITE,
};

export const circleProgressBarColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BROWN_300,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.colors.OFF_WHITE,
  solvedAcLight: theme.solvedAcColors.GRAY_400,
  solvedAcDark: theme.solvedAcColors.GRAY_200,
  solvedAcBlack: theme.solvedAcColors.GRAY_200,
};

export const circleProgressBarTrackColors: Record<MainTheme, string> = {
  none: getTransparentHexColor(theme.colors.OFF_WHITE, 0.3),
  totamjung: theme.colors.BROWN_900,
  bojExtendedDark: theme.colors.BLACK,
  bojExtendedRigel: getTransparentHexColor(theme.colors.OFF_WHITE, 0.3),
  solvedAcLight: getTransparentHexColor(theme.solvedAcColors.GRAY_400, 0.3),
  solvedAcDark: theme.solvedAcColors.DARK_INDIGO,
  solvedAcBlack: theme.colors.BLACK,
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
