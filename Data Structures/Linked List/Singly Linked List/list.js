class Node {
  constructor(val) {
    this.value = val;
  }

  value;
  next;
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    let prevTail = this.head;

    if (!prevTail) return undefined;

    while (prevTail.next.next) {
      prevTail = prevTail.next;
    }

    prevTail.next = null;

    const removedTail = this.tail.value;

    this.tail = prevTail;

    this.length -= 1;

    return removedTail;
  }

  shift() {
    const currHead = this.head;
    if (!currHead) return undefined;

    if (currHead === this.tail) {
      this.tail = null;
    }

    this.head = currHead.next;

    this.length -= 1;

    return currHead;
  }

  unshift(val) {
    const currHead = this.head;

    if (!currHead) {
      this.push(val);
    } else {
      this.head = new Node(val);
      this.head.next = currHead;
      this.length += 1;
    }

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currItem = this.head;

    for (let i = 0; i < index; i++) {
      currItem = currItem.next;
    }

    return currItem;
  }

  set(index, val) {
    let current = this.get(index);

    if (!current) return false;

    current.value = val;

    return true;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const current = this.get(index - 1);

      if (!current) return false;

      const newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length += 1;
    }

    return true;
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return true;
    }

    const current = this.get(index - 1);

    if (!current || !current.next) return false;

    current.next = current.next.next;

    this.length -= 1;

    return true;
  }

  reverse() {
    let curr = this.head;

    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return this;
  }

  head;
  tail;
  length;
}

const linkedList = new singlyLinkedList();

linkedList.push("0");
linkedList.push("1");
linkedList.push("2");
linkedList.push("3");
linkedList.push("4");
linkedList.push("5");

linkedList.reverse();

let current = linkedList.head;
for (let i = 0; i < linkedList.length; i++) {
  console.log(current);
  current = current.next;
}
