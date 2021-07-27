const Node = require('../FizzBuzz').Node;
const Tree = require('../FizzBuzz').K_aryTree;


describe('test node in Fizz-Buzz', () => {
    it('create new node', () => {
        let test = new Node(1);
        expect(test.value).toEqual(1);
        expect(test.addNode).toEqual([]);
        expect(test.addNode.length).toEqual(0);


    })

    it('add to addNode obj', () => {
        let test = new Node(1);
        test.addNode.push(4)
        expect(test.value).toEqual(1);
        expect(test.addNode).toEqual([4]);
        expect(test.addNode.length).toEqual(1);


    })
    it('new tree', () => {
        let tree = new Tree();

        expect(tree.root).toEqual(null);


    })
    // it('add node to tree', () => {
    //     let tree = new Tree();
    //     let node1 = new Node(3);


    //     let node2 = new Node(6);
    //     let node3 = new Node(15);
    //     let node4 = new Node(20);
    //     // let node5 = new Node(12);
    //     // let node6 = new Node(24);
    //     // let node7 = new Node(19);
    //     // let node8 = new Node(31);

    //     node1.addNode.push(node2);
    //     node1.addNode.push(node3);
    //     node1.addNode.push(node4);
    //     tree.root = node1;


    //     console.log('tree.fb', tree.breadthFirst());
    //     expect(tree.fizzBuzz().breadthFirst()).toEqual(['Fizz', 'Fizz', 'FizzBuzz', 'Buzz']);

    // })
})