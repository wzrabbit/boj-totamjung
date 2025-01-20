import { styled, css } from 'styled-components';

export const Text = styled.p<{
  $type: 'primary' | 'semiPrimary' | 'normal' | 'gray' | 'code';
  $fontSize: '16px' | '14px' | '13px';
  $textAlign: 'left' | 'center' | 'right';
}>`
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize};
  line-height: 1.2;

  ${({ theme, $type }) => {
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

    if ($type === 'gray') {
      return css`
        font-family: Pretendard;
        color: ${theme.color.LIGHT_GRAY};
      `;
    }

    if ($type === 'code') {
      return css`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${theme.color.WHITE};
      `;
    }

    return css`
      font-family: Pretendard;
      color: ${theme.color.WHITE};
    `;
  }}
`;
