const repeatedWords = require('./repetedWords');
// const repeadetWord=require('./repetedWords');

const test1='Once upon a time, there was a brave princess who';
const test2='Hello , I am Ayah';
const test3='It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'

describe('Repated Words',()=>{
    it('return the repated words',()=>{
        expect(repeatedWords(test1)).toEqual('a');
        expect(repeatedWords(test3)).toEqual('summer');
    })
    it('return "there no duplicate" if no duplicate',()=>{
        
        expect(repeatedWords(test2)).toEqual('there no duplicate');
    })
})