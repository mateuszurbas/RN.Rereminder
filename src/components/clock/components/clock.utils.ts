export const getSumDegree = (numbers: Array<number>): number => {
  "worklet";
  const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) % 360;
  return sum > 0 ? sum : 360 + sum;
};
