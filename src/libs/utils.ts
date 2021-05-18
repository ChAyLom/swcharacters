export const getIdFromUrl = (url: string): number | null => {
  const res = url.match(/\/\d+\/$/)?.[0];
  if (!res) return null;
  return Number(res.substring(1, res.length - 1));
};