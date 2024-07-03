import { DEFAULT_IS_TIER_HIDDEN } from '~constants/defaultValues';

export const sanitizeIsTierHidden = (isTierHidden: unknown) => {
  return typeof isTierHidden === 'boolean'
    ? isTierHidden
    : DEFAULT_IS_TIER_HIDDEN;
};
