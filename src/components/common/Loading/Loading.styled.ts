import { styled, keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({ theme }) => theme.color.GOLD};

    animation: ${spin} 2s forwards infinite linear;
  }
`;
