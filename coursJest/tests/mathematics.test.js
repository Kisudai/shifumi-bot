const sum = require('../mathematics.js');

describe('sum', () => { 
    it('is defined', () => {
        expect(sum).toBeDefined();
    });

    it('1 + 2 = 3', () => {
        expect(sum(1, 2)).toEqual(3);
    });

    it('throw error if a or b are not a number', () => {
        expect(()=>sum('a', 'b')).toThrow('a is not a number');
    });
 })