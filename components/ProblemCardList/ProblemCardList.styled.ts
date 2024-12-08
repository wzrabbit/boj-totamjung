import { styled, css } from 'styled-components';

export const Container = styled.div.attrs<{ $gap: number }>(({ $gap }) => ({
  style: { rowGap: `${$gap}px` },
}))<{ $isOverflow: boolean }>`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 100%;

  ${({ $isOverflow }) =>
    $isOverflow
      ? css`
          overflow-y: scroll;
        `
      : css`
          justify-content: center;
        `}
`;

export const Row = styled.div.attrs<{ $gap: number }>(({ $gap }) => ({
  style: { columnGap: `${$gap}px` },
}))`
  display: flex;
`;
