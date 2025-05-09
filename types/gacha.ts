import type { Rank } from './randomDefense';

export type PreviewCardRanks = [Rank] | [Rank, Rank] | [Rank, Rank, Rank];

export type GachaStatus = 'loading' | 'ready' | 'showingResult' | 'error';

export interface GachaOptions {
  isTierHidden: boolean;
  isAudioMuted: boolean;
}
