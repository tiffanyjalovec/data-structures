var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let n = Node(value);
    if (list.tail === null) {
      list.tail = n;
      list.head = n;
    } else {
      list.tail.next = n;
      list.tail = n;
    }
  };

  list.removeHead = function() {
    if (list.tail === null) {
      return undefined;
    }
    let tempNode = list.head;
    delete list.head;
    list.head = tempNode.next;
    return tempNode.value;
  };

  list.contains = function(target) {
    /* linked list, the contains function
 Spec: inputs - target, linked list ; output - boolean
 Just: we want to know if the list contains something we're looking for
 Explain: Search the linked list by starting at the head and going to each member. If we find it, we stop and say yes! Otherwise we continue all the way to the tail.
 Visualization: done
    //Pseudocode:
    //  Find the head
    //  Starting at the head, iterate through the list
    //     Check current member to determine if it is the same as the target
    //     If it is, return true
    //     If the current member does not have a next member; return false
    //     Move from the current member to the next member
 */
    var currentMember = list.head;
    while (currentMember !== null) {
      if (currentMember.value === target) {
        return true;
      }
      if (currentMember.next === null) {
        return false;
      }
      currentMember = currentMember.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var myLL = new LinkedList();
/*
 * Complexity: What is the time complexity of the above functions?
 */
