import { styled, keyframes } from 'styled-components';

export const highlightAndFadeOut = keyframes`
  0% {
    opacity: 1;
    filter: brightness(200%);
  }

  20% {
    opacity: 1;
    filter: brightness(100%);
  }

  80% {
    opacity: 1;
    filter: brightness(100%);
  }

  100% {
    opacity: 0;
    filter: brightness(100%);
  }
`;

export const Container = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${highlightAndFadeOut} 2s forwards;
  }
`;

export const NotificationIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.GOLD};
  }
`;

export const NotificationText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.GOLD};
  font-weight: 600;
`;
