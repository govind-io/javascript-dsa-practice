class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }

  value;
  priority;
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  values;

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getChildIndex(index) {
    return { left: index * 2 + 1, right: index * 2 + 2 };
  }

  bubbleUpLastElem() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex].priority > this.values[childIndex].priority
    ) {
      const temp = this.values[childIndex];
      this.values[childIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  bubbleDownFirstElement() {
    let parentIndex = 0;
    let { left, right } = this.getChildIndex(parentIndex);

    const notParentSmallest = () => {
      if (left < this.values.length && right < this.values.length) {
        return (
          this.values[parentIndex].priority > this.values[left].priority ||
          this.values[parentIndex].priority > this.values[right].priority
        );
      }

      return false;
    };

    const getSmallestIndex = () =>
      this.values[left].priority < this.values[right].priority ? left : right;

    while (parentIndex < this.values.length && notParentSmallest()) {
      const smallestIndex = getSmallestIndex();
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[smallestIndex];
      this.values[smallestIndex] = temp;

      parentIndex = smallestIndex;

      const childIndexes = this.getChildIndex(parentIndex);

      left = childIndexes.left;
      right = childIndexes.right;
    }
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUpLastElem();
  }

  dequeue() {
    const removedMin = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.bubbleDownFirstElement();
    return removedMin;
  }
}

const PQ = new PriorityQueue();

const tasks = [
  { value: "Complete MERN stack project", priority: 3 },
  { value: "Learn Golang", priority: 5 },
  { value: "Write unit tests with Jest", priority: 2 },
  { value: "Study physics concepts", priority: 7 },
  { value: "Implement Cypress end-to-end testing", priority: 4 },
  { value: "Read about business strategies", priority: 6 },
  { value: "Code review for social media app", priority: 1 },
  { value: "Follow technology news", priority: 8 },
  { value: "Discuss politics with colleagues", priority: 9 },
  { value: "Practice math problems", priority: 10 },
];

tasks.forEach((i) => PQ.enqueue(i.value, i.priority));

for (let i = 0; i < 10; i++) {
  console.log(PQ.dequeue());
}
