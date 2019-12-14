// Instantiate a new graph
var Graph = function() {
  this._vertices = [];
};

Graph.prototype._vertex = function(value) {
  return { 'value': value, 'edges': [] };
};

exampleG = [{value: 'foo', edges: []}];

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //search the graph to see if the same value is already stored
  if (this.contains(value)) { return; }
  //put the value in a vertex
  //put the vertex in vertices array
  this._vertices.push(this._vertex(value));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //search the graph
  //  if the value is found, return true
  //return false
  for (let i = 0; i < this._vertices.length; i++) {
    if (this._vertices[i].value === value) { return true; }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  //loop through the vertices
  for (var i = 0; i < this._vertices.length; i++) {
  //  if we find the value, remove the vertex
    if ( this._vertices[i].value === value) {
      //  remove any edges
      this._vertices[i].edges.forEach(e => { this.removeEdge(value, e); });
      this._vertices.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  let fromValueIndex, toValueIndex;
  for (let i = 0; i < this._vertices.length; i++) {
    if (this._vertices[i].value === fromValue) { fromValueIndex = i; }
    if (this._vertices[i].value === toValue) { toValueIndex = i; }
    if (fromValueIndex !== undefined && toValueIndex !== undefined) { break; }
  }
  if (fromValueIndex !== undefined && toValueIndex !== undefined) {
    return this._vertices[fromValueIndex].edges.includes(toValue);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  //loop through the vertices
  //  if we find fromValue, save fromValueIndex
  //  if we find toValue, save toValueIndex
  //  if we have both, stop searching
  let fromValueIndex, toValueIndex;
  for (let i = 0; i < this._vertices.length; i++) {
    if (this._vertices[i].value === fromValue) { fromValueIndex = i; }
    if (this._vertices[i].value === toValue) { toValueIndex = i; }
    if (fromValueIndex !== undefined && toValueIndex !== undefined) { break; }
  }

  //do we have fromValueIndex and toValueIndex?
  //  if edges of vertex identified by fromValueIndex doesn't contain toValue
  //    push toValue onto edges of vertex identified by fromValueIndex
  //    push fromValue onto edges of vertex identified by toValueIndex
  if (fromValueIndex !== undefined && toValueIndex !== undefined) {
    if (!this._vertices[fromValueIndex].edges.includes(toValue)) {
      this._vertices[fromValueIndex].edges.push(toValue);
      this._vertices[toValueIndex].edges.push(fromValue);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  let fromValueIndex, toValueIndex;
  for (let i = 0; i < this._vertices.length; i++) {
    if (this._vertices[i].value === fromValue) { fromValueIndex = i; }
    if (this._vertices[i].value === toValue) { toValueIndex = i; }
    if (fromValueIndex !== undefined && toValueIndex !== undefined) { break; }
  }

  if (fromValueIndex !== undefined && toValueIndex !== undefined) {
    let i;
    i = this._vertices[fromValueIndex].edges.indexOf(toValue);
    this._vertices[fromValueIndex].edges.splice(i, 1);
    i = this._vertices[toValueIndex].edges.indexOf(fromValue);
    this._vertices[toValueIndex].edges.splice(i, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (let i = 0; i < this._vertices.length; i++) {
    cb(this._vertices[i].value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


