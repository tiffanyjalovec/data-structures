var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var bottom = 0;
  var top = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
  //add to the storage object at location top
    storage[top++] = value;
  };

  someInstance.dequeue = function() {
  //if it's not empty proceed
    if (top !== bottom) {
      let value = storage[bottom];
      delete storage[bottom];
      bottom++;
      return value;
    }
  };

  someInstance.size = function() {
    return top - bottom;
  };

  return someInstance;
};
