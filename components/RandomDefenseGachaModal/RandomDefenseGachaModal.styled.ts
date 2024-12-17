import { styled } from 'styled-components';
import { woodBackground } from '@/assets/png';

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

export const ControlPanel = styled.ul`
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  height: 60px;

  column-gap: 12px;
`;
