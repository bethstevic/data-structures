var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  //add new object with two keys
  this.children.push(Tree(value));
  //value key will be equal to value
  //children key will be an empty object

};

treeMethods.contains = function(target) {
  //set result equal to false
  //set lookUp function to take in the target and the node being searched
  //searches through node to find match
  //if match is found, returns true and function is complete
  //if no match is found, checks if node has children
  //if it does, it sends each child through the lookup function
  //returns result

  var result = false;
  var lookUp = function (target, node){
    if(node.value === target){
      result = true;
    };
    for(var i = 0; i < node.children.length; i++){
      lookUp(target, node.children[i]);
    }
  };

  lookUp(target, this);

  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
