const Hashmap = require('./hash').Hashmap;

describe('HashTable test', () => {
    it('adding a key/value', () => {
        const hashmap = new Hashmap(500);
        hashmap.add('name', 'Ayah');
        // hashmap.add('one', 'test');
        // hashmap.add('neo', 'test1');
        expect(hashmap.storage[hashmap.hash('name')]).toBeDefined();

    })

    it('return the value ', () => {
        const hashmap = new Hashmap(500);
        hashmap.add('name', 'Ayah');
        hashmap.add('one', 'test');
        // hashmap.add('neo', 'test1');
        expect(hashmap.get('name')).toEqual('Ayah');
        expect(hashmap.get('one')).toEqual('test');


    })

    it('return null for the key is not exsit in the table ', () => {
        const hashmap = new Hashmap(500);
        hashmap.add('name', 'Ayah');
        hashmap.add('one', 'test');
        // hashmap.add('neo', 'test1');
        expect(hashmap.get('age')).toBeNull();



    })


    it('Successfully handle a collision within the hashtable', () => {
        const hashmap = new Hashmap(500);

        hashmap.add('one', 'test');
        hashmap.add('neo', 'test1');
        expect(hashmap.contains('one')).toBeDefined();
        expect(hashmap.contains('neo')).toBeDefined();



    })


    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        const hashmap = new Hashmap(500);

        hashmap.add('one', 'test');
        hashmap.add('neo', 'test1');
        expect(hashmap.get('one')).toEqual('test');
        expect(hashmap.get('neo')).toEqual('test1');



    })

    it('Successfully hash a key to an in-range value', () => {
        const hashmap = new Hashmap(500);
        let index=hashmap.hash('test');
        expect(index>=0).toEqual(true);
        expect(index<=500).toEqual(true);


        // hashmap.add('one', 'test');
        // hashmap.add('neo', 'test1');
        // expect(hashmap.get('one')).toEqual('test');
        // expect(hashmap.get('neo')).toEqual('test1');



    })
})