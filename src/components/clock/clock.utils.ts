import * as dayjs from "dayjs";

export const calcSumDegree = (numbers: Array<number>): number => {
  "worklet";
  const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue) % 360;
  return sum > 0 ? sum : 360 + sum;
};

export const calcTimeToDegree = (date: Date): number => {
  const hourMinutes = 60;
  const dayjsDate = dayjs.default(date);
  const minutes = dayjsDate.get("hour") * hourMinutes + dayjsDate.get("minute");
  const degree = minutes / 4;
  return degree;
};

export const checkDegreeIfFullHour = (degree: number) => degree % 15 === 0;

export const formatDateToTime = (date: Date): string => dayjs.default(date).format("HH:mm");

export const generateTickValues = () =>
  Array(96)
    .fill(null)
    .map((_, idx) => idx * 3.75);

export const generateTickTimeValues = () =>
  Array(12)
    .fill(null)
    .map((_, idx) => idx * 30);
