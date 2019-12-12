var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top++] = value;
};

Stack.prototype.pop = function() {
  if (this.top > 0) {
    this.top--;
    let value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.top;
};