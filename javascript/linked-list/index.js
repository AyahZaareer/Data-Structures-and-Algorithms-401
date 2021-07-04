'use strict';

const Node = require('./node');

class LinkedList {
	constructor() {
		this.head = null;
	}
	insert(value) {
		// const node = new Node(value);//create new node
		// node.next = this.head;//the next for new node=the head form previus node
		// this.head = node;//the new head = new node

		// this.head = new Node(value, this.head);

		const node = new Node(value);
		if (!this.head) {
			this.head = node;
		}
		else {
			node.next = this.head;//the head for new node=the next for prvius node
			this.head = node;

		}
	}
	includes(value) {
		let nodeToTeste = this.head;
		while (nodeToTeste.value !== value) {
			nodeToTeste = nodeToTeste.next;
			if (nodeToTeste === null) {
				return false;
			}
		}
		return true;


	}

	toString() {
		let node = this.head;
		let result = '';
		while (node) {
			result += `{${node.value}}->`;
			node = node.next;
			if (!node) {
				result += 'Null';
			}
		}
		return result;
	}
	append(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
		} else {
			let currentNode = this.head;//let currentNode in the head of ll
			while (currentNode.next) {//check if the next have value not null if true let the value for the seocand node is the currentNode then if we check the next.value for the next node and found it null we stop the while 
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
	}
	insertBefore(value, newValue) {
		let newNode = new Node(newValue);
		let current = this.head;//whecth I am wont to add new node before it
		if (current.value === value) {
			newNode.next = this.head;//when I found the spcefice node let the next for new node =the head for current node
			this.head = newNode;//after found the spciface node let the head=newNode

		} else {
			while (current) {
				if (current.next.value === value) {
					newNode.next = current.next;
					current.next = newNode;
					return;
				} else {
					current = current.next;
				}
			}


		}
	}
	insertAfter(value, newValue) {
		let newNode = new Node(newValue);
		let current = this.head;
		while (current) {
			if (current.value === value) {
				newNode.next = current.value;
				current.next = newNode;
				return;
			} else {
				current = current.next;

			}
		}

	}

}


/////////////////////////////////////
//this true to check the value of head
/////////////////////////////////////

// includes(value) {
// 	let check = false
// 	if (!this.head) {
// 		check = false;
// 		return check;
// 	} else {
// 		let node = this.head;
// 		while (node.value === value) {
// 			check = true
// 			return check;
// 		}
// 		node = node.next;
// 		return check;
// 	}


// }

module.exports = LinkedList;


