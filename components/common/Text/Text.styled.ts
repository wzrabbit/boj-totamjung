import { styled, css, CSSProperties } from 'styled-components';

export const Text = styled.p<{
  $type:
    | 'primary'
    | 'semiPrimary'
    | 'normal'
    | 'gray'
    | 'black'
    | 'code'
    | 'custom';
  $fontSize: number;
  $textAlign: 'left' | 'center' | 'right';
  $width: string;
  $color: string | undefined;
  $fontFamily?: string;
  $fontWeight?: CSSProperties['fontWeight'];
  $opacity?: number;
}>`
  display: inline-block;

  width: ${({ $width }) => $width};

  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: 1.2;

  ${({ theme, $type, $color, $fontFamily, $fontWeight, $opacity }) => {
    if ($type === 'primary') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.GOLD};
        font-weight: 600;
      `;
    }

    if ($type === 'semiPrimary') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.LEMON};
      `;
    }

    if ($type === 'normal') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.WHITE};
      `;
    }

    if ($type === 'gray') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.LIGHT_GRAY};
      `;
    }

    if ($type === 'black') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.BLACK};
      `;
    }

    if ($type === 'code') {
      return css`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${theme.color.WHITE};
      `;
    }

    return css`
      color: ${$color ?? theme.color.WHITE};
      font-family: ${$fontFamily ?? 'Pretendard'};
      font-weight: ${$fontWeight ?? 400};
      opacity: ${$opacity ?? 1};
    `;
  }}
`;
