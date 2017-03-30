var Stack = function() {

  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};


var stackMethods = {

  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    if(this.counter > 0){
    this.counter--;
  };
    return this.storage[this.counter];
  },

  size: function() {
    return this.counter;
  }
};


