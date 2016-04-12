//Arrayception

//Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

function arrayception (array) {
  var deepest = 0;
  var currDepth = 1;
  function recurse(arr){
    for(var i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        currDepth += 1;
        recurse(arr[i]);
        currDepth -= 1;
      }
      else{
        if(currDepth > deepest){
          deepest = currDepth;
        }
      }
    }
    return deepest;
  }
  return recurse(array);
}
