var Queue = function() {
  this.storage = {};
  this.left = 0;
  this.right = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.right++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.right > this.left) {
    let value = this.storage[this.left];
    delete this.storage[this.left];
    this.left++;
    return value;
  }
};

Queue.prototype.size = function() {
  return this.right - this.left;
};