
let Node = require('./node');

class Queue {
    constructor() {
        this.back = null;
        this.front = null;
    }
    enqueue(value) {
        let node = new Node(value);
        if (this.front) {
            this.back.next = node;//we add to the end(tail)
            this.back = node;
        } else {

            this.front = node;
            this.back = node;
        }

    }
    dequeue() {
        if (this.front) {
            let newFront = this.front.value;
            this.front = this.front.next;//when we remove from the old front we need to let old front.next is a new front
            return newFront;
        }

    }
    peek() {
        if (this.front) {
            return this.front.value;
        } else {
            return "this is empty queue"
        }

    }
    isEmpty() {
        if (this.front) {
            return false;
        } else {
            return true;
        }

    }

}
module.exports = Queue;