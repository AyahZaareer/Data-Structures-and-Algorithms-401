const Stack = require('../ stack-class ');
const Queue = require('../queue');
let stack;
let queue;
describe('Stack', () => {

    beforeEach(() => {
        stack = new Stack();
        queue = new Queue();
    });
    it('create an instance of stack', () => {
        expect(stack instanceof Stack).toBeTruthy();//check if prototype stack of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 


    });
})

describe('peek', () => {
    it('return null on empty Stack', () => {
        expect(stack.peek()).toBe('this is empty');
    })
    it('return last item we add', () => {
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
        stack.pop();
        stack.pop();

    })
})

describe('push', () => {
    it('add item to the top', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        // console.log('max', stack.maxValue(5));

        expect(stack.top.value).toEqual(3);//the top is last element we add
        stack.pop();
        stack.pop();
        stack.pop();


    })
})

describe('pop', () => {
    it('remove last item to the top', () => {
        expect(stack.peek()).toBe('this is empty');
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);//we remove the last element we add
        stack.pop();
        stack.pop();


    })
})


describe('is empty', () => {
    it('check if the top = null', () => {
        expect(stack.peek()).toBe('this is empty');
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);//we remove the last element we add
        expect(stack.pop()).toEqual(2);


        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toBe('null');

        expect(stack.peek()).toBe('this is empty');
        expect(stack.isEmpty()).toBeTruthy();

    })
})

///////////////////////////////////////////////////

describe('Queue test', () => {
    it('enqueue:', () => {
        queue.enqueue(4);
        expect(queue.front.value).toEqual(4);
    })
    it('dequeue :', () => {
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.front.value).toEqual(4)
        expect(queue.dequeue()).toEqual(4)
        expect(queue.peek()).toEqual(4)

    })
    it('peek queue :', () => {
        queue.enqueue(6);
        queue.enqueue(7);

        expect(queue.peek()).toEqual(4)
    })
    it('isEmpty queue :', () => {
        queue.dequeue()
        queue.dequeue()
        queue.dequeue()
        queue.dequeue()


        expect(queue.peek()).toBe('this is empty queue');
    })
})

