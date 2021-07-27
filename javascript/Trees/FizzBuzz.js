// let Node = require('./node');
class Node {
    constructor(value) {
        this.value = value;
        this.addNode = [];
    }
}
class K_aryTree {
    constructor() {
        this.root = null;
    }
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
            // console.log('result', result);
        })
        return result;
    }
    fizzBuzz() {
        let Tree = this;
        console.log('treeeeeeeeeeeeeee', Tree);
        let trevers = (node) => {
            if (node.value % 3 === 0 && node.val % 5 === 0) {
                node.val = 'FizzBuzz';
            } else if (node.value % 3 === 0) {
                node.val = 'Fizz';
            } else if (node.value % 5 === 0) {
                node.val = 'Buzz';
            } else {
                node.val = `${node.value}`;
            }
            for (let i = 0; i < node.addNode; i++) {
                trevers(node.addNode[i]);
            }

        }
        trevers(Tree.root);
        return Tree;
    }
}

module.exports = { K_aryTree, Node };