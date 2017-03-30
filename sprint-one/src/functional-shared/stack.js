
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var otherInstance = {};
  otherInstance.index = 0;
  _.extend(otherInstance, stackMethods);

  return otherInstance;
};

  var stackMethods = {};
  var stackStorage = {};

  stackMethods.push = function(val) {
    stackStorage[this.index] = val;
    this.index++;
  };

  stackMethods.pop = function() {
    if(this.index > 0) {
      this.index--;
    }
    return stackStorage[this.index];
  };

  stackMethods.size = function() {
    return this.index;
  };





//create stack function
//set empty result object
//set parameters passed in as the result objects values?
//pass result object and helper object into extend function
//return result object

//create extend function that accepts two objects
//set for in to loop through second object
//copy second object into first

//set empty helper object

//set .push key w/function in helper object

//set .pop key w/function in helper object

//set .size key w/function in helper object