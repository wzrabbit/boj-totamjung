import { styled } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.color.LIGHTEST_BROWN};
  background-color: ${({ theme }) => theme.color.BROWN};
  border-radius: 20px;

  user-select: none;
`;

export const TimeDisplay = styled.span`
  color: ${({ theme }) => theme.color.LIGHTEST_BROWN};
  font-size: 24px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background: transparent;

  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.LIGHTEST_BROWN};
  }
`;
