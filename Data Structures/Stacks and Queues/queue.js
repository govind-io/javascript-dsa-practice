class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  value;
  next;
}

class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.first) return null;

    this.length -= 1;

    if (this.first === this.last) {
      this.last = null;
    }

    const currentFirst = this.first;

    this.first = currentFirst.next;

    currentFirst.next = null;

    return currentFirst.value;
  }

  length;
  first;
  last;
}

module.exports = { Queue };
