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
const newCellsTable = checkAround(cells, columnsQuantities, linesQuantities);
console.table(newCellsTable);
const newCellsTable2 = checkAround(newCellsTable, columnsQuantities, linesQuantities);
console.table(newCellsTable2);
const newCellsTable3 = checkAround(newCellsTable2, columnsQuantities, linesQuantities);
console.table(newCellsTable3);
const newCellsTable4 = checkAround(newCellsTable3, columnsQuantities, linesQuantities);
console.table(newCellsTable4);
const newCellsTable5 = checkAround(newCellsTable4, columnsQuantities, linesQuantities);
console.table(newCellsTable5);
const newCellsTable6 = checkAround(newCellsTable5, columnsQuantities, linesQuantities);
console.table(newCellsTable6);
const newCellsTable7 = checkAround(newCellsTable6, columnsQuantities, linesQuantities);
console.table(newCellsTable7);
const newCellsTable8 = checkAround(newCellsTable7, columnsQuantities, linesQuantities);
console.table(newCellsTable8);
const newCellsTable9 = checkAround(newCellsTable8, columnsQuantities, linesQuantities);
console.table(newCellsTable9);
/* PRUEBA DE SET INTERVAL:
let newCellsArray: number[][] = cells;

const startGame = (
  array: number[][],
  columnsQuantities: number,
  linesQuantities: number
) => {
  newCellsArray = checkAround(array, columnsQuantities, linesQuantities);
  debugger;
  console.table(newCellsArray);
};
startGame(newCellsArray, columnsQuantities, linesQuantities);

setInterval(startGame, 1000);
*/
/*
const arrayTest = [
  [1, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
];

const cellTest = checkAround(arrayTest, 3, 3);

console.table(cellTest);
*/
