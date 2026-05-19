import type { AlgorithmInfo } from '@/types/algorithm';
import type { ResolvedLanguage } from './types';

export const getAlgorithmDisplayName = (
  info: Pick<AlgorithmInfo, 'name' | 'englishName'>,
  language: ResolvedLanguage,
): string => (language === 'en' ? info.englishName : info.name);
