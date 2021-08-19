const HashTable = require('./hash').Hashmap;
const leftJoin = require('./Left-Joins ');

describe('Left-Join test', () => {
    it('correct left join', () => {
        let table1 = new HashTable(20);
        let table2 = new HashTable(20);

        table1.add('fond', 'enamour');
        table1.add('wrath', 'anger');
        table1.add('outift', 'grab');
        table1.add('fguide', 'usher');

        table2.add('fond', 'averse');
        table2.add('wrath', 'delight');
        table2.add('flow', 'jam');
        table2.add('fguide', 'follow');


        let LJ = leftJoin(table1, table2);
        expect(LJ).toEqual([
            ['fond', 'enamour', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['outift', 'grab', null],
            ['fguide', 'usher', 'follow'],


        ])


    })
})