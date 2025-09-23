import { styled } from 'styled-components';

export const Container = styled.div<{ $width: number; $height: number }>`
  position: relative;

  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`;

export const ProgressBar = styled.div<{
  $backgroundColor: string;
  $progress: number;
}>`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
