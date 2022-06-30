const generatePoint = (degree: number, index: number) => ({
  degree,
  title: `Zadanie nr ${index}`,
  description: `To zadanie jest przy ${degree} stopniach na kole`,
  time: new Date(),
});

export const mockedPoints = [0, 10, 40, 90, 150, 220, 300, 330].map((degree, index) =>
  generatePoint(degree, index),
);
