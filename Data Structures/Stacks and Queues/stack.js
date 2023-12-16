class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  next;
}

//lifo principle, last in first out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    this.length += 1;

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return this;
    }

    newNode.next = this.first;
    this.first = newNode;

    return this;
  }

  pop() {
    if (!this.first) return null;
    const currentFirst = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = currentFirst.next;

    this.length -= 1;

    currentFirst.next = null;

    return currentFirst;
  }

  first;
  last;
  length;
}

const stack = new Stack();

stack.push("govind");
stack.push("sharma");
stack.push("hello");
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log({ stack });
