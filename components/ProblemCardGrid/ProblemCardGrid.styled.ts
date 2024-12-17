import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const StaticGrid = styled.div.attrs<{
  $gap: number;
  $width: number;
  $height: number;
}>(({ $gap, $width, $height }) => ({
  style: {
    gap: `${$gap}px`,
    padding: `${$gap}px`,
    width: `${$width}px`,
    height: `${$height}px`,
  },
}))`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const DynamicGrid = styled.div.attrs<{ $gap: number }>(({ $gap }) => ({
  style: { rowGap: `${$gap}px` },
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Row = styled.div.attrs<{ $gap: number }>(({ $gap }) => ({
  style: { columnGap: `${$gap}px` },
}))`
  display: flex;
  justify-content: center;

  width: 100%;
`;
