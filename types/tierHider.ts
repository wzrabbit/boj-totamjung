import type { solvedAcNumericTierIcons } from '@/images/svg/tier';

export type RatedTier = Exclude<keyof typeof solvedAcNumericTierIcons, 0 | 31>;
