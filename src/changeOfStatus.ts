export const changeOfStatus = (
  x: number,
  y: number,
  array: number[][],
  quantityOfAlive: number
) => {
  if (quantityOfAlive < 2) array[y][x] = 0;
  if (quantityOfAlive > 3) array[y][x] = 0;
  if (quantityOfAlive === 2 || quantityOfAlive === 3) array[y][x] = 1;
};
