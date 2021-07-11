const Stack = require('./ stack-class ');
const Node = require('./node');

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value) {
        this.stack1.push(value);
    }
    dequeue() {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            return "stack1 and stack2 is empty";
        }
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                let node = new Node(this.stack1.top.value);
                this.stack2.push(node);//we need to add the top.value from stac1k to anather stack becuase there are not delete just move
                this.stack1.pop();
            }
        }
        this.stack2.pop();
    }
    isEmpty() {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            return true;
        }
        return false;
    }
}

module.exports = PseudoQueue;

