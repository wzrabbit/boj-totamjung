import { styled } from 'styled-components';
import { woodBackground } from '@/assets/png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 520px;

  background-image: url(${woodBackground});
  background-size: cover;
`;

export const ProblemCardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 100%;
`;

export const ControlPanel = styled.ul`
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  height: 60px;

  column-gap: 12px;
`;
