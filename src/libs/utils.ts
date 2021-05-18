export const getIdFromUrl = (url: string): string => {
  const res = url.match(/\/\d+\/$/)?.[0];
  if (!res) return '';
  return res.substring(1, res.length - 1);
};

export const range = (
  length: number,
): number[] => {
  const nums: number[] = [];

  for (let i = 0; i < length; i++) nums.push(i);

  return nums;
};