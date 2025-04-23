import { styled } from 'styled-components';
import { MainTheme } from '@/types/mainTheme';
import { lightThemes } from './SimpleModal';

export const ContentContainer = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  max-width: 100%;
  min-height: ${({ $height }) => $height};
`;

export const Text = styled.p<{ $totamjungTheme: MainTheme }>`
  font-size: 16px;
  color: ${({ theme, $totamjungTheme }) =>
    lightThemes.includes($totamjungTheme)
      ? theme.color.BLACK
      : theme.color.WHITE};
`;
