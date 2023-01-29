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

export const countQuantityOfAliveCorner1 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y + 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveCorner2 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y + 1][x - 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveCorner3 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y - 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveCorner4 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y - 1][x - 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveBorder1 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y - 1][x + 1] === 1) quantityOfAlive++;

  if (array[y + 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveBorder2 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y - 1][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x - 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveBorder3 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x] === 1) quantityOfAlive++;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y + 1][x - 1] === 1) quantityOfAlive++;

  if (array[y + 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};

export const countQuantityOfAliveBorder4 = (
  x: number,
  y: number,
  array: number[][]
) => {
  let quantityOfAlive = 0;

  if (array[y][x - 1] === 1) quantityOfAlive++;

  if (array[y - 1][x] === 1) quantityOfAlive++;

  if (array[y][x + 1] === 1) quantityOfAlive++;

  if (array[y - 1][x - 1] === 1) quantityOfAlive++;

  if (array[y - 1][x + 1] === 1) quantityOfAlive++;

  return quantityOfAlive;
};
