import { checkAround } from './checkAround';

describe('Given checkAround function', () => {
  describe('When there is an Array of alive cells with a number of Columns and Rows', () => {
    test('Then the cells alive with value 1 of the array has to change to 0 if there is no alive cells around', () => {
      const arrayTest = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const columnsQuantities = 3;
      const linesQuantities = 3;
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const result = checkAround(arrayTest, columnsQuantities, linesQuantities);
      expect(result).toEqual(expected);
    });

    test('Then the cells died with value 0 of the array has to change to 1 if there is 2 or 3 alive cells around', () => {
      const arrayTest = [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ];
      const columnsQuantities = 3;
      const linesQuantities = 3;
      const expected = [
        [1, 1, 0],
        [1, 1, 1],
        [1, 0, 1],
      ];
      const result = checkAround(arrayTest, columnsQuantities, linesQuantities);
      expect(result).toEqual(expected);
    });

    test('Then the cells alive with value 1 of the array has to change to 0 if there is more than 3 alive cells around', () => {
      const arrayTest = [
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ];
      const columnsQuantities = 3;
      const linesQuantities = 3;
      const expected = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 1],
      ];
      const result = checkAround(arrayTest, columnsQuantities, linesQuantities);
      expect(result).toEqual(expected);
    });
  });
});
