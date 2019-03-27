/**
 * Node holds some data and a reference to it's left and right children
 */
class Node {
  // Initialize the node with data and null references for left and right
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * BinarySearchTree contains a reference to the root node, and implements the basic
 * interface methods for manipulating or searching the tree.
 */
class BinarySearchTree {
  // Initialize tree with null reference to root.
  constructor() {
    this.root = null;
  }

  /**
   * Insert creates a new Node with given data at the appropriate position in the tree.
   * @param {*} data - Node data
   */
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (data < current.data && current.left) {
          current = current.left;
        } else if (data < current.data) {
          current.left = node;
          break;
        } else if (data > current.data && current.right) {
          current = current.right;
        } else if (data > current.data) {
          current.right = node;
          break;
        } else {
          break;
        }
      }
    }
  }

  /**
   * Contains searches the tree for a node with the given data.
   * @param {*} data - Data to search for in the tree
   * @returns {boolean} - true if data is found, false otherwise
   */
  contains(data) {
    let found = false;
    let current = this.root;

    while (!found && current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }

  /**
   * Traverse visits each Node in the tree and executes a function at each Node.
   * @param {*} fn - Function to be executed at each Node in the tree
   */
  traverse(fn) {
    function inOrder(node) {
      if (node) {
        if (node.left) {
          inOrder(node.left);
        }
        if (node.right) {
          inOrder(node.right);
        }
        fn(node);
      }
    }
    inOrder(this.root);
  }

  /**
   * Size returns the size of the BST.
   * @returns {number} - The count of Nodes in the tree
   */
  size() {
    let length = 0;
    this.traverse(() => {
      length++;
    });
    return length;
  }

  /**
   * toArray returns all Node data in the tree as an Array.
   * @returns {Array} - Array of all Node data in the tree
   */
  toArray() {
    const result = [];
    this.traverse(node => {
      result.push(node.data);
    });
    return result;
  }

  /**
   * toString returns all Node data as a String.
   * @returns {String} - String representation of all data in the tree
   */
  toString() {
    return this.toArray().toString();
  }
}

/**
 * Validate checks whether a tree is a valid Binary Search Tree.
 * @param {Node} node - The root node for a tree
 * @param {number} min - Min data value a Node must contain at it's position in the tree.
 * @param {number} max - Max data value a Node may contain at it's position in the tree.
 */
const validate = (node, min = null, max = null) => {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
};
