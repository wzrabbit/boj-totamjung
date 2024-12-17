import type { Rank, Tier } from './randomDefense';

export interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

export type PreviewCardRanks = [Rank] | [Rank, Rank] | [Rank, Rank, Rank];
