'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });

describe('Linked List', () => {
  it('Should Instantiate', () => {
    const ll = new LinkedLilst();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});


describe('insert ', () => {
  it('Should insert to empty list', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.insert('a');//insert node 'a' to ll
    expect(ll.head.value).toEqual('a');//the head is a node
    expect(ll.head.next).toBeNull();
  });
  it('Should add list with values', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.insert('a');//insert node 'a' to ll
    ll.insert('b');//add to the begging
    expect(ll.head.value).toEqual('b');//the head is a node we add (b)
    expect(ll.head.next.value).toEqual('a');
  });
  it('return true if find the value', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.insert('a');//insert node 'a' to ll
    ll.insert('b');//add to the begging

    expect(ll.includes('b')).toBeTruthy();

    // expect(ll.includes('d')).toBeTruthy();

  });
  it('return all values', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.insert('b');
    ll.insert('a');

    expect(ll.toString()).toEqual('{a}->{b}->Null');

    // expect(ll.includes('d')).toBeTruthy();

  });
});


xdescribe('append to the end of the list ', () => {
  it('Should append to empty list', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.append('a');//insert node 'a' to ll
    expect(ll.head.value).toEqual('a');//the head is a node
    ll.append('b');
    expect(ll.head.value).toEqual('a');//because I add to the end that is mean the head it is a same value
  });
  it('Should append to  list with values', () => {
    const ll = new LinkedLilst();//creat new ll
    ll.append('a');//insert node 'a' to ll
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');//the head is a node we add (b)
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
  });
});


