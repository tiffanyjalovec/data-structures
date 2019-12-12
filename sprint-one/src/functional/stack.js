var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //create some keys for storage
    //keys are numeric starting at zero?
    //value is given to us and will be made into a key value pair
    storage[nextKey++] = value;
  };

  someInstance.pop = function() {
    if (nextKey !== 0) {
      nextKey--;
      let value = storage[nextKey];
      delete storage[nextKey];
      return value;
    }
  };

  someInstance.size = function() {
    return nextKey;
  };

  return someInstance;
};
