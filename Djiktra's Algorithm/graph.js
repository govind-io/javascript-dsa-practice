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

class Graph {
  constructor() {
    this.values = {};
    this.shortestDistances = {};
  }

  values;
  shortestDistances;

  addVertex(val) {
    this.values[val] = {};
  }

  //assuming non directed edge
  addEdge(v1, v2, d = 1) {
    let edgesV1 = this.values[v1];
    let edgesV2 = this.values[v2];

    if (!edgesV1 || !edgesV2) return false;

    this.values[v1][v2] = d;
    this.values[v2][v1] = d;
  }

  removeEdge(v1, v2) {
    const e1 = this.values[v1];
    const e2 = this.values[v2];

    if (!e1 || !e2) return false;

    delete this.values[v1][v2];
    delete this.values[v2][v1];

    return true;
  }

  removeVertex(v) {
    if (!this.values[v]) return false;

    Object.keys(this.values).forEach((tempV) => {
      this.removeEdge(tempV, v);
    });

    return true;
  }

  bfs(start = Object.keys(this.values)[0]) {
    const q = [];
    const visited = [];
    q.push(start);

    while (q.length) {
      const pop = q.shift();
      if (!visited.includes(pop)) {
        visited.push(pop);
        q.push(...Object.keys(this.values[pop]));
      }
    }

    return visited;
  }

  dfs(start = Object.keys(this.values)[0]) {
    const callStack = [];
    const visited = [];

    callStack.push(start);

    while (callStack.length) {
      const pop = callStack.pop();
      if (!visited.includes(pop)) {
        visited.push(pop);
        callStack.push(...Object.keys(this.values[pop]));
      }
    }

    return visited;
  }

  dfsRecur(start = Object.keys(this.values)[0], visited = []) {
    if (!visited.includes(start)) {
      visited.push(start);
      Object.keys(this.values[start]).forEach((v) => {
        if (!visited.includes(v)) {
          this.dfsRecur(v, visited);
        }
      });
    }

    return visited;
  }

  shortestDistancesToPath(v1, v2) {
    const shortestPath = this.shortestDistances[v1].path;
    let currPoint = v2;
    const path = [];

    while (currPoint) {
      path.push(currPoint);
      currPoint = shortestPath[currPoint];
    }

    path.reverse();

    return { path, distance: this.shortestDistances[v1].distances[v2] };
  }

  findShortestDistance(v1, v2) {
    if (this.shortestDistances[v1]) {
      return this.shortestDistancesToPath(v1, v2);
    }

    const shortestDistancesFromV1 = {};
    const previous = {};

    const q = new PriorityQueue();

    const allVertexes = this.bfs(v1);

    allVertexes.forEach((v) => {
      if (v === v1) {
        shortestDistancesFromV1[v] = 0;
        q.enqueue({ priority: 0, v });
      } else {
        shortestDistancesFromV1[v] = Infinity;
        q.enqueue({ priority: Infinity, v });
      }

      previous[v] = null;
    });

    while (q.length) {
      const pop = q.dequeue().v;

      const child = Object.keys(this.values[pop]);

      child.forEach((ch) => {
        const chCurrentDistanceFromV1 =
          this.values[ch][pop] + shortestDistancesFromV1[pop];

        if (chCurrentDistanceFromV1 < shortestDistancesFromV1[ch]) {
          q.enqueue({ v: ch, priority: chCurrentDistanceFromV1 });
          previous[ch] = pop;
          shortestDistancesFromV1[ch] = chCurrentDistanceFromV1;
        }
      });
    }

    this.shortestDistances[v1] = {
      distances: shortestDistancesFromV1,
      path: previous,
    };

    return this.shortestDistancesToPath(v1, v2);
  }
}

const newGraph = new Graph();

newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B", 4);
newGraph.addEdge("A", "C", 2);
newGraph.addEdge("B", "E", 3);
newGraph.addEdge("C", "D", 2);
newGraph.addEdge("C", "F", 4);
newGraph.addEdge("D", "E", 3);
newGraph.addEdge("D", "F", 1);
newGraph.addEdge("E", "F", 1);

console.log(newGraph.findShortestDistance("A", "E"));
