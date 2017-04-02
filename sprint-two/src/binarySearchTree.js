var BinarySearchTree = function(value) {
  var methods = Object.create(binaryMethods);
  methods.value = value;
  methods.left = null;
  methods.right= null;

  return methods;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  //check if value is more or less than parent value
  //if less set as key left
  //if more set as key right
  if(value > this.value) {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if(target === this.value){
    return true;
  }else if (target < this.value && this.left) {
    return this.left.contains(target);
  }else if (target > this.value && this.right) {
    return this.right.contains(target);
  }else{
    return false;
  }

};

binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
