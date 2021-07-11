'use strict';
const PseudoQueue = require('../pseudo');

describe('PseudoQueue', () => {
    it('test 1', () => {
        let test = new PseudoQueue();
        test.enqueue(1);
        test.enqueue(2);

        test.enqueue(3);
        expect(test.stack1.top.value).toEqual(3);


    })
    it('dequeue test', () => {
        let test = new PseudoQueue();
        test.enqueue(1);
        test.enqueue(2);

        test.enqueue(3);
        test.dequeue();
        expect(test.stack2.top.value.value).toEqual(2)

    })
    it('dequeue for empty queue', () => {
        let test = new PseudoQueue();
        test.enqueue(1);
        test.enqueue(2);

        test.enqueue(3);

        test.dequeue();
        test.dequeue();
        test.dequeue();

        expect(test.dequeue()).toEqual('stack1 and stack2 is empty');



    })
})