import { styled, css } from 'styled-components';

export const Text = styled.p<{ $type: 'primary' | 'normal' }>`
  ${({ theme, $type }) => {
    if ($type === 'primary') {
      return css`
        color: ${theme.color.GOLD};
        font-weight: 600;
      `;
    }

    return css`
      color: ${theme.color.WHITE};
    `;
  }}
`;
