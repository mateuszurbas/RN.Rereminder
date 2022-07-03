const generatePoint = (index: number) => {
  const time = new Date();
  time.setHours(index * 3);

  return {
    title: `Zadanie nr ${index}`,
    description: `To zadanie jest eleganckie`,
    time,
  };
};

export const mockedPoints = Array(8)
  .fill(null)
  .map((_, index) => generatePoint(index));
