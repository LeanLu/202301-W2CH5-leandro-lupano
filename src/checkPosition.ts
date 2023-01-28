import * as f from './countQuantityOfAlive.js';
export const checkPosition = (
  x: number,
  y: number,
  array: number[][],
  xMax: number,
  yMax: number
) => {
  if (x === 0 && y === 0) return f.countQuantityOfAliveCorner1(x, y, array);

  if (x === xMax && y === 0) return f.countQuantityOfAliveCorner2(x, y, array);

  if (x === 0 && y === yMax) return f.countQuantityOfAliveCorner3(x, y, array);

  if (x === xMax && y === yMax)
    return f.countQuantityOfAliveCorner4(x, y, array);

  if (x === 0 && 0 < y && y < yMax)
    return f.countQuantityOfAliveBorder1(x, y, array);

  if (x === xMax && 0 < y && y < yMax)
    return f.countQuantityOfAliveBorder2(x, y, array);

  if (0 < x && x < xMax && y === 0)
    return f.countQuantityOfAliveBorder3(x, y, array);

  if (0 < x && x < xMax && y === yMax)
    return f.countQuantityOfAliveBorder4(x, y, array);

  return f.countQuantityOfAlive(x, y, array);
};
