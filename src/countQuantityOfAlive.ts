export const countQuantityOfAlive = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y - 1][x - 1] === 1) quantityOfAlive++;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y - 1][x + 1] === 1) quantityOfAlive++;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y + 1][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y + 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};
