import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

export const TimeDisplay = styled.div`
  flex-shrink: 0;

  margin: 0 2px 0 6px;

  font-size: 20px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: 50px;
`;

export const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 26px;
  height: 26px;

  background: transparent;

  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  height: 40px;

  user-select: none;

  & > ${TimeDisplay}, & ${ControlButton} > svg {
    color: ${({ $color }) => $color};
  }
`;
