import { styled, css } from 'styled-components';

export const FakeVisualRadio = styled.div<{ $isChecked: boolean }>`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({ theme }) => theme.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: pointer;

  ${({ theme, $isChecked }) =>
    $isChecked
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