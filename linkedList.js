/**
 * Node holds some data and a reference to the next Node in a Linked List.
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * LinkedList contains a reference to the Head node and methods for accessing and
 * manipulating Nodes in the list.
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * size returns the number of nodes in the list.
   * @returns {number} - Count of nodes in the LinkedList
   */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /**
   * getAt retrieves the Node at the specified index.
   * @param {number} index - Index of the node to retrieve.
   * @returns {Node} - Node found at the given index. Null if index out of bounds.
   */
  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  /**
   * getFirst retrives the first Node in the list.
   * @returns {Node} - Node at head of the list. Null if list is empty.
   */
  getFirst() {
    return this.getAt(0);
  }

  /**
   * getLast retrieves the last Node in the list
   * @returns {Node} - Node at tail of the list. Null if list is empty.
   */
  getLast() {
    return this.getAt(this.size() - 1);
  }

  /**
   * insertAt inserts a Node with given data at the given index of the list. If index
   * is out of bounds, Node is inserted at the tail of the list.
   * @param {*} data - Node data
   * @param {number} index - Index at which to insert the Node.
   */
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  /**
   * insertFirst inserts a Node with given data at the head of the list.
   * @param {*} data - Node data
   */
  insertFirst(data) {
    this.insertAt(data, 0);
  }

  /**
   * insertLast inserts a Node with given data at the tail of the list.
   * @param {*} data - Node data
   */
  insertLast(data) {
    this.insertAt(data, this.size());
  }

  /**
   * removeAt removes the Node at the given index from the list. Returns early if index
   * is out of bounds.
   * @param {number} index
   */
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  /**
   * removeFirst removes the Node at the head of the list.
   */
  removeFirst() {
    this.removeAt(0);
  }

  /**
   * removeLast removes the Node at the tail of the list.
   */
  removeLast() {
    this.removeAt(this.size() - 1);
  }

  /**
   * clear removes all nodes from the list.
   */
  clear() {
    this.head = null;
  }

  /**
   * forEach executes a callback function on each Node in the list.
   * @param {Function} fn
   */
  forEach(fn) {
    let i = 0;
    let node = this.head;

    while (node) {
      fn(node, i);
      node = node.next;
      i++;
    }
  }

  /**
   * Generator to allow the use of for...of loops on LinkedList.
   */
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
