const { Queue } = require("../../Stacks and Queues/queue");

class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }

  value;
  right;
  left;
}

class BST {
  constructor() {
    this.root = null;
  }

  root;

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currElem = this.root;

    while (currElem) {
      if (val < currElem.value) {
        if (currElem.left) {
          currElem = currElem.left;
          continue;
        }

        currElem.left = newNode;
        break;
      } else if (val > currElem.value) {
        if (currElem.right) {
          currElem = currElem.right;
          continue;
        }

        currElem.right = newNode;
        break;
      } else {
        return;
      }
    }

    return this;
  }

  find(val) {
    let currElem = this.root;

    if (!currElem) return false;

    while (currElem) {
      if (currElem.value === val) {
        return currElem;
      } else if (val < currElem.value) {
        currElem = currElem.left;
      } else {
        currElem = currElem.right;
      }
    }

    return false;
  }

  bfs() {
    const nodeQueue = new Queue();

    nodeQueue.push(this.root);
    nodeQueue.push(null);

    const visited = [];

    while (nodeQueue.length) {
      const visitedNode = nodeQueue.pop();

      if (visitedNode === null) {
        visited.push("&");
        if (nodeQueue.length) {
          nodeQueue.push(null);
        }
        continue;
      }

      visited.push(visitedNode.value);

      const currRight = visitedNode.right;
      const currLeft = visitedNode.left;

      if (currLeft) {
        nodeQueue.push(currLeft);
      }

      if (currRight) {
        nodeQueue.push(currRight);
      }
    }

    return visited;
  }

  dfsPreOrder(node = this.root) {
    let visited = [];

    if (node.left) {
      visited = [...visited, ...this.dfsPreOrder(node.left, visited)];
    }

    if (node.right) {
      visited = [...visited, ...this.dfsPreOrder(node.right, visited)];
    }

    return [node.value, ...visited];
  }

  dfsPostOrder(node = this.root) {
    let visited = [];

    if (node.left) {
      visited = [...visited, ...this.dfsPostOrder(node.left, visited)];
    }

    if (node.right) {
      visited = [...visited, ...this.dfsPostOrder(node.right, visited)];
    }

    return [...visited, node.value];
  }

  dfsInOrder(node = this.root) {
    let visited = [];

    if (node.left) {
      visited = [...visited, ...this.dfsInOrder(node.left, visited)];
    }

    visited = [...visited, node.value];

    if (node.right) {
      visited = [...visited, ...this.dfsInOrder(node.right, visited)];
    }

    return visited;
  }
}

const tree = new BST();

const treeItem = [
  // 35, 9, 24, 47, 90, 75, 21, 10, 63, 54, 71, 44, 71, 30, 61, 65, 11, 8, 81, 5,
  10,
  6, 15, 3, 8, 20,
];

treeItem.forEach((i) => tree.insert(i));

console.log(tree.dfsInOrder());
