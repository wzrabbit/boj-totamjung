import type { Tier } from './randomDefense';

export interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}
