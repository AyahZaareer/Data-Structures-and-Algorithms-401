'use strict';

const Node = require('../node');//model for the node

describe('Node Module', () => {
	it('create an instance with value and next', () => {
		const value = 'some value';
		const node = new Node(value);
		expect(node).toBeInstanceOf(Node);//check if node instance in Node class
		expect(node.value).toEqual(value);
		expect(node.next).toBeNull();
	})


});


