const AnimalShelter = require('../animal-shelter');


describe('Animal Shelter test', () => {
    it('add cat', () => {
        let shelter = new AnimalShelter();
        let animal = 'cat';
        shelter.enqueue(animal);
        expect(shelter.cat.front.value).toEqual('cat');

    })
    it('add dog', () => {
        let shelter = new AnimalShelter();
        let animal = 'dog';

        shelter.enqueue(animal);
        expect(shelter.dog.front.value).toEqual('dog');

    })
    it('dequeue dog', () => {
        let shelter = new AnimalShelter();
        let animal = 'dog';

        shelter.enqueue(animal);
        expect(shelter.dog.dequeue()).toEqual('dog');

    })
    it('add any thing expect cat and dog', () => {
        let shelter = new AnimalShelter();
        let animal = 'gog';

        shelter.enqueue(animal);
        expect(shelter.dog.front).toEqual(null);

    })

})