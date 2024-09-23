import type { solvedAcNumericTierIcons } from '@/assets/svg/tier';

export type RatedTier = Exclude<keyof typeof solvedAcNumericTierIcons, 0 | 31>;
