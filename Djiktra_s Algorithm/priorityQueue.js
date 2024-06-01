class PriorityQueue {
  constructor() {
    this.values = [];
    this.length = 0;
  }

  values;
  length;

  bubbleUpLastElement() {
    let childIndex = this.length - 1;

    while (
      this.values[this.getParent(childIndex)]?.priority >
      this.values[childIndex].priority
    ) {
      let currParentIndex = this.getParent(childIndex);
      const childValue = this.values[childIndex];
      const parentValue = this.values[currParentIndex];

      this.values[currParentIndex] = childValue;
      this.values[childIndex] = parentValue;

      childIndex = currParentIndex;
    }
  }

  bubbleDownFirstElement() {
    let parentIndex = 0;

    const isParentNotMinimum = (indx) => {
      const parentValue = this.values[indx];

      const { left, right } = this.getChild(indx);

      return (
        parentValue?.priority > this.values[left]?.priority ||
        parentValue?.priority > this.values[right]?.priority
      );
    };

    const getMinimumChild = (indx) => {
      const { left, right } = this.getChild(indx);

      if (this.values[right].priority < this.values[left].priority) {
        return right;
      } else {
        return left;
      }
    };

    while (isParentNotMinimum(parentIndex)) {
      const minChildIndex = getMinimumChild(parentIndex);

      if (minChildIndex >= this.length) return;

      const parentValue = this.values[parentIndex];
      const minChildValue = this.values[minChildIndex];

      this.values[minChildIndex] = parentValue;
      this.values[parentIndex] = minChildValue;

      parentIndex = minChildIndex;
    }
  }

  getParent(child) {
    return Math.floor((child - 1) / 2);
  }

  getChild(parent) {
    return {
      left: parent * 2 + 1,
      right: parent * 2 + 2,
    };
  }

  enqueue(val) {
    this.values.push(val);
    this.length += 1;
    this.bubbleUpLastElement();
  }

  dequeue() {
    const returnValue = this.values[0];
    this.values[0] = this.values[this.length - 1];
    this.values.pop();
    this.length -= 1;
    this.bubbleDownFirstElement();

    return returnValue;
  }
}

const PQ = new PriorityQueue();

for (let i = 100; i > 0; i--) {
  PQ.enqueue({ priority: i, value: `${i}` });
  console.log(PQ.values);
}

const len = PQ.length;

console.log("-------------");

for (let i = 0; i < len; i++) {
  console.log(PQ.dequeue());
}
