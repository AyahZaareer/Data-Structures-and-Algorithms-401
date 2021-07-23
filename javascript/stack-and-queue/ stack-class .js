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
    // maxValue(num) {
    //     let arr = [];
    //     let newNode = new Node(num);
    //     if (this.top === null) {
    //         return "stack is empty";
    //     }
    //     while (this.top) {
    //         if (this.top.value > newNode.value) {
    //             // console.log(newNode.value);
    //             arr.push(this.top.value);
    //             console.log('arr max', arr);
    //             this.top = newNode.value;
    //         } else {
    //             this.top = newNode.value;
    //         }
    //     }
    //     return arr;
    // }


}

// class Max {
//     constructor() {
//         this.stack1 = new Stack();
//         this.stackMax = new Stack();
//     }
//     max(value) {
//         let numMax = value;
//         if (!this.stackMax.isEmpty() && numMax < this.stackMax.peek()) {
//             numMax = this.stackMax.peek();
//         }
//         this.stack1.push(value);
//         this.stackMax.push(numMax);
//         this.stack1.pop();
//         this.stackMax.pop();

//         return this.stackMax.peek();


//     }

// }



module.exports = Stack;

