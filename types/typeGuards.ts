import type { IsoString } from '@/types/utils';
import type { Tier, TierWithoutNotRatable } from '@/types/randomDefense';
import { RatedTier } from '@/types/tierHider';

export const isObject = (data: unknown): data is object => {
  return typeof data === 'object' && data !== null;
};

export const isNumericObject = (
  data: unknown,
): data is Record<number, unknown> => {
  return (
    isObject(data) && Object.keys(data).every((key) => !isNaN(Number(key)))
  );
};

export const isNumericArray = (data: unknown): data is number[] => {
  return (
    Array.isArray(data) && data.every((value) => typeof value === 'number')
  );
};

export const isIsoString = (data: unknown): data is IsoString => {
  return (
    typeof data === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data)
  );
};

export const isTier = (data: unknown): data is Tier => {
  return typeof data === 'number' && data % 1 === 0 && data >= 0 && data <= 31;
};

export const isTierWithoutNotRatable = (
  data: unknown,
): data is TierWithoutNotRatable => {
  return isTier(data) && data !== 31;
};

export const isRatedTier = (data: unknown): data is RatedTier => {
  return isTier(data) && data !== 0 && data !== 31;
};
