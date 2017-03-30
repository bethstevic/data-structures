var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};
var storageQueue = {};

queueMethods.enqueue = function(value) {
  storageQueue[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  var temp = storageQueue[0];
  if(this.counter > 0){
  this.counter--;
}
  delete storageQueue[0];
  for(var key in storageQueue) {
    storageQueue[key - 1] = storageQueue[key];
  }
  delete storageQueue[this.counter];
  return temp;
};

queueMethods.size = function() {
  return this.counter;
};
