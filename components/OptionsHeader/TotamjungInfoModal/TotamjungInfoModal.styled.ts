import { styled, keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`;

export const DarkBrownGradientElement = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({ theme }) => theme.gradient.BROWN_GRADIENT};

  z-index: 0;
`;

export const IntroductoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const LogoSquareImage = styled.img`
  width: 160px;
`;

export const ContentTitle = styled.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({ theme }) => theme.color.GOLD};
`;

export const IntroductoryTextContainer = styled.div`
  position: relative;

  text-align: center;
`;

export const TypewriterText = styled.span`
  margin: 0 2px;

  color: ${({ theme }) => theme.color.LEMON};
`;

export const Pointer = styled.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({ theme }) => theme.color.LEMON};

  animation: ${blink} 0.8s infinite forwards;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`;

export const LightGrayText = styled.span`
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const ControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`;
