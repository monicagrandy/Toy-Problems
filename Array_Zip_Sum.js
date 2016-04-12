//Array Zip Sum

//Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s

function zipSum (xs, ys) {
  var result = [];
  var length = Math.min(xs.length, ys.length);

  for(var i = 0; i < length; i++){
    result[i] = xs[i]+ys[i];
  }

  return result;
}
