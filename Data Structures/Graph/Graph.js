class Graph {
  constructor() {
    this.edgesList = {};
  }

  edgesList;

  addVertex(val) {
    if (this.edgesList[val]) return;
    this.edgesList[val] = {};
    return true;
  }

  addEdge(v1, v2, weight) {
    if (!this.edgesList[v1] || !this.edgesList[v2] || !weight) return false;

    this.edgesList[v1][v2] = weight;
    this.edgesList[v2][v1] = weight;

    return true;
  }

  removeEdge(v1, v2) {
    if (!this.edgesList[v1] || !this.edgesList[v2]) return false;
    delete this.edgesList[v1][v2];
    delete this.edgesList[v2][v1];
    return true;
  }

  removeVertex(v) {
    const edges = this.edgesList[v];
    if (!edges) return false;

    Object.keys(edges).forEach((item) => {
      this.removeEdge(v, item);
    });

    delete this.edgesList[v];

    return true;
  }

  dfsRecur(v, visited = {}, result = []) {
    if (!v || !this.edgesList[v]) return;

    const neighbour = Object.keys(this.edgesList[v]);

    visited[v] = true;
    result.push(v);

    neighbour.forEach((item) => {
      if (!visited[item]) this.dfsRecur(item, visited, result);
    });

    return result;
  }

  dfsIter(v) {
    if (!v || !this.edgesList[v]) return;
    const visited = {};
    const result = [];

    const callStack = [v];

    while (callStack.length) {
      const item = callStack.pop();
      result.push(item);
      visited[item] = true;
      const neighbour = Object.keys(this.edgesList[item]);
      neighbour.forEach((nv) => {
        if (!visited[nv]) {
          callStack.push(nv);
        }
      });
    }
    return result;
  }

  bfs(start) {
    if (!start || !this.edgesList[start]) return;

    const queue = [start];
    const visited = {};
    const result = [];
    visited[start] = true;

    while (queue.length) {
      const item = queue.shift();

      Object.keys(this.edgesList[item]).forEach((nv) => {
        if (!visited[nv]) {
          visited[nv] = true;
          queue.push(nv);
        }
      });

      result.push(item);
      visited[start] = true;
    }

    return result;
  }
}

const graph = new Graph();
