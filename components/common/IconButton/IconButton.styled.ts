import { styled } from 'styled-components';

export const Button = styled.button<{
  $size: 'large' | 'medium';
  $width?: string;
  $color: string;
}>`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $size }) => ($size === 'large' ? '40px' : '32px')};
  padding: ${({ $size }) => ($size === 'large' ? '4px 6px' : '2px 4px')};

  border: ${({ $size, $color }) =>
    $size === 'large' ? `3px solid ${$color}` : `2px solid ${$color}`};
  border-radius: ${({ $size }) => ($size === 'large' ? '6px' : '4px')};
  background-color: transparent;

  color: ${({ $color }) => $color};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({ $color }) => $color};
  }

  transition: 0.2s;
`;

export const Text = styled.span<{ $size: 'large' | 'medium'; $color: string }>`
  font-size: ${({ $size }) => ($size === 'large' ? '20px' : '16px')};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`;

export const IconImage = styled.img<{ $size: 'large' | 'medium' }>`
  width: ${({ $size }) => ($size === 'large' ? '30px' : '24px')};
  height: ${({ $size }) => ($size === 'large' ? '30px' : '24px')};

  object-fit: contain;
`;

export const IconWrapper = styled.div<{
  $size: 'large' | 'medium';
  $color: string;
}>`
  flex-shrink: 0;

  width: ${({ $size }) => ($size === 'large' ? '30px' : '24px')};
  height: ${({ $size }) => ($size === 'large' ? '30px' : '24px')};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ $color }) => $color};
  }
`;
