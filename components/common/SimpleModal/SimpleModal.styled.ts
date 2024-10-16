import { styled } from 'styled-components';

export const ContentContainer = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  max-width: 100%;
  min-height: ${({ $height }) => $height};
`;
