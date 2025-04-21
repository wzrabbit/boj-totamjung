import type { MainTheme } from '@/types/mainTheme';
import { styled, css } from 'styled-components';
import { theme } from '@/styles/theme';

const bubbleBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.BLACK_DARKER_TRANSPARENT,
  solvedAcLight: theme.solvedAcColor.OFF_WHITE,
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.solvedAcColor.DARK_INDIGO,
  bojExtendedDark: theme.color.BLACK_DARKER_TRANSPARENT,
  bojExtendedRigel: theme.bojExtendedColor.DARK_INDIGO,
} as const;

const bubbleArrowColors: Record<MainTheme, string> = {
  ...bubbleBackgroundColors,
  solvedAcLight: theme.solvedAcColor.LIGHTER_GRAY,
} as const;

const bubbleTextColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.WHITE,
  solvedAcLight: theme.color.BLACK,
  solvedAcDark: theme.color.WHITE,
  solvedAcBlack: theme.color.WHITE,
  bojExtendedDark: theme.color.WHITE,
  bojExtendedRigel: theme.color.WHITE,
} as const;

const closeButtonColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.LIGHTEST_BROWN,
  solvedAcLight: theme.color.GRAY,
  solvedAcDark: theme.color.WHITE,
  solvedAcBlack: theme.color.WHITE,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
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
      border: 1px solid ${theme.solvedAcColor.LIGHTER_GRAY};
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
  font-family: Pretendard;
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
