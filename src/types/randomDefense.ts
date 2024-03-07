import type { solvedAcNumericTierIcons } from '~images/svg/tier';

export interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: Date;
}
