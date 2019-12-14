var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  //check if the value of the tree is a match with the target
  if (this.value === target) {
  //if it is return true
    return true;
  }
  //if not, iterate through the children calling contains recursively
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  //return false
  return false;
};

//var myTree = Tree('foo');



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
Specification:
Inputs - a tree, value
Output - modified tree (growing)
Edge Cases - an empty tree

Justification: to be able to add new nodes to a tree
Explanation: The output tree will be the result of the input tree with one additional node containing the new value.

Pseudocode:
Create a node using the value given
If the tree is empty, make the node into a new tree
If the tree is not empty, add the node to the specified array of children
 */