import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`;

export const SlotNoPanel = styled.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`;

export const SlotControlPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`;
