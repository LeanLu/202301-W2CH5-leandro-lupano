import { checkAroundNoBorder } from './checkAroundFunction.js';
const linesQuantities = 3;
const columnsQuantities = 3;
const cells = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 1],
];
console.table(cells);
//checkAroundBorder(cells, columnsQuantities, linesQuantities);
checkAroundNoBorder(cells, columnsQuantities, linesQuantities);
console.table(cells);
