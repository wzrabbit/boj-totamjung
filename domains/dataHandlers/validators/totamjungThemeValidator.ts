import { TotamjungTheme } from '@/types/mainTheme';

export const isTotamjungTheme = (data: unknown): data is TotamjungTheme => {
  return data === 'none' || data === 'totamjung';
};
