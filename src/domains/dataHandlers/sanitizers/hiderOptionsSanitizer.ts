import { DEFAULT_HIDER_OPTIONS } from '~constants/defaultValues';
import { isHiderOptionsResponse } from '~types/typeGuards';

export const hiderOptionsSanitizer = (hiderOptions: unknown) => {
  return isHiderOptionsResponse(hiderOptions)
    ? hiderOptions
    : DEFAULT_HIDER_OPTIONS;
};
