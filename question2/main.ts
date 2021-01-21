export function findOutlier(integers: number[]): number {
  let odds = integers.filter(int => int % 2 === 0);
  let evens = integers.filter(int => int% 2 === 1);
  if (odds.length > evens.length) {
      return evens[0];
  } else return odds[0];
  }
  