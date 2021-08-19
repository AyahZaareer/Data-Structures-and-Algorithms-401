const LinkedList = require('../linked-list/index').LinkedLilst;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     // perpend(value) {
//     //     const node = new Node(value);
//     //     if (!this.head) {
//     //         this.head = node;
//     //     } else {
//     //         node.next = this.head;
//     //         this.head = node;
//     //     }
//     // }

//    
// }

class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key) {
        const sumCkarCode = key.split('').reduce((acc, val) => {
            return acc * val.charCodeAt(0);
        }, 0);

        return (sumCkarCode * 19) % this.size;

    }

    add(key, value) {
        const hash = this.hash(key);
        console.log('key', hash);
        if (!this.storage[hash]) {
            this.storage[hash] = new LinkedList();
        }
        this.storage[hash].append({ [key]: value });

    }

    contains(key) {
        const index = this.hash(key);
        const check = this.storage[index];
        if (!check) {
            return false;
        } else {
            return true
        }

    }

    get(key) {
        const hash = this.hash(key);
        if (this.contains(key)) {
            if (this.storage[hash].head) {
                let current = this.storage[hash].head;
                if (Object.keys(current.value)[0] === key) return current.value[key];
                while (current.next) {
                    current = current.next;
                    if (Object.keys(current.value)[0] === key) {
                        return current.value[key];
                    }
                    // current = current.next;
                }
            }

        }
        return null;

    }
}


// const hashmap = new Hashmap(500);
// hashmap.add('name', 'Ayah');
// hashmap.add('one', 'test');
// hashmap.add('neo', 'test1');
// let check = hashmap.contains('name');
// console.log(check);

// console.table(hashmap.storage);
// console.table(hashmap.storage[423].head);

module.exports = { Hashmap, Node }