'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index').LinkedLilst;
const zipLists = require('../index').zipLists;
const mid = require('../index').mid;



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
  // it('return midlle', () => {
  //   const ll = new LinkedLilst();//creat new ll
  //   ll.insert('e');
  //   ll.insert('d');
  //   ll.insert('c');
  //   ll.insert('b');
  //   ll.insert('a');

  //   expect(mid(ll)).toEqual('b');

  //   // expect(ll.includes('d')).toBeTruthy();

  // });
});


describe('append to the end of the list ', () => {
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


describe('Add before ', () => {
  it('Add new node before specific value', () => {

    const ll = new LinkedLilst();//creat new ll
    ll.append('a');//insert node 'a' to ll
    ll.append('b');
    ll.append('c');

    let value = 'b';
    let newValue = 'e';

    ll.insertBefore(value, newValue);
    // expect(ll.head.next.value).toEqual('e');
    expect(ll.head.next.next.value).toEqual('b');

  });
});

describe('Add After ', () => {
  it('Add new node after specific value', () => {

    const ll = new LinkedLilst();//creat new ll
    ll.append('a');//insert node 'a' to ll
    ll.append('b');
    ll.append('c');

    let value = 'b';
    let newValue = 'e';

    ll.insertAfter(value, newValue);
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('e');

  });
});

describe('kth from end ', () => {
  it('return the value of kth', () => {

    const ll = new LinkedLilst();//creat new ll
    // ll.append('a');//insert node 'a' to ll
    // ll.append('b');
    // ll.append('c');

    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.kthFromEnd(0)).toEqual('c');
    expect(ll.kthFromEnd(1)).toEqual('b');
    expect(ll.kthFromEnd(2)).toEqual('a');
    // expect(ll.kthFromEnd(7)).toEqual('Exception');
    // expect(ll.kthFromEnd(0)).toEqual('d');


  });
});

describe('zip Lists ', () => {
  it('return the list of zip', () => {

    const list1 = new LinkedLilst();//creat new ll
    // ll.append('a');//insert node 'a' to ll
    // ll.append('b');
    // ll.append('c');

    list1.insert('c');
    list1.insert('b');
    list1.insert('a');


    let list2 = new LinkedLilst();
    list2.insert('3');
    list2.insert('2');
    list2.insert('1')



    expect(zipLists(list1, list2)).toEqual('{a}->{1}->{b}->{2}->{c}->{3}->Null');
    // expect(ll.kthFromEnd(0)).toEqual('d');


  });
});





