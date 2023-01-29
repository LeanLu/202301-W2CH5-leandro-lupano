import { changeOfStatus } from './changeOfStatus.js';
import { checkPosition } from './checkPosition.js';
import { createNewArray } from './createNewArray.js';

// Función para chequear status cuando la célula no está en el borde:
export const checkAround = (
  array: number[][],
  columnsQuantities: number,
  linesQuantities: number
) => {
  const newCellsArray = createNewArray(columnsQuantities, linesQuantities);

  for (let i = 0; i < linesQuantities; i++) {
    for (let j = 0; j < columnsQuantities; j++) {
      const x = j;
      const y = i;
      const xMax = columnsQuantities - 1;
      const yMax = linesQuantities - 1;

      const quantityOfAlive = checkPosition(x, y, array, xMax, yMax);

      changeOfStatus(x, y, array, quantityOfAlive, newCellsArray);
    }
  }

  return newCellsArray;
};
