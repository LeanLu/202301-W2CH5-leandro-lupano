export const changeOfStatus = (
  x: number,
  y: number,
  array: number[][],
  quantityOfAlive: number,
  newArray: number[][]
) => {
  if (quantityOfAlive < 2) newArray[y][x] = 0;
  if (quantityOfAlive > 3) newArray[y][x] = 0;
  if (quantityOfAlive === 3) newArray[y][x] = 1;
  if (array[y][x] === 1 && quantityOfAlive === 2) newArray[y][x] = 1;
};
