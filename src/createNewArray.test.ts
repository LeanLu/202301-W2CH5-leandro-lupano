import { createNewArray } from './createNewArray';

describe('Given createNewArray function', () => {
  describe('When there is a number of Columns and Rows', () => {
    test('Then a new Array is created with this number or Rows and Columns', () => {
      const columnsQuantities = 3;
      const linesQuantities = 3;
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const result = createNewArray(columnsQuantities, linesQuantities);
      expect(result).toEqual(expected);
    });
  });
});
