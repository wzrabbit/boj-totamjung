import { styled } from 'styled-components';

export const Container = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const CircleProgressBar = styled.svg`
  transform: rotate(-90deg);
`;
