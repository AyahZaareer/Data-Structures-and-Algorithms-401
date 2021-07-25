'use strict';

const Node = require('./node');

class LinkedLilst {
	constructor() {
		this.head = null;
		this.length = 0;
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
			node.next = this.head;//the head for previous  node=the next for new node
			this.head = node;//new head =new node  
			this.length++;
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
			this.length++;
		}
	}
	insertBefore(value, newValue) {
		let newNode = new Node(newValue);
		let current = this.head;//whecth I am wont to add new node before it
		if (current.value === value) {
			newNode.next = this.head;//when I found the spcefice node let the next for new node =the head for current node
			this.head = newNode;//after found the spciface node let the head=newNode
			this.length++;

		} else {
			while (current) {
				if (current.next.value === value) {
					newNode.next = current.next;
					current.next = newNode;
					this.length++;
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
				this.length++;
				return;
			} else {
				current = current.next;

			}
		}

	}
	kthFromEnd(k) {
		let node = this.head;
		let count = this.length;//becase we have like index 0 k 0->
		// console.log(count);
		// while (k === count) {
		// 	return node.value;
		// }
		// count--;
		// node = node.next;
		while (node) {
			if (count === k) {
				return node.value;
			}
			count--;
			node = node.next;
		}
		return "Exception";
	}







}
// function mid(li) {
// 	// let list = li.head;
// 	let middel = Math.ceil(li.length / 2);
// 	console.log('middel', middel);
// 	while (li) {
// 		if (li.length === middel) {
// 			return li.value;
// 		}
// 	}
// }


function zipLists(list1, list2) {

	let L1 = list1.head;
	let L2 = list2.head;
	let L3 = new LinkedLilst();

	if (L1 === null && L2 === null) {
		return L2;
	}
	if (L2 === null && L1 === null) {
		return L1;
	}
	while (L1 || L2) {
		if (L1 != null) {
			L3.append(L1.value);
			// console.log('L3 first app', L3);
			L1 = L1.next;
			console.log('L1', L1);
		}
		if (L2 !== null) {
			L3.append(L2.value);
			// console.log('L3 secand app', L3);
			L2 = L2.next;
			// console.log('L2', L2);
		}


	}
	return L3.toString();

};








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

module.exports = {
	zipLists,
	LinkedLilst,
	// mid,
};




