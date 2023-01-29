export const createNewArray = (
  columnsQuantities: number,
  linesQuantities: number
) => {
  const newArrayCreated: number[][] = [];

  for (let i = 0; i < linesQuantities; i++) {
    newArrayCreated[i] = [];

    for (let j = 0; j < columnsQuantities; j++) {
      newArrayCreated[i][j] = 0;
    }
  }
  return newArrayCreated;
};
