class Stack {
  constructor(count = 0, storage = {}) {
    this.count = count;
    this.storage = storage;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count-1];
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('push done: ' ,myStack);
console.log('len check: ', myStack.size());
console.log('peek: ', myStack.peek());
console.log('poping 1st: ', myStack.pop());
console.log('pop done 1st: ', myStack);
console.log('poping 2nd: ', myStack.pop());
console.log('pop done 2nd: ', myStack);
