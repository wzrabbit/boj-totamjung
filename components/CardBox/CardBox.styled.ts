import { styled, css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const kickbackAndDisappear = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  22% {
    transform: translateY(15%) scale(1); opacity: 1;
  }

  44% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  66% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  100% {
    transform: translateY(0) scale(0.8); opacity: 0;
  }
`;

const openTopAndDisappear = keyframes`
  0% {
    transform: scale(1) rotate(0deg) translateY(0);
    opacity: 1;
  }

  50% {
    transform: scale(1) rotate(-30deg) translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: scale(0.8) rotate(-30deg) translateY(-100%);
    opacity: 0;
  }
`;

const shootCard = keyframes`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-15%);
  }

  40% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(-1000%);
  }
`;

export const ScaleUpAnimationContainer = styled.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${slideUp} 0.25s forwards;
`;

export const InnerContainer = styled.button<{ $isCardBoxOpening: boolean }>`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({ $isCardBoxOpening }) =>
    $isCardBoxOpening &&
    css`
      animation: ${kickbackAndDisappear} 1.35s 1.6s forwards;
    `}

  ${({ $isCardBoxOpening }) =>
    !$isCardBoxOpening &&
    css`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`;

export const GlowingBox = styled.div<{ $isCardBoxOpening: boolean }>`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({ theme }) => theme.color.BLACK};

  ${InnerContainer}:hover > & {
    box-shadow: 0 0 75px ${({ theme }) => theme.color.GOLD};
  }

  ${({ theme, $isCardBoxOpening }) =>
    $isCardBoxOpening &&
    css`
      box-shadow: 0 0 75px ${theme.color.GOLD};
    `};
`;

export const CardBoxInside = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`;

export const InsideCardList = styled.div<{ $isCardBoxOpening: boolean }>`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({ $isCardBoxOpening }) =>
    !$isCardBoxOpening &&
    css`
      opacity: 0;
    `}
`;

export const InsideCard = styled.img<{
  $isCardBoxOpening: boolean;
  $delay: number;
  $top: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({ $isCardBoxOpening, $delay }) =>
    $isCardBoxOpening &&
    css`
      animation: ${shootCard} 1.5s ${$delay}s forwards;
    `}
`;

export const CardBoxFront = styled.img`
  position: absolute;
  top: 9.15%;
  left: 0;

  width: 100%;
`;

export const CardBoxTop = styled.img<{ $isCardBoxOpening: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({ $isCardBoxOpening }) =>
    $isCardBoxOpening &&
    css`
      animation: ${openTopAndDisappear} 0.8s ease-in-out forwards;
    `}
`;
