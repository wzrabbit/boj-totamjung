import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`;

export const WarningTierLabel = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;
