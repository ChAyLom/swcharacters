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

export const capitalize = (str: string): string => (
  str.substr(0, 1).toUpperCase() + str.substr(1)
);

export const pretifyNumber = (num: string): string => {
  const revNum = num.split('').reverse().join('');
  return range(
    Math.ceil(num.length / 3)
  ).map(
    i => revNum.substr(i * 3, 3).split('').reverse().join('')
  ).reverse().join(' ');
};