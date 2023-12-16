class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  values;

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getChildIndex(parentIndex) {
    return { left: parentIndex * 2 + 1, right: parentIndex * 2 + 2 };
  }

  bubbleUpLastElem() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (
      parentIndex >= 0 &&
      this.values[childIndex] > this.values[parentIndex]
    ) {
      const temp = this.values[childIndex];
      this.values[childIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      //updating the indexes
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUpLastElem();
  }

  bubbleDownFirstElem() {
    let parentIndex = 0;
    let { left: leftChildIndex, right: rightChildIndex } =
      this.getChildIndex(parentIndex);

    const notParentBiggest = () =>
      this.values[parentIndex] < this.values[leftChildIndex] ||
      this.values[parentIndex] < this.values[rightChildIndex];

    const getBiggestIndex = (left, right) =>
      this.values[left] > this.values[right] ? left : right;

    while (parentIndex <= this.values.length && notParentBiggest()) {
      const biggestChildIndex = getBiggestIndex(
        leftChildIndex,
        rightChildIndex
      );

      const temp = this.values[biggestChildIndex];
      this.values[biggestChildIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      parentIndex = biggestChildIndex;

      const { left, right } = this.getChildIndex(parentIndex);

      leftChildIndex = left;
      rightChildIndex = right;
    }
  }

  removeMax() {
    const removedMax = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.bubbleDownFirstElem();

    return removedMax;
  }
}

const temp = [1, 62, 6, 7, 5, 100];

const heap = new MaxBinaryHeap();

temp.forEach((i) => {
  heap.insert(i);
});

heap.removeMax();

console.log(heap.values);
