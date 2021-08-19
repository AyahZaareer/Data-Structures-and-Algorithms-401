const BinaryTree = require('../tree').BinaryTree;
const Node = require('../node');
const BinaryTreeSearch = require('../tree').BinaryTreeSearch;

describe('binary tree test', () => {
    let tree;
    beforeAll(() => {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        four.left = eight;
        three.left = six;
        three.right = seven;

        tree = new BinaryTree(one);

    })
    //root left right
    it('per order', () => {
        let result = [1, 2, 4, 8, 5, 3, 6, 7];
        expect(tree.perOrder()).toEqual(result);
    })
    //left root right
    it('in order', () => {
        let result = [8, 4, 2, 5, 1, 6, 3, 7];
        expect(tree.inOrder()).toEqual(result);
    })
    //left right root
    it('post order', () => {
        let result = [8, 4, 5, 2, 6, 7, 3, 1];
        expect(tree.postOrder()).toEqual(result);

    })
    it('return the max value for binary tree', () => {
        expect(tree.maxValue()).toEqual(8);

    })
    it('breadth first', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(tree.breadthFirst()).toEqual(test);
    })



})

describe('Binary Tree Search', () => {
    it('if instance is null', () => {
        let test = new BinaryTreeSearch();
        expect(test.root).toBeNull();

    })
    it('test if add the node in correct location', () => {
        let test2 = new BinaryTreeSearch();
        test2.add(5);
        test2.add(1);
        test2.add(6);
        test2.add(7);
        test2.add(3);
        test2.add(4);
        test2.add(2);
        expect(test2.root.val).toEqual(5);
        console.log('bst', test2);

    })
    it('if the value exict in tree', () => {
        let test2 = new BinaryTreeSearch();
        test2.add(5);
        test2.add(1);
        test2.add(6);
        test2.add(7);
        test2.add(3);
        test2.add(4);
        test2.add(2);
        expect(test2.contains(9)).toEqual(false);
        expect(test2.contains(1)).toEqual(true);



    })
})