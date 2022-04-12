export const orderByNewest = (arr: any[] | undefined) => {
  if (!arr) return [];

  return arr.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
