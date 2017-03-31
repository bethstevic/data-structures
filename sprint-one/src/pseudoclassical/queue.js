var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function (val){
  this.storage[this.counter] = val;
  this.counter++;
};

Queue.prototype.dequeue = function (val) {
  var temp = this.storage[0];
  if (this.counter > 0){
    this.counter--;
  }
  delete this.storage[0]
  for(var key in this.storage){
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.counter];
  return temp;
};

Queue.prototype.size = function () {
  return this.counter;
};