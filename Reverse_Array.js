//reverse an array in constant space without modifying the original array

//find the midpoint of the array
//find the length of the array
//iterate to the midpoint
//store the current index - i - 1 in a variable
//set the array at i to that variable
//return the array

function reverseArray(array){
  var length = array.length
  var mid = Math.floor(array.length/2)
  var temp
  for(var i = 0; i <= mid; i++){
    temp = array[length - i - 1]
    console.log("temp: ", temp)
    array[length - i - 1] = array[i]
    array[i] = temp
  }
  return array
}