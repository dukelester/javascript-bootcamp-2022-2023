const { circleArea, rectangleArea, removeDuplicates, compileAndroidCode } = require('./areas');

describe('Testing the Area of a circle', () => {
  it('The area of a circle whose radius is 0 is 0', () => {
    expect(circleArea(0)).toBe(0);
  });
  it('The area of circle whose radius is 1 is PI', () => {
    expect(circleArea(1)).toBe(Math.PI);
  });
  it('The area of a cicle whose a negative radius is an error', () => {
    expect(circleArea(-20)).toBe('Invalid radius');
  });
});

describe('The area of a rectangle', () => {
    it('The area of a rectangle whose width and length are both 0 is 0', () => {
        expect(rectangleArea(0, 0)).toStrictEqual({ message: 'Both width and length can not be zero!' });
    });
    it('Should return 0 for 0 and 20', () => {
        expect(rectangleArea(0, 20)).toEqual(0);
    });
    it('Should return an error message if either width or length is negative', () => {
        expect(rectangleArea(-20, -100)).toStrictEqual({ message: 'Invalid negative value!' })
    });
    it('Should return 100 for 5 and 20', () => {
        expect(rectangleArea(5, 20)).toEqual(100);
    });
});

describe('Test the removal of duplicates from an array', () => {
    it('Should return an array without duplicates', () => {
        expect(removeDuplicates([3, 4, 5, 2, 2, 3, 42, 3, 4, 24, 5, 6, 4, 5, 3, 5, 3, 5])).toEqual([3, 4, 5, 2, 42, 24, 6])
    });
    it('The array whose first value is 0 ', () => {
        expect(removeDuplicates([0, 2, 3, 3, 2, 3, 4])).toStrictEqual([ 0, 2, 3, 4 ]);
    });
});

describe('The floating point numbers need to be used with toBeCloseTo', () => {
  it('The floating point numbers use toBeCloseTo instead of toEqual', () => {
    expect(2.99 + 3.01).toBeCloseTo(6);
  });
});

describe('The strings need to use the match so that to match them over', () => {
  it('The strings use the toMatch letter d', () => {
    expect('duke lester').toMatch(/d/);
  });
  it('The string should match the capital Duke', () => {
    expect('duke lester').toMatch(/DUKE/i);
  });
  it('The string should not contain letter n', () => {
    expect('duke lester').not.toMatch(/n/);
  });
});

const shoppingList = [
  'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk', 'milk', 'milk'
];

it('The shopping list should contain the milk in it', () => {
  expect(shoppingList).toContain('milk');
  expect(shoppingList).not.toContain('eggs');
  expect(shoppingList).toContain('paper towels');
  expect(new Set(shoppingList)).toContain('milk');
});

it('The throwing of errors', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(/JDK/i);
});
