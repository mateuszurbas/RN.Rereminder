import * as dayjs from "dayjs";

export const getSumDegree = (numbers: Array<number>): number => {
  "worklet";
  const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) % 360;
  return sum > 0 ? sum : 360 + sum;
};

export const formatDate = (date: Date): string => dayjs.default(date).format("hh:mm");

export const generateTickValues = () =>
  Array(96 + 1)
    .fill(null)
    .map((_, idx) => idx * 3.75);

export const generateTickTimeValues = () =>
  Array(11 + 1)
    .fill(null)
    .map((_, idx) => idx * 30);
