import { countQuantityOfAlive } from './countQuantityOfAlive.js';
import { changeOfStatus } from './changeOfStatus.js';

// Función para chequear status cuando la célula no está en el borde:
export const checkAroundNoBorder = (
  array: number[][],
  columnsQuantities: number,
  linesQuantities: number
) => {
  for (let i = 1; i < columnsQuantities - 1; i++) {
    for (let j = 1; j < linesQuantities - 1; j++) {
      const x = j;
      const y = i;

      const quantityOfAlive = countQuantityOfAlive(x, y, array);

      changeOfStatus(x, y, array, quantityOfAlive);
    }
  }
};
