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

export const Container = styled.div`
  display: flex;

  width: 1310px;
  height: 665px;
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
  height: 580px;
`;

export const TotamjungImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`;

export const TotamjungImage = styled.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${breathe} 3s forwards infinite;
`;
