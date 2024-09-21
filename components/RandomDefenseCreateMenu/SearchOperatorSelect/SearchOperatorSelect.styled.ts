import { styled, keyframes } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`;

export const ButtonContainer = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`;

const zoomInOut = keyframes`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`;

export const CheckIconWrapper = styled.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({ theme }) => theme.color.GOLD};

    animation: ${zoomInOut} 0.15s forwards;
  }
`;

export const Button = styled.button<{ $isSelected: boolean }>`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.GOLD : theme.color.LIGHT_GRAY};
`;
