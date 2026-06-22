import { styled, keyframes } from 'styled-components';

const breathe = keyframes`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`;

const sleepBreathe = keyframes`
  0%,
  100% {
    transform: scale(100%);
  }

  50% {
    transform: scale(101.5%);
  }
`;

export const Container = styled.div`
  display: flex;

  width: 1310px;
  height: 685px;
  margin: 10px 0 0 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const OptionsBody = styled.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 600px;
`;

export const TotamjungImageWrapper = styled.div`
  position: relative;

  width: 250px;
`;

export const StandingTotamjungImage = styled.img<{ $visible: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 250px;
  height: 331px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform-origin: bottom;
  transition: opacity 1.5s ease;
  animation: ${breathe} 3s forwards infinite;
`;

export const SleepingTotamjungImage = styled.img<{ $visible: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 350px;
  height: auto;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 1.5s ease;
  animation: ${sleepBreathe} 4s ease-in-out infinite;
`;
