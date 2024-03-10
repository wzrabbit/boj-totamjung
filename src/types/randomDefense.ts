import type { solvedAcNumericTierIcons } from '~images/svg/tier';

export interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: Date;
}

export interface LocalRandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: number;
}

export interface RandomDefenseHistoryResponse {
  randomDefenseHistory: LocalRandomDefenseHistoryInfo[];
  isDefenseHistoryHidden: boolean;
}
