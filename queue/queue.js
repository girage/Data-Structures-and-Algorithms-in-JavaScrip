class Queue {
  constructor(collection = []) {
    this.collection = collection;
  }

  print() {
    console.log(this.collection);
  };

  enqueue(element) {
    this.collection.push(element);
  };

  dequeue() {
    return this.collection.shift();
  };

  front() {
    return this.collection[0];
  };

  size() {
    return this.collection.length;
  };

  isEmpty() {
    return this.size === 0;
  };
}

let q = new Queue;

q.enqueue('test');
q.enqueue('test2');
q.print();
console.log('q.dequeue: ', q.dequeue());
q.print();