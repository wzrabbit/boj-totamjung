import type { TotamjungTheme } from '@/types/totamjungTheme';
import { styled, css } from 'styled-components';

export const Container = styled.div<{
  $open: boolean;
  $totamjungTheme: TotamjungTheme;
  $direction: 'up' | 'left' | 'right' | 'down';
  $maxWidth?: string;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;

  padding: 14px;

  border-radius: 8px;
  background-color: ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'totamjung'
      ? theme.color.BLACK_DARKER_TRANSPARENT
      : theme.color.BOJ_BLUE};

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

    ${({ theme, $totamjungTheme, $direction }) => {
      const arrowColor =
        $totamjungTheme === 'totamjung'
          ? theme.color.BLACK_DARKER_TRANSPARENT
          : theme.color.BOJ_BLUE;

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

export const CloseButtonWrapper = styled.div`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: auto;
`;

export const CloseButton = styled.button<{ $totamjungTheme: TotamjungTheme }>`
  width: 20px;
  height: 20px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme, $totamjungTheme }) =>
      $totamjungTheme === 'totamjung'
        ? theme.color.LIGHTER_BROWN
        : theme.color.WHITE};
  }
`;
