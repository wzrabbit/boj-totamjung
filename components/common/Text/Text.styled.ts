import { styled, css } from 'styled-components';

export const Text = styled.p<{
  $type: 'primary' | 'semiPrimary' | 'normal' | 'code';
  $fontSize: '16px' | '14px' | '13px';
  $textAlign: 'left' | 'center' | 'right';
}>`
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize};

  ${({ theme, $type }) => {
    if ($type === 'primary') {
      return css`
        color: ${theme.color.GOLD};
        font-weight: 600;
      `;
    }

    if ($type === 'semiPrimary') {
      return css`
        color: ${theme.color.LEMON};
      `;
    }

    if ($type === 'code') {
      return css`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${theme.color.WHITE};
      `;
    }

    return css`
      color: ${theme.color.WHITE};
    `;
  }}
`;
