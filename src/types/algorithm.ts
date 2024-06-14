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
  warnTier: RatedTier | 'none';
  algorithmHiderUsage: 'click' | 'auto';
  problemTagLockUsage: 'click' | 'auto';
}
