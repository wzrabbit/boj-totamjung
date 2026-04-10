import { styled, css } from 'styled-components';

export const Label = styled.label`
  position: relative;

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

  border: 3px solid ${({ theme }) => theme.colors.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ theme, $checked }) =>
    $checked
      ? css`
          box-shadow: 0 0 8px ${theme.colors.GOLD};
          background-color: ${theme.colors.GOLD};
        `
      : css`
          box-shadow: 0 0 8px ${theme.colors.BROWN_900};
          background-color: transparent;
        `}
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border: none;
  margin: 0;

  appearance: none;
  -webkit-appearance: none;
`;
