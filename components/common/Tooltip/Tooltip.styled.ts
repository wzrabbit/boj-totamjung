import { styled, css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
`;

export const Tooltip = styled.button`
  width: 100%;
  height: 100%;

  background: none;

  cursor: help;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.GOLD};
  }
`;

export const SpeechBubbleWrapper = styled.div<{
  $direction: 'up' | 'left' | 'right' | 'down';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  transform-origin: center;

  ${({ $direction }) => {
    switch ($direction) {
      case 'up':
        return css`
          bottom: calc(100% + 12px);
          left: -135px;
        `;

      case 'left':
        return css`
          left: -312px;
        `;

      case 'right':
        return css`
          bottom: calc(100% + 12px);
          left: -135px;
        `;

      case 'down':
        return css`
          top: calc(100% + 12px);
          left: -135px;
        `;
    }
  }}
`;
