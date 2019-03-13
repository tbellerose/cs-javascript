/**
 * Queue is a "First In First Out" data structure.
 * JS Arrays natively include the functionality of a Queue, so a Queue should only
 * need to be used when it could be useful to restrict access to Array methods.
 */
class Queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
