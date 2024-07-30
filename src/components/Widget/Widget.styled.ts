import { styled, keyframes } from 'styled-components';

export const Container = styled.div`
  padding-top: 10px;
  color: blue;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 40px;
  height: 216px;

  pointer-events: none;
  z-index: 1000000;
  transition: 0.3s;

  & * {
    pointer-events: auto;
  }
`;

const bounceTop = keyframes`
    0% {
        transform: translateY(0);
    }
    33% {
      transform: translateY(5px);
    }
    66% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(0);
    }
`;

export const TopButton = styled.button<{
  $widgetTheme: 'none' | 'totamjung';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({ theme, $widgetTheme }) =>
    $widgetTheme === 'none'
      ? theme.color.BOJ_BLUE
      : theme.color.LIGHTEST_BROWN};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({ theme, $widgetTheme }) =>
      $widgetTheme === 'totamjung'
        ? theme.color.LIGHTEST_BROWN_TRANSPARENT
        : theme.color.BOJ_BLUE_TRANSPARENT} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({ theme, $widgetTheme }) =>
        $widgetTheme === 'totamjung'
          ? theme.color.LIGHTEST_BROWN_TRANSPARENT
          : theme.color.BOJ_BLUE_TRANSPARENT} !important;
  }

  & span {
    background-color: ${({ theme, $widgetTheme }) =>
      $widgetTheme === 'none' ? theme.color.PURE_WHITE : theme.color.BROWN};
  }
`;

export const TopIconContainer = styled.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${TopButton}.animate > & {
    animation: ${bounceTop} 1s forwards;
  }
`;

export const TopIconFrag = styled.span<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({ $direction }) =>
    $direction === 'left'
      ? 'translate(3px, 11px) rotate(-45deg)'
      : 'translate(12px, 11px) rotate(45deg)'};
`;

export const DropdownMenu = styled.ul<{
  $widgetTheme: 'none' | 'totamjung';
  $isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({ $isExpanded }) => ($isExpanded ? '216px' : '40px')};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({ theme, $widgetTheme }) =>
      $widgetTheme === 'none'
        ? theme.color.BOJ_BLUE
        : theme.color.LIGHTEST_BROWN};
  border-radius: 20px !important;
  background-color: ${({ theme, $widgetTheme }) =>
    $widgetTheme === 'none' ? 'transparent' : theme.color.BLACK_TRANSPARENT};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${TopButton}:active + & {
    scale: 0.93;
  }
`;

export const DropdownMenuItem = styled.li`
  width: 36px;
  height: 32px;
`;

export const DropdownMenuButton = styled.button<{
  $widgetTheme: 'none' | 'totamjung';
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;

  & > img {
    filter: ${({ theme, $widgetTheme }) =>
      $widgetTheme === 'none'
        ? theme.filter.BOJ_BLUE_FILTER
        : theme.filter.LIGHT_BROWN_FILTER};
  }
`;

export const DropdownButtonIcon = styled.img`
  width: auto;
  height: 26px;

  transition: transform 0.1s;

  button:disabled > & {
    opacity: 0.6;
  }

  button:not(:disabled) > &:hover {
    transform: scale(1.1);
  }

  button:not(:disabled) > &:active {
    transform: scale(1);
  }
`;
