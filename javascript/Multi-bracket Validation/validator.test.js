
const validator = require('./bracket-balance');

describe('bracket-balance test', () => {
    it('correct string', () => {
        let test = '{}';
        result = validator(test);


        expect(result).toBeTruthy();


    })
    it('wrong string', () => {
        let test = '[({}]';
        result = validator(test);


        expect(result).toBeFalsy();


    })
    it('wrong string 2', () => {
        let test = '[({)}]';
        result = validator(test);


        expect(result).toBeFalsy();


    })
})