import { styled, css } from 'styled-components';

export const Container = styled.label<{ $size: 'large' | 'medium' }>`
  display: inline-block;
  position: relative;

  width: ${({ $size }) => ($size === 'large' ? '50px' : '40px')};
  height: ${({ $size }) => ($size === 'large' ? '30px' : '24px')};

  & * {
    border-radius: ${({ $size }) => ($size === 'large' ? '15px' : '12px')};
  }
`;

export const Switch = styled.input.attrs({
  type: 'checkbox',
  role: 'switch',
})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`;

export const FakeVisualSwitch = styled.div<{ $isChecked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.GOLD : theme.colors.BROWN_500};

  box-shadow: ${({ theme, $isChecked }) =>
    $isChecked ? `0 0 12px ${theme.colors.GOLD}` : `0 0 12px transparent`};
  cursor: pointer;
  transition: 0.4s;
`;

export const Handle = styled.div<{
  $size: 'large' | 'medium';
  $isChecked: boolean;
}>`
  display: inline-block;
  position: absolute;

  width: ${({ $size }) => ($size === 'large' ? '26px' : '20px')};
  height: ${({ $size }) => ($size === 'large' ? '26px' : '20px')};
  margin: 2px;

  background-color: ${({ theme }) => theme.colors.BROWN_900};

  transition: transform 0.2s;

  ${({ $size, $isChecked }) =>
    $isChecked
      ? $size === 'large'
        ? css`
            transform: translateX(20px);
          `
        : css`
            transform: translateX(16px);
          `
      : css`
          transform: translateX(0);
        `}
`;
