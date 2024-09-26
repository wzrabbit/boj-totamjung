export const convertLegacyToLatestTotamjungTheme = (
  legacyTotamjungTheme: unknown,
) => {
  return legacyTotamjungTheme === 'yes' ? 'totamjung' : 'none';
};
