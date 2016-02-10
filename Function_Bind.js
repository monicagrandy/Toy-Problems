// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

// For example, if we have the following object:

var bind = function(func, context){
  var args1 = [].slice.call(arguments,2)
  return function(){
    return func.apply(context, args1.concat([].slice.call(arguments)));
  }
}; 

Function.prototype.bind = function(context) {
  var args2 = [].slice.call(arguments,1) 
  var func = this;
  return function(){
    return func.apply(context, args2.concat([].slice.call(arguments)));
  }
};
