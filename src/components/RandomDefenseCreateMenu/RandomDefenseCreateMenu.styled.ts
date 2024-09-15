import { styled } from 'styled-components';
import type { CSSProperties } from 'react';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 6px;

  z-index: 1;
`;

export const ErrorTextWrapper = styled.div`
  position: absolute;
  top: -32px;
  right: 0;
`;

export const RandomDefenseCapsuleButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
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

export const InformationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`;

export const RandomDefenseCreateButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
