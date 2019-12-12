var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.top = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top++] = value;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    --this.top;
    let value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

stackMethods.size = function () {
  return this.top;
};




