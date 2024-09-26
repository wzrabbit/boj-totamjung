export const isValidDate = (date: string | number | Date) => {
  return !isNaN(Number(new Date(date)));
};
