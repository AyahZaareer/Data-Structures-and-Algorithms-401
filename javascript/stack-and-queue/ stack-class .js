const Node = require('./node');
class Stack {
    constructor() {
        this.top = null;

    }
    peek() {
        if (this.top) {
            return this.top.value;

        } else {
            return "this is empty";
        }

    }
    push(ele) {
        let node = new Node(ele);
        if (this.isEmpty()) {
            this.top = node;
        } else {

            node.next = this.top;
            this.top = node;

        }
    }
    pop() {
        if (!this.isEmpty()) {
            let value = this.top.value;
            this.top = this.top.next;//when we wont remove the top we shuld move the top to the next
            return value;
        } else {
            return "null"
        }

    }
    isEmpty() {
        if (this.top) {
            return false;
        }
        return true;
    }


}

module.exports = Stack;