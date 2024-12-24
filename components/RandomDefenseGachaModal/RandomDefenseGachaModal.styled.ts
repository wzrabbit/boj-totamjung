import { styled, keyframes } from 'styled-components';
import { woodBackground } from '@/assets/png';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const blink = keyframes`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`;

export const tremble = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  10% {
    transform: rotate(-3deg);
  }

  20% {
    transform: rotate(3deg);
  }

  30% {
    transform: rotate(-3deg);
  }

  40% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(0deg);
  }
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  
  60% {
    transform: scale(1.02);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInAndEnable = keyframes`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 520px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${woodBackground});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }
`;

export const ErrorScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ErrorMessageBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ErrorMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.LIGHT_RED_TRANSPARENT};
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`;

export const WarningIconWrapper = styled.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.LIGHT_RED};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.LIGHT_RED};
  text-align: center;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Description = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.color.WHITE};
  word-break: break-all;
`;

export const BottomControlList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`;

export const LoadingScreen = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`;

export const LoadingIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.WHITE};
  }

  animation: ${rotate} 3s linear infinite;
`;

export const IconMessageContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const LoadingMessage = styled.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({ theme }) => theme.color.LIGHT_GRAY};

  animation: ${blink} 2s linear infinite;
`;

export const ReadyScreen = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`;

export const CardBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const MouseClickIconWrapper = styled.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.PURE_WHITE};
  }

  animation: ${tremble} 1.5s infinite;
`;

export const ReadyMessage = styled.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({ theme }) => theme.color.WHITE};
`;

export const ResultScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ProblemCardGridWrapper = styled.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 20px;

  opacity: 0;
  animation: ${zoomIn} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`;

export const ResultBottomControlList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${fadeInAndEnable} 0.3s 1s forwards;
`;
