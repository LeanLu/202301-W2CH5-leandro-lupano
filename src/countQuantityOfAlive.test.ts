import * as f from './countQuantityOfAlive';

describe('Given countQuantityOfAlive function', () => {
  describe('When there is an Array with x, y position and quantity of alive cells Q', () => {
    test('Then if Q = 0, the position is x=1, y=1, and array[y][x+1]= 1, Q should change to 1', () => {
      const arrayTest = [
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0],
      ];
      const x = 1;
      const y = 1;
      const expected = 1;
      const result = f.countQuantityOfAlive(x, y, arrayTest);
      expect(result).toEqual(expected);
    });
  });

  test('Then if Q = 0, the position is x=1, y=1, and array[y+1][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 0],
    ];
    const x = 1;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAlive(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=1, and array[y+1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const x = 1;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAlive(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=1, and array[y+1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const x = 1;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAlive(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=1, and array[y-1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const x = 1;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAlive(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=0, and array[y+1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 0],
    ];
    const x = 2;
    const y = 0;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner2(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=0, y=2, and array[y][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 0],
    ];
    const x = 0;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner3(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=0, y=2, and array[y-1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 0],
    ];
    const x = 0;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner3(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=2, and array[y][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 1],
    ];
    const x = 2;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=2, and array[y-1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 1],
    ];
    const x = 2;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=2, and array[y-1][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const x = 2;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveCorner4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=0, y=1, and array[y+1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ];
    const x = 0;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder1(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=0, y=1, and array[y+1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
    ];
    const x = 0;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder1(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=1, and array[y][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ];
    const x = 2;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder2(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=1, and array[y+1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 1],
    ];
    const x = 2;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder2(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=1, and array[y-1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 0],
    ];
    const x = 2;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder2(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=2, y=1, and array[y+1][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
    ];
    const x = 2;
    const y = 1;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder2(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=0, and array[y+1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 1, 0],
      [0, 0, 1],
      [0, 0, 0],
    ];
    const x = 1;
    const y = 0;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder3(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=2, and array[y][x-1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 0],
    ];
    const x = 1;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=2, and array[y-1][x]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const x = 1;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=2, and array[y][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 1],
    ];
    const x = 1;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });

  test('Then if Q = 0, the position is x=1, y=2, and array[y-1][x+1]= 1, Q should change to 1', () => {
    const arrayTest = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
    ];
    const x = 1;
    const y = 2;
    const expected = 1;
    const result = f.countQuantityOfAliveBorder4(x, y, arrayTest);
    expect(result).toEqual(expected);
  });
});
