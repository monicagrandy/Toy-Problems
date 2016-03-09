// Implement the functions compose and pipe`.

// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

var compose = function(){
  //get all the functions pased in
  var functions = [].slice.call(arguments);
  //return a function that can access the secondary arguments
  return function(args){
  //iterate backwards through the list of functions
  return reduceRight(functions, function(accum, el){
    //chain each function together
    return el(accum);
  }, args);
  }
};

var pipe = function(){
  //get all the functions passed in
  var functions = [].slice.call(arguments);
  //return a function that can access the secondary arguments
  return function(args){
  //iterate forwards through the list of functions
  return reduce(functions, function(accum, el){
    //chain each function together
    return el(accum);
  },args);
  }
};

//helpers
var reduce = function(array, iterator, initialVal){
  for(var i = 0; i < array.length; i++){
    if(initialVal === undefined){
      initialVal = array[array.length-1];
    }
    else {
      initialVal = iterator(initialVal, array[i]);
    }
  }
  return initialVal;
}

var reduceRight = function(array, iterator, initialVal){
  //instead of _.each we will loop through the array backwards
  for(var i = array.length-1; i >= 0; i--){
    //check if initialVal was passed in
    if(initialVal === undefined){
      //set it equal to the last element in the array
      initialVal = array[array.length-1];
    }
    else {
      initialVal = iterator(initialVal, array[i]);
    }
  }
  return initialVal;
};