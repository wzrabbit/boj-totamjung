import { RatedTier } from '~types/tierHider';

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

export interface HiderOptionsResponse {
  problemTagLockDuration: {
    hours: number;
    minutes: number;
  };
  shouldHideTier: boolean;
  shouldWarnHighTier: boolean;
  warnTier: RatedTier;
  algorithmHiderUsage: 'click' | 'auto';
  problemTagLockUsage: 'click' | 'auto';
}
