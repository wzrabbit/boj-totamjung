export const sanitizeFontNo = (fontNo: unknown) => {
  if (typeof fontNo === 'number' && !isNaN(fontNo) && fontNo % 1 === 0) {
    return fontNo;
  }

  return 0;
};
