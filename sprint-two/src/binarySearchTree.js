var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function (value){
  //look at the first node
  //if value === tree.value, quit
  if (value === this.value) { return; }

  //if value is less then tree.value
  if (value < this.value) {
  //  if tree.left is null, put newTree it at tree.left
    if (this.left === null) {
      // make a newTree with the given value
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if ( value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value)
    } else {
      this.right.insert(value);
    }
  }

  //  call insert on tree.left with value

  //if value is greater than tree.value
  //  if tree.right is null, put newTree at tree.right
  //  if tree.left is null
  //  call insert on tree.right with value

}

BinarySearchTree.prototype.contains = function (value){
  if ( value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function (fn){
  fn(this.value);
  if (this.left) {
    this.left.depthFirstLog(fn);
  }
  if (this.right){
    this.right.depthFirstLog(fn);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
Specification: Inputs: a value to put in the tree; Output: a revised tree after an insert; Output: whether or not a value exists in a given tree
Justification: To provide a data structure that organizes data so it can be found quickly
Explanation: Users can make a new tree with an initial value. Then they can insert new values into that tree. The new tree has smaller values as left children and larger values as right children of the parent value. When searching for a value, compare the target value is smaller or larger than the parent value. (If it's equal, you've found it.) If it's smaller, traverse the left child. If it's larger, traverse the right child.
We will also provide a way for users to give a callback function to be executed on every node in a given tree. It will work depth first (i.e. go down instead of across?)
*/