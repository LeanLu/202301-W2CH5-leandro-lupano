import { checkAround } from './checkAround.js';
const linesQuantities = 5;
const columnsQuantities = 5;
const cells = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
console.table(cells);
const cellChanged = checkAround(cells, columnsQuantities, linesQuantities);
console.table(cellChanged);
/*
const arrayTest = [
  [1, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
];

const cellTest = checkAround(arrayTest, 3, 3);

console.table(cellTest);
*/
