import { styled } from 'styled-components';
import type { CSSProperties } from 'react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: relative;

  width: 100%;
  padding-top: 6px;
`;

export const RandomDefenseCapsuleButtonWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
`;

export const Row = styled.div<{ $columnGap?: CSSProperties['width'] }>`
  display: flex;
  column-gap: ${({ $columnGap }) => ($columnGap ? $columnGap : 0)};

  width: 100%;
`;

export const Label = styled.label<{ $width: CSSProperties['width'] }>`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({ $width }) => $width};
`;

export const PanelContainer = styled.div<{ $width: CSSProperties['width'] }>`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({ $width }) => $width};
`;

export const SolvedRangeInputsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const DifficultyAdjustMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
