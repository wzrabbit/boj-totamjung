import type { TotamjungTheme } from '@/types/totamjungTheme';
import { styled } from 'styled-components';

export const Container = styled.div<{ $totamjungTheme: TotamjungTheme }>`
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
    top: 50%;
    left: 100%;
    width: 0;
    height: 0;
    border: 9px solid;
    border-left-width: 9px;
    border-color: transparent transparent transparent
      ${({ theme, $totamjungTheme }) =>
        $totamjungTheme === 'totamjung'
          ? theme.color.BLACK_TRANSPARENT
          : theme.color.BOJ_BLUE};
    transform: translateY(-50%);
  }
`;
