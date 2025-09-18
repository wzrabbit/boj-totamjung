import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { MainTheme } from '@/types/mainTheme';

const timerBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.BROWN,
  bojExtendedDark: theme.bojExtendedColor.DARKEST_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.solvedAcColor.OFF_WHITE,
  solvedAcDark: theme.solvedAcColor.INDIGO,
  solvedAcBlack: theme.solvedAcColor.DARK_INDIGO,
};

const timerBorderColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.LIGHTER_BROWN,
  bojExtendedDark: theme.bojExtendedColor.DARK_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
  solvedAcLight: theme.solvedAcColor.LIGHT_GRAY,
  solvedAcDark: theme.solvedAcColor.GRAY,
  solvedAcBlack: theme.solvedAcColor.GRAY,
};

const timerTextColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.BEIGE,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.color.WHITE,
  solvedAcLight: theme.color.BLACK,
  solvedAcDark: theme.solvedAcColor.OFF_WHITE,
  solvedAcBlack: theme.solvedAcColor.OFF_WHITE,
};

const timerIconColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.LIGHTEST_BROWN,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.color.WHITE,
  solvedAcLight: theme.solvedAcColor.GRAY,
  solvedAcDark: theme.solvedAcColor.LIGHT_GRAY,
  solvedAcBlack: theme.solvedAcColor.LIGHT_GRAY,
};

export const circleProgressBarColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.LIGHTEST_BROWN,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.color.WHITE,
  solvedAcLight: theme.solvedAcColor.GRAY,
  solvedAcDark: theme.solvedAcColor.LIGHT_GRAY,
  solvedAcBlack: theme.solvedAcColor.LIGHT_GRAY,
};

export const circleProgressBarTrackColors: Record<MainTheme, string> = {
  none: getTransparentHexColor(theme.color.WHITE, 0.3),
  totamjung: theme.color.DARK_BROWN,
  bojExtendedDark: theme.color.BLACK,
  bojExtendedRigel: getTransparentHexColor(theme.color.WHITE, 0.3),
  solvedAcLight: getTransparentHexColor(theme.solvedAcColor.GRAY, 0.3),
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

export const TimeDisplay = styled.span<{ $timerTheme: MainTheme }>`
  margin: 0 2px 0 6px;

  color: ${({ $timerTheme }) => timerTextColors[$timerTheme]};
  font-size: 20px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 50px;
`;

export const ControlButton = styled.button<{ $timerTheme: MainTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;

  background: transparent;

  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ $timerTheme }) => timerIconColors[$timerTheme]};
  }
`;
