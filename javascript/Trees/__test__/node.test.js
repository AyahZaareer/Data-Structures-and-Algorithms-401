const Node = require('../node');
describe('node test in tree', () => {
    it('create node', () => {
        const node = new Node();
        expect(node instanceof Node).toBeTruthy();
    })
    it('create a node with true propertise', () => {
        const value = 'ayah';
        const node = new Node(value);
        expect(node.val).toEqual(value);
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    })


})