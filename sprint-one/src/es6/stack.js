class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, top) {
    this.storage = {};
    this.top = 0;
  }


  push(value) {
    this.storage[this.top++] = value;
  }

  pop() {
    if (this.top > 0) {
      this.top--;
      let value = this.storage[this.top];
      delete this.storage[this.top];
      return value;
    }
  }

  size() {
    return this.top;
  }
}