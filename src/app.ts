import { checkAroundNoBorder } from './checkAroundFunction.js';

const linesQuantities: number = 3;
const columnsQuantities: number = 3;

const cells: number[][] = [
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1],
];

console.table(cells);

//checkAroundBorder(cells, columnsQuantities, linesQuantities);
checkAroundNoBorder(cells, columnsQuantities, linesQuantities);

console.table(cells);
