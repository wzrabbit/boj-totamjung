import { DEFAULT_HIDER_OPTIONS } from '~constants/defaultValues';
import { isHiderOptionsResponse } from '../validators/hiderOptionsValidator';

export const hiderOptionsSanitizer = (hiderOptions: unknown) => {
  return isHiderOptionsResponse(hiderOptions)
    ? hiderOptions
    : DEFAULT_HIDER_OPTIONS;
};
