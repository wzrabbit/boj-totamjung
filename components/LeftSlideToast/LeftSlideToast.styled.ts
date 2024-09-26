import { styled, css } from 'styled-components';
import type { TotamjungTheme } from '@/types/totamjungTheme';

export const Container = styled.div<{
  $open: boolean;
  $totamjungTheme: TotamjungTheme;
}>`
  display: flex;
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;

  ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'totamjung'
      ? css`
          border: 2px solid ${theme.color.LIGHTER_BROWN};
          background-color: ${theme.color.DARK_BROWN};
          box-shadow: 0 0 20px ${theme.color.LIGHTER_BROWN};
        `
      : css`
          border: 2px solid ${theme.color.BOJ_BLUE};
          background-color: ${theme.color.BOJ_BLUE};
        `}

  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-450px)')};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`;

export const LeftIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`;

export const IconImage = styled.img<{ $totamjungTheme: TotamjungTheme }>`
  width: 40px;

  filter: ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'totamjung'
      ? theme.filter.LIGHTEST_BROWN_FILTER
      : theme.filter.WHITE_FILTER};
  user-select: none;
`;

export const IconWrapper = styled.div<{ $totamjungTheme: TotamjungTheme }>`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({ theme, $totamjungTheme }) =>
      $totamjungTheme === 'totamjung'
        ? theme.color.LIGHTEST_BROWN
        : theme.color.WHITE};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 264px;
`;

export const Title = styled.p<{ $totamjungTheme: TotamjungTheme }>`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({ theme, $totamjungTheme }) =>
    $totamjungTheme === 'totamjung' ? theme.color.BEIGE : theme.color.WHITE};
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const DescriptionContainer = styled.li<{
  $totamjungTheme: TotamjungTheme;
}>`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({ theme, $totamjungTheme }) =>
      $totamjungTheme === 'totamjung'
        ? theme.color.LIGHTEST_BROWN
        : theme.color.WHITE};
  }
`;

export const Description = styled.p`
  font-size: 14px;
  word-break: break-all;
  color: ${({ theme }) => theme.color.WHITE};
`;

export const RightControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 32px;
`;

export const CloseButton = styled.button<{ $totamjungTheme: TotamjungTheme }>`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, $totamjungTheme }) =>
      $totamjungTheme === 'totamjung'
        ? theme.color.LIGHTEST_BROWN
        : theme.color.WHITE};
  }
`;
