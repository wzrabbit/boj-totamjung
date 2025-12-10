import { styled, keyframes } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import { theme } from '@/styles/theme';

const glowLoop = keyframes`
  0% {
    border-color: ${theme.color.ORANGE};
    box-shadow: 0 0 12px ${getTransparentHexColor(theme.color.ORANGE, 0.6)};
  }
  50% {
    border-color: ${theme.color.MANGO};
    box-shadow: 0 0 12px ${getTransparentHexColor(theme.color.MANGO, 0.6)};
  }
  100% {
    border-color: ${theme.color.ORANGE};
    box-shadow: 0 0 12px ${getTransparentHexColor(theme.color.ORANGE, 0.6)};
  }
`;

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  pointer-events: none;
`;

export const FocusIndicatorBox = styled.div`
  position: absolute;

  border: 3px solid ${({ theme }) => theme.color.ORANGE};
  border-radius: 4px;

  box-shadow: 0 0 12px
    ${({ theme }) => getTransparentHexColor(theme.color.ORANGE, 0.6)};
  will-change: top, left, width, height, opacity;

  z-index: 9999;
  transition:
    top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
  animation: ${glowLoop} 1.5s ease-in-out infinite;
`;
