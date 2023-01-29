import { checkAround } from './checkAround.js';
const linesQuantities = 5;
const columnsQuantities = 5;
let cells = [
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
