import type { MainTheme } from '@/types/mainTheme';
import { styled, css } from 'styled-components';
import { theme } from '@/styles/theme';

const bubbleBackgroundColors: Record<MainTheme, string> = {
  none: theme.colors.BOJ_BLUE,
  totamjung: theme.colors.BLACK_DARKER_TRANSPARENT,
  solvedAcLight: theme.solvedAcColors.OFF_WHITE,
  solvedAcDark: theme.solvedAcColors.DARK_INDIGO,
  solvedAcBlack: theme.solvedAcColors.DARK_INDIGO,
  bojExtendedDark: theme.colors.BLACK_DARKER_TRANSPARENT,
  bojExtendedRigel: theme.bojExtendedColors.DARK_INDIGO,
} as const;

const bubbleArrowColors: Record<MainTheme, string> = {
  ...bubbleBackgroundColors,
  solvedAcLight: theme.solvedAcColors.GRAY_100,
} as const;

const bubbleTextColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.OFF_WHITE,
  solvedAcLight: theme.colors.BLACK,
  solvedAcDark: theme.colors.OFF_WHITE,
  solvedAcBlack: theme.colors.OFF_WHITE,
  bojExtendedDark: theme.colors.OFF_WHITE,
  bojExtendedRigel: theme.colors.OFF_WHITE,
} as const;

const closeButtonColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BROWN_300,
  solvedAcLight: theme.colors.GRAY_500,
  solvedAcDark: theme.solvedAcColors.GRAY_400,
  solvedAcBlack: theme.solvedAcColors.GRAY_400,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.bojExtendedColors.SKY_BLUE,
} as const;

export const Container = styled.div<{
  $open: boolean;
  $totamjungTheme: MainTheme;
  $direction: 'up' | 'left' | 'right' | 'down';
  $maxWidth?: string;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;

  padding: 14px;

  ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'solvedAcLight' &&
    css`
      border: 1px solid ${theme.solvedAcColors.GRAY_100};
    `};

  border-radius: 8px;
  background-color: ${({ $totamjungTheme }) =>
    bubbleBackgroundColors[$totamjungTheme]};

  word-break: break-all;

  ${({ $open }) =>
    !$open &&
    css`
      display: none;
    `}

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}

  &::after {
    content: '';
    position: absolute;

    width: 0;
    height: 0;

    border: 9px solid;

    ${({ $totamjungTheme, $direction }) => {
      const arrowColor = bubbleArrowColors[$totamjungTheme];

      if ($direction === 'left') {
        return css`
          top: 50%;
          left: 100%;

          border-left-width: 9px;
          border-color: transparent transparent transparent ${arrowColor};

          transform: translateY(-50%);
        `;
      }

      if ($direction === 'right') {
        return css`
          top: 50%;
          right: 100%;

          border-left-width: 9px;
          border-color: transparent ${arrowColor} transparent transparent;

          transform: translateY(-50%);
        `;
      }

      if ($direction === 'down') {
        return css`
          bottom: 100%;
          left: 50%;

          border-left-width: 9px;
          border-color: transparent transparent ${arrowColor} transparent;

          transform: translateX(-50%);
        `;
      }

      return css`
        top: 100%;
        left: 50%;

        border-left-width: 9px;
        border-color: ${arrowColor} transparent transparent transparent;

        transform: translateX(-50%);
      `;
    }};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.span<{ $totamjungTheme: MainTheme }>`
  font-size: 14px;
  line-height: 14px;
  color: ${({ $totamjungTheme }) => bubbleTextColors[$totamjungTheme]};
`;

export const CloseButtonWrapper = styled.div`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: auto;
`;

export const CloseButton = styled.button<{ $totamjungTheme: MainTheme }>`
  width: 20px;
  height: 20px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ $totamjungTheme }) => closeButtonColors[$totamjungTheme]};
  }
`;
