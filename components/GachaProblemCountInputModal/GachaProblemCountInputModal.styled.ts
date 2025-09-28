import { styled } from 'styled-components';
import { MainTheme } from '@/types/mainTheme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import { lightThemes } from './GachaProblemCountInputModal';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`;

export const Text = styled.p<{
  $totamjungTheme: MainTheme;
  $fontSize: string;
  $textAlign: 'left' | 'right';
  $isTransparent?: boolean;
}>`
  font-family: Pretendard;
  font-size: ${({ $fontSize }) => $fontSize};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $totamjungTheme, $isTransparent }) => {
    const opacity = $isTransparent ? 0.6 : 1;

    return lightThemes.includes($totamjungTheme)
      ? getTransparentHexColor(theme.color.BLACK, opacity)
      : getTransparentHexColor(theme.color.WHITE, opacity);
  }};
`;
