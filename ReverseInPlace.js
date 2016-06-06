//Reverse an array in place

function reverseInPlace(array){
  var length = array.length
  var temp;
  var half = Math.floor(length/2)
  for(var i = 0; i < half; i++){
    var last = length-1-i
    temp = array[i]
    array[i] = array[last]
    array[last] = temp
  }
  return array
}

