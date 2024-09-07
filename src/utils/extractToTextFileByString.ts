export const extractToTextFileByString = (
  content: string,
  fileName: string,
) => {
  const link = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain' });

  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
};
