import { checkAround } from './checkAroundFunction.js';

const linesQuantities: number = 5;
const columnsQuantities: number = 5;

const cells: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.table(cells);

//checkAroundBorder(cells, columnsQuantities, linesQuantities);
checkAround(cells, columnsQuantities, linesQuantities);

console.table(cells);
