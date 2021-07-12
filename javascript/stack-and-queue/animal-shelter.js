const Queue = require('./queue');

class AnimalShelter {
    constructor() {
        this.dog = new Queue();
        this.cat = new Queue();
    }

    enqueue(animal) {
        animal = animal.toLowerCase();
        if (animal) {
            if (animal === 'cat') {
                this.cat.enqueue(animal);
            } else if (animal === 'dog') {
                this.dog.enqueue(animal);
            } else {
                return "dog and cat just";
            }

        }
    }

    dequeue(pref) {
        if (pref) {
            pref = pref.toLowerCase();
            if (pref === 'cat') {
                return this.cat.dequeue(pref);
            } else if (pref === 'dog') {
                return this.dog.dequeue(pref);
            } else {
                return null;
            }
        }
    }
}

module.exports = AnimalShelter;