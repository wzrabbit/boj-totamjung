import { styled, css } from 'styled-components';

export const Text = styled.p<{
  $type: 'primary' | 'normal' | 'code';
  $fontSize: '16px' | '14px' | '13px';
}>`
  font-size: ${({ $fontSize }) => $fontSize};

  ${({ theme, $type }) => {
    if ($type === 'primary') {
      return css`
        color: ${theme.color.GOLD};
        font-weight: 600;
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
