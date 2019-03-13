/**
 * A Stack is a "First In Last Out" data structure.
 * JS Arrays natively implement the functionality of a stack, so stacks are generally
 * only used when restricting access to Array methods is useful.
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
