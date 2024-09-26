export const isNumericString = (data: string) => {
  return /^[1-9]\d*$/.test(data);
};

export const isNumericStringAllowsLeadingZeroes = (data: string) => {
  return /^\d+$/.test(data);
};
