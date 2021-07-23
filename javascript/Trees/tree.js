'use strict';
const Node = require('./node');
class BinaryTree {
    constructor(root) {
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