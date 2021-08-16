const intersection = require('./hashmap-tree-intersection');
const BinarayTree = require('../Trees/tree').BinaryTree;
const Node = require('./hash').Node;


describe('tree intersection ', () => {
    it('return correct result', () => {
        const tree1 = new BinarayTree();
        tree1.root = new Node(100);
        tree1.root.left = new Node(140);
        tree1.root.left.left = new Node(140);
        tree1.root.left.right = new Node(105);
        tree1.root.left.right.left = new Node(200);
        tree1.root.left.right.right = new Node(200);

        tree1.root.right = new Node(160);
        tree1.root.right.left = new Node(300);
        tree1.root.right.right = new Node(50);
        tree1.root.right.right.left = new Node(60);
        tree1.root.right.right.right = new Node(350);


        const tree2 = new BinarayTree();

        tree2.root = new Node(100);
        tree2.root.left = new Node(230);
        tree2.root.left.left = new Node(210);
        tree2.root.left.right = new Node(105);
        tree2.root.left.right.left = new Node(220);
        tree2.root.left.right.right = new Node(200);

        tree2.root.right = new Node(160);
        tree2.root.right.left = new Node(300);
        tree2.root.right.right = new Node(50);
        tree2.root.right.right.left = new Node(70);
        tree2.root.right.right.right = new Node(350);

        const testArr = intersection(tree1, tree2);
        console.log('common', testArr);


        expect(testArr).toEqual([100, 105, 160, 300, 50, 350]);
    })
})