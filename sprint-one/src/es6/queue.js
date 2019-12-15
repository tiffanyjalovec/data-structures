class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, left, right) {
    this.storage = {};
    this.left = 0;
    this.right = 0;
  }

  enqueue(value) {
    this.storage[this.right++] = value;
  }

  dequeue() {
    if (this.right > this.left) {
      let value = this.storage[this.left];
      delete this.storage[this.left];
      this.left++;
      return value;
    }
  }

  size() {
    return this.right - this.left;
  }

}
