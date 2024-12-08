import { styled } from 'styled-components';

export const Container = styled.div<{ $gap: number }>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ $gap }) => $gap}px;

  width: 100%;
  height: 100%;

  & > div {
    column-gap: ${({ $gap }) => $gap}px;
  }
`;

export const Row = styled.div`
  display: flex;

  width: 100%;
  height:;
`;
