var Stack = function() {
  var newStack = {};
  newStack.top = 0;
  newStack.storage = {};

  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top++] = value;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    this.top--;
    let value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

stackMethods.size = function() {
  return this.top;
};

/*
{} t: 0
{'0': 'a'} t: 1
{'0': 'a', '1': 'b'} t: 2
*/