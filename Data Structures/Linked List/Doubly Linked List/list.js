class Node {
  constructor(val, prev, next) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }

  value;
  next;
  prev;
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length += 1;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const remvovedTail = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = remvovedTail.prev;
      this.tail.next = null;
    }

    remvovedTail.prev = null;

    this.length -= 1;
    return remvovedTail;
  }

  shift() {
    if (!this.head) return undefined;

    const removeddHead = this.head;

    if (removeddHead === this.tail) {
      this.tail = null;
    }

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = removeddHead.next;
      this.head.prev = null;
    }

    this.length -= 1;

    removeddHead.next = null;

    return removeddHead;
  }

  unshift(val) {
    const currentHead = this.head;

    if (!currentHead) return this.push(val);

    const newHead = new Node(val);

    currentHead.prev = newHead;
    newHead.next = currentHead;

    this.head = newHead;

    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const loopFromRight = index <= this.length / 2;

    let item;

    if (loopFromRight) {
      item = this.head;
      for (let i = 0; i < index; i++) {
        item = item.next;
      }
    } else {
      item = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        item = item.prev;
      }
    }

    return item;
  }

  set(index, val) {
    const item = this.get(index);
    if (!item) return false;

    item.value = val;

    return true;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    }

    const item = this.get(index - 1);

    if (!item) return false;

    const newNode = new Node(val);

    newNode.prev = item;
    newNode.next = item.next;
    item.next.prev = newNode;
    item.next = newNode;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    const item = this.get(index);

    if (!item) return false;

    item.next.prev = item.prev;
    item.prev.next = item.next;

    item.next = null;
    item.prev = null;

    this.length -= 1;

    return true;
  }

  reverse() {
    let curr = this.head;

    while (curr) {
      const temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;

      curr = temp;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }

  head;
  tail;
  length;
}

const list = new DoublyLinkedList();

list.push("0");
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.reverse();

for (let i = 0; i < list.length; i++) {
  console.log(list.get(i).value);
}
