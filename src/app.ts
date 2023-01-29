import { checkAround } from './checkAround.js';

const linesQuantities: number = 5;
const columnsQuantities: number = 5;

let cells: number[][] = [
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.table(cells);

const startGame = () => {
  cells = checkAround(cells, columnsQuantities, linesQuantities);
  console.table(cells);
};

setInterval(startGame, 1000);
