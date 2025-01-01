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

  remove(data) {
    if (!this.rootNode) {
      return;
    }

    const deleteElement = (root, value) => {
      if (!root) return null;
      if (value < root.data) {
        root.left = deleteElement(root.left, value);
        return root;
      }
      if (value > root.data) {
        root.right = deleteElement(root.right, value);
        return root;
      }
      if ((value = root.data)) {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        }
        if (!root.right) {
          return root.left;
        }
        let min = root.right;
        while (min.left) {
          min = min.left;
        }
        root.data = min.data;
        root.right = deleteElement(root.right, min.data);
        return root;
      }
    };
    this.rootNode = deleteElement(this.rootNode, data);
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
