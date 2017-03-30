var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};


  extend(someInstance, stackMethods);

  return someInstance;
};

  var extend = function(to, from) {
    for(var key in from) {
      to[key] = from[key];
    }
  }

  var stackMethods = {};

  var counter = 0;

  stackMethods.push = function(val) {
    this.counter = val;
    counter++;
  }

  stackMethods.pop = function() {
    if(counter > 0) {
      counter--;
    }
    return this.counter;
  }

  stackMethods.size = function() {
    return counter;
  }

  stackMethods.result = function(){
    return this.
  }

}


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