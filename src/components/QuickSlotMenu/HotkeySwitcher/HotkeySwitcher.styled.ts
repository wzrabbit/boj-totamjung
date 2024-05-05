import { styled } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`;

export const SwitchButton = styled.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({ theme }) => theme.color.LEMON};

    transform: scale(1.1);
  }
`;
