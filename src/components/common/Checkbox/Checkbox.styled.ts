import { styled, css } from 'styled-components';

export const Container = styled.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`;

export const FakeVisualCheckbox = styled.div<{ $isChecked: boolean }>`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({ theme }) => theme.color.GOLD};

  border-radius: 3px;
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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`;
