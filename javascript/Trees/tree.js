'use strict';
const Node = require('./node');
const Queue = require('../stack-and-queue/queue');
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    //root left right
    perOrder() {
        const array = [];
        const _traverse = (node) => {//( _ )it mean the function is privert
            array.push(node.val);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return array;

    }
    inOrder() {
        const array = [];
        const _traverse = (node) => {//( _ )it mean the function is privert

            if (node.left) _traverse(node.left);
            array.push(node.val);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return array;

    }
    postOrder() {
        const array = [];
        const _traverse = (node) => {//( _ )it mean the function is privert

            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            array.push(node.val);
        };
        _traverse(this.root);
        return array;

    }
    maxValue() {
        let max = this.root.val;
        let checkMax = (node) => {
            if (node.val > max) {
                max = node.val;
            } if (node.right) {
                checkMax(node.right);
            } if (node.left) {
                checkMax(node.left);
            }
        }
        checkMax(this.root);
        return max;
    }

    // breadthFirst() {
    //     if (this.root === null) {
    //         return "it's an empty";
    //     }
    //     let output = [];
    //     let queue = new Queue();
    //     queue.enqueue(this.root);
    //     // console.log('queue aaa', queue);
    //     while (queue.peek()) {
    //         console.log('queue aaa', queue.peek());
    //         let frontA = queue.dequeue();
    //         // console.log('front:----', frontA);
    //         output.push(frontA.val);
    //         if (frontA.left) queue.enqueue(frontA.left);


    //         if (frontA.right) queue.enqueue(frontA.right);

    //     }
    //     return output;
    // }
    breadthFirst() {
        if (this.root === null) {
            return null;
        }
        let result = [];
        let traverse = (node, cb) => {
            let current = [node];
            while (current.length) {
                let next = [];
                current.forEach((val) => {
                    cb(val);
                    if (val.left) next.push(val.left);
                    if (val.right) next.push(val.right);
                });
                current = next;
            }
        };
        traverse(this.root, function (node) {
            result.push(node.val);
            console.log('result', result);
        })
        return result;
    }

    // fizzBuzz() {
    //     let Tree = this;
    //     console.log('treeeeeeeeeeeeeee', Tree);
    //     let trevers = (node) => {
    //         if (node.val % 3 === 0 && node.val % 5 === 0) {
    //             node.val = 'FizzBuzz';
    //         } else if (node.val % 3 === 0) {
    //             node.val = 'Fizz';
    //         } else if (node.val % 5 === 0) {
    //             node.val = 'Buzz';
    //         } else {
    //             node.val = `${node.val}`;
    //         }
    //         for (let i in node.addNode) {
    //             trevers(node.addNode[i]);
    //         }

    //     }
    //     trevers(Tree.root);
    //     return Tree;
    // }



}

class BinaryTreeSearch {
    constructor() {
        this.root = null;
    }
    add(value) {
        let node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let add = ((current, node) => {
                if (node.val < current.val) {
                    if (current.left === null) {
                        current.left = node;
                    }
                    else {
                        add(current.left, node);
                    }
                }
                else {
                    if (current.right === null) {
                        current.right = node;
                    } else {
                        add(current.right, node);
                    }
                }
            });
            add(this.root, node);

        }


    }
    contains(value) {
        if (value === this.root.val) {
            return true;
        } else {
            let check = ((checkValue, current) => {
                if (checkValue < current.val) {
                    if (current.left === null) {
                        return false;
                    }
                    else if (current.left.val === checkValue) {
                        return true;
                    } else {
                        return check(checkValue, current.left);
                    }


                } else {
                    if (current.right === null) {
                        return false;
                    }
                    else if (current.right === checkValue) {
                        return true;
                    }
                    else {
                        return check(checkValue, current.right);
                    }
                }
            });
            return check(value, this.root);
        }
    }
}




module.exports = { BinaryTree, BinaryTreeSearch };