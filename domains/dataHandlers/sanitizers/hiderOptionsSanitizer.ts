import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import { isHiderOptions } from '../validators/hiderOptionsValidator';

export const hiderOptionsSanitizer = (hiderOptions: unknown) => {
  return isHiderOptions(hiderOptions) ? hiderOptions : DEFAULT_HIDER_OPTIONS;
};
