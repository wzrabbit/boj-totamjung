import { TotamjungTheme } from '@/types/totamjungTheme';

export const isTotamjungTheme = (data: unknown): data is TotamjungTheme => {
  return data === 'none' || data === 'totamjung';
};
