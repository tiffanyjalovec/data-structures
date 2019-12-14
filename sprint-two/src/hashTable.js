//helpers: limitedArray
//get = function(index)
//set = function(index, value)
//each = function(callback)
//
//getIndexBelowMaxForKey = function(str, max)

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// ('Steven', 'seagal')

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if that index is empty
  if (this._storage.get(index) === undefined) {
  //  if it's empty then create the new bucket
    var bucket = [];
    //  push the new array into the bucket
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
  //  if it's not empty
  else {
  //  does k already exist here?

    let bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
      //    if it does, replace v
        bucket[i][1] = v;
        return;
      }
    //    otherwise, push [k, v] to this bucket
    }
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) { return false; }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) { return undefined; }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


