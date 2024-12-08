import type { Tier } from './randomDefense';

export interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

export type ProblemCardSize = 1 | 2 | 3 | 4 | 5;

export interface ProblemCardSizeInfo {
  size: ProblemCardSize;
  width: number;
  height: number;
}
