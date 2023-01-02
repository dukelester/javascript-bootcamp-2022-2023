const { summation, calculateTaxes } = require('./sum');

describe('test a summation function', () => {
    it('2 + 2 should be 4', () => {
        expect(summation(2, 2)).toBe(4);
    });
    it('summation of 2 + 0 is 2', () => {
        expect(summation(2, 0)).toBe(2);
    });
    it('should give 100 for 70 + 30', () => {
        expect(summation(70, 30)).toEqual(100)
    });
    it('should return 30 for 15 + 15', () => {
        expect(summation(15, 15)).toBe(30);
    });
});

describe('test the calculation if taxes', () => {
    it('The tax of 50000 is 12500', () => {
        expect(calculateTaxes(50000)).toEqual(12500);
    });
    it('The tax of 10000 is 1500', () => {
        expect(calculateTaxes(10000)).toBe(1500);
    });
    it('should return 0 for 0 income', () => {
        expect(calculateTaxes(0)).toStrictEqual(0);
    });
});


