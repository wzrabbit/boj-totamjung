import { styled, css } from 'styled-components';

export const Label = styled.label`
  width: 16px;
  height: 16px;
`;

export const FakeVisualRadio = styled.div<{
  $checked: boolean;
  $disabled: boolean;
}>`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({ theme }) => theme.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ theme, $checked }) =>
    $checked
      ? css`
          box-shadow: 0 0 8px ${theme.color.GOLD};
          background-color: ${theme.color.GOLD};
        `
      : css`
          box-shadow: 0 0 8px ${theme.color.DARK_BROWN};
          background-color: transparent;
        `}
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  display: none;
`;
