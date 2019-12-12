var Queue = function() {
  var newQueue = {};
  newQueue.top = 0;
  newQueue.bottom = 0;
  newQueue.storage = {};

  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
  for ( var key in from ) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top++] = value;
};

queueMethods.dequeue = function(value) {
  if (this.top !== this.bottom) {
    let value = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return value;
  }
};

queueMethods.size = function(value) {
  return this.top - this.bottom;
};