import type { SolvedAcTheme } from '@/types/mainTheme';

export const isSolvedAcTheme = (data: unknown): data is SolvedAcTheme => {
  return (
    typeof data === 'string' &&
    ['solvedAcLight', 'solvedAcDark', 'solvedAcBlack'].includes(data)
  );
};
