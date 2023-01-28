import { checkAround } from './checkAround.js';

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

const cellChanged = checkAround(cells, columnsQuantities, linesQuantities);

console.table(cellChanged);
