import type { IsoString } from '@/types/utils';
import type { RatedTier } from '@/types/tierHider';

export interface Algorithm {
  id: number;
  name: string;
}

export interface AlgorithmInfo {
  id: number;
  name: string;
  englishName: string;
  tag: string;
  alias: string[];
}

export interface HiderOptions {
  problemTagLockDuration: {
    hours: number;
    minutes: number;
  };
  shouldHideTier: boolean;
  shouldWarnHighTier: boolean;
  shouldRevealTierOnHover: boolean;
  warnTier: RatedTier;
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

export type CheckedAlgorithmIds = number[];

export interface Timer {
  problemId: number;
  expiresAt: IsoString;
}
