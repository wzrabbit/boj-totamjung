export const toPx = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value;
};
