import type { solvedAcNumericTierIcons } from '~images/svg/tier';
import type { IsoString } from '~types/utils';

export interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
}

export interface LegacyRandomDefenseHistoryInfo {
  no: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  date: string;
}

export interface RandomDefenseHistoryResponse {
  randomDefenseHistory: RandomDefenseHistoryInfo[];
  isHidden: boolean;
}
