import {
  DEFAULT_HIDER_OPTIONS,
  DEFAULT_V2_HIDER_OPTIONS,
} from '@/constants/defaultValues';
import {
  isHiderOptions,
  isV2HiderOptions,
} from '../validators/hiderOptionsValidator';

export const sanitizeV2HiderOptions = (legacyHiderOptions: unknown) => {
  return isV2HiderOptions(legacyHiderOptions)
    ? legacyHiderOptions
    : DEFAULT_V2_HIDER_OPTIONS;
};

export const sanitizeHiderOptions = (hiderOptions: unknown) => {
  return isHiderOptions(hiderOptions) ? hiderOptions : DEFAULT_HIDER_OPTIONS;
};
