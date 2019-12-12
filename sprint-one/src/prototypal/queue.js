var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.top = 0;
  newQueue.bottom = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top++] = value;
};

queueMethods.dequeue = function() {
  if (this.top !== this.bottom) {
    let value = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return value;
  }
};

queueMethods.size = function() {
  return this.top - this.bottom;
};