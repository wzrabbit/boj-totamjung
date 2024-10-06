import type { TotamjungTheme } from '@/types/totamjungTheme';
import { styled, css } from 'styled-components';

export const Container = styled.div<{
  $totamjungTheme: TotamjungTheme;
  $arrowDirection: 'up' | 'left' | 'right' | 'down';
}>`
  position: relative;

  width: 300px;
  height: auto;
  padding: 14px;

  border-radius: 8px;
  background-color: ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'totamjung'
      ? theme.color.BLACK_TRANSPARENT
      : theme.color.BOJ_BLUE};

  word-break: break-all;

  &::after {
    content: '';
    position: absolute;

    width: 0;
    height: 0;

    border: 9px solid;

    ${({ theme, $totamjungTheme, $arrowDirection }) => {
      const arrowColor =
        $totamjungTheme === 'totamjung'
          ? theme.color.BLACK_TRANSPARENT
          : theme.color.BOJ_BLUE;

      if ($arrowDirection === 'up') {
        return css`
          bottom: 100%;
          left: 50%;

          border-left-width: 9px;
          border-color: transparent transparent ${arrowColor} transparent;

          transform: translateX(-50%);
        `;
      }

      if ($arrowDirection === 'left') {
        return css`
          top: 50%;
          right: 100%;

          border-left-width: 9px;
          border-color: transparent ${arrowColor} transparent transparent;

          transform: translateY(-50%);
        `;
      }

      if ($arrowDirection === 'right') {
        return css`
          top: 50%;
          left: 100%;

          border-left-width: 9px;
          border-color: transparent transparent transparent ${arrowColor};

          transform: translateY(-50%);
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
