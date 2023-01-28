const linesQuantities: number = 3;
const columnsQuantities: number = 3;

const cells: number[][] = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

console.table(cells);
/*
const checkAround = (array: number[][]) => {
  for (let i = 0; i < columnsQuantities; i++) {
    for (let j = 0; j < linesQuantities; j++) {
      let quantityOfAlive = 0;

      // Ejemplo: i= 1; j = 1;

      if (array[i - 1][j - 1] === 1) quantityOfAlive++;

      if (array[i - 1][j] === 1) quantityOfAlive++;

      if (array[i - 1][j + 1] === 1) quantityOfAlive++;

      if (array[i][j - 1] === 1) quantityOfAlive++;

      if (array[i][j + 1] === 1) quantityOfAlive++;

      if (array[i + 1][j - 1] === 1) quantityOfAlive++;

      if (array[i + 1][j] === 1) quantityOfAlive++;

      if (array[i + 1][j + 1] === 1) quantityOfAlive++;

      if (quantityOfAlive < 2) array[i][j] = 0;
      if (quantityOfAlive > 3) array[i][j] = 0;
      if (quantityOfAlive === 2 || quantityOfAlive === 3) array[i][j] = 1;
    }
  }
};
*/

for (let i = 0; i < cells.length; i++) {
  for (let j = 0; j < cells.length; j++) {
    if (cells[i][j] === 0) {
      cells[i][j] = 1;
    } else {
      cells[i][j] = 0;
    }
  }
}
console.table(cells);
