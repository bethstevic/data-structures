var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.head !== null) {
      var current = new Node(value);
      list.tail.next = current;
      list.tail = current;
    }

    if(list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    }

  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
  //start at head see if it contains value
  //if not, go to node.next and see if contains value
  //if not ect
    var current = list.head;
    while(current !== list.tail) {
      if(current.value === target) {
        return true;
      }
      current = current.next;
    }

    if(list.tail.value !== target) {
      return false;
    } else {
      return true;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
