describe('powerOfNum', () => {
    it('raises a number to the n-th power', () => {
        assert.equal(powerOfNum(2, 4), 16);
    });
    it('3 raised to 2 is 9', () => {
        assert.equal(powerOfNum(3, 2), 9);
    });
    it('8 raised to 0 is 1', () => {
        assert.equal(powerOfNum(8, 0), 1);
    });
});
