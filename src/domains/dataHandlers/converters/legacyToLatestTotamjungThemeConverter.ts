export const convertLegacyToLatestTotamjungTheme = (
  legacyTotamjungTheme: unknown,
) => {
  return legacyTotamjungTheme === 'on' ? 'totamjung' : 'none';
};
