export const sanitizeTotamjungTheme = (totamjungTheme: unknown) => {
  return totamjungTheme === 'totamjung' ? 'totamjung' : 'none';
};
