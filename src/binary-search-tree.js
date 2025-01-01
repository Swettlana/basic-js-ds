const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }
    let currentElement = this.rootNode;
    while (currentElement) {
      if (data <= currentElement.data) {
        if (!currentElement.left) {
          currentElement.left = new Node(data);
          return;
        } else {
          currentElement = currentElement.left;
        }
      }
      if (data > currentElement.data) {
        if (!currentElement.right) {
          currentElement.right = new Node(data);
          return;
        } else {
          currentElement = currentElement.right;
        }
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }
    let currentElement = this.rootNode;
    while (currentElement) {
      if (data === currentElement.data) return true;
      if (data < currentElement.data) {
        if (!currentElement.left) {
          return false;
        } else {
          currentElement = currentElement.left;
        }
      }
      if (data > currentElement.data) {
        if (!currentElement.right) {
          return false;
        } else {
          currentElement = currentElement.right;
        }
      }
    }
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }
    let currentElement = this.rootNode;
    while (currentElement) {
      if (data === currentElement.data) return currentElement;
      if (data < currentElement.data) {
        if (!currentElement.left) {
          return null;
        } else {
          currentElement = currentElement.left;
        }
      }
      if (data > currentElement.data) {
        if (!currentElement.right) {
          return null;
        } else {
          currentElement = currentElement.right;
        }
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let minElement = this.rootNode;
    while (minElement.left) {
      minElement = minElement.left;
    }
    return minElement.data;
  }
  max() {
    if (!this.rootNode) {
      return null;
    }
    let maxElement = this.rootNode;
    while (maxElement.right) {
      maxElement = maxElement.right;
    }
    return maxElement.data;
  }
}

module.exports = {
  BinarySearchTree,
};
